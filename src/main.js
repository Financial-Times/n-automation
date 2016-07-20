'use strict';

// const REGRESSION_TRANSPORT = process.env.REGRESSION_TRANSPORT;
// const SLACK_URL = process.env.SLACK_URL;
// const RECIPIENTS = process.env.REGRESSION_RECIPIENTS;
// const SLACK_MENTIONS = process.env.SLACK_MENTIONS;

// TODO exctract to config file
const SUPPORTED_BROWSERS = ['ie8', 'ie9', 'ie10', 'ie11', 'chrome', 'firefox', 'edge', 'safari', 'iPhone6Plus', 'Nexus7'];

const worker = require('@financial-times/n-worker');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(REGRESSION_TRANSPORT);
const exec = require('child_process').exec;
const fetch = require('isomorphic-fetch');
const parseXML = require('xml2js').parseString;
const fs = require('fs');


const sendEmails = function (err, output) {

	const options = {
		from: '"Signup Regression" <no-reply@ft.com>',
		to: RECIPIENTS,
		subject: `❗Regression tests failed ${new Date()}`,
		text: output.replace('[0;37m ','').replace('[41m ', '').replace('[42m ', '').replace('[44m ', '').replace('[45m ', '')
	};

	transporter.sendMail(options, function (emailError, data) {
		if (emailError) {
			return console.log('Error sending emails', emailError);
		}
		console.log('Regression test notification sent to: ', data);
	});
};

const sendSlackNotification = function ({init, error, output, reports, appName}={}) {

	console.log('sendSlackNotification', init, error, reports)

	if (init) {
		const initOptions = {
			method: 'POST',
			body: JSON.stringify({
				username: `${appName} Tests`,
				text: `Started ${new Date()}`
			}),
			headers: {
				'Content-type': 'application/json'
			}
		};
		fetch(SLACK_URL, initOptions);
		return;
	}


	const fields = [];

	for (const key in reports) {
		if (reports.hasOwnProperty(key)) {

			let testResults = '';
			console.log('reports[key]', reports[key][0].tests)
			for (const test of reports[key][0].tests) {
				console.log(test)
				testResults += `\n${test.name}`;
			}

			fields.push({
				'title': key,
				'value': testResults,
				'short': true
			});
		}
	}

	console.log('FIELDS', fields)

	if (!error) {

		const success = {
			method: 'POST',
			body: JSON.stringify({
				username: `${appName} Tests`,
				attachments: [
					{
						'fallback': '',
						'text': 'All tests passed',
						'color': 'good',
						'fields': fields
					}
				]
			}),
			headers: {
				'Content-type': 'application/json'
			}
		};

		fetch(SLACK_URL, success);
	}
	else {
		// TODO error message (& warning message?)
	}
};

// TODO don't read output, parse result files
// TODO xml parser

// const curate = function (stdout, stderr) {
// 	let moreTestResults = true;
// 	const marker = 'Test: ';
// 	const failMarker = 'TEST FAILURE';
// 	const EOL = '\n';
// 	let result = {};
// 	let showedFailure = stdout.indexOf(failMarker) !== -1 ? true : false;

// 	console.log('CURATING:');
// 	console.log('failure', showedFailure, stdout.indexOf(failMarker));
// 	console.log('stderr', stderr);

// 	// We can show failure but succeed on a retry
// 	// only return empty if stderr is present
// 	if (showedFailure && stderr) {
// 		return {};
// 	}

// 	while (moreTestResults) {

// 		let index = stdout.indexOf(marker);

// 		if (index === -1) {
// 			moreTestResults = false;
// 			break;
// 		}

// 		let testName = stdout.substring(index + marker.length, stdout.indexOf(EOL, index)).replace('[0m', '');

// 		if (!result[testName]) {
// 			result[testName] = [];
// 		}

// 		let browser = null;
// 		let largestIndex = null;
// 		for (const candidate of SUPPORTED_BROWSERS) {
// 			let candidateIndex = stdout.lastIndexOf(candidate, index);

// 			if (candidateIndex !== -1 && result[testName].indexOf(candidate) === -1) {
// 				if (!largestIndex || candidateIndex > largestIndex) {
// 					largestIndex = candidateIndex;
// 					browser = candidate;
// 				}
// 			}
// 		}
// 		if (browser) {
// 			result[testName].push(browser);
// 		}
// 		largestIndex = null;

// 		stdout = stdout.substring(index + marker.length, stdout.length);
// 	}
// 	return result;
// }
function toTitleCase (str) {
    return str.replace(/\w\S*/g, function (txt){
    	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function getEnvironmentData (name) {

	const environment = name.split('_');

	const browser = toTitleCase(environment[0]);
	const version = environment[1] === 'undefined' ? '' : ` ${Math.floor(parseInt(environment[1], 10))}`;
	const os = environment[2] === 'ANY' ? '' : ` on ${toTitleCase(environment[2])}`

	return `${browser}${version}${os}`
}

function readReports (path) {

	console.log('READ REPORTS')
	const map = {};

	const reportNames = fs.readdirSync(path);

	if (!reportNames) {
		console.log('No reports found')
	}

	for (const name of reportNames) {

		const xmlContents = fs.readFileSync(`${path}/${name}`, 'utf8');

		parseXML(xmlContents, function (xmlError, json) {

			// console.log('\n\n\n\n', JSON.stringify(json))

			const env = getEnvironmentData(name)
			const suite = json.testsuites.testsuite[0]; // TODO accomodate multisuite
			const suiteInfo = {
				name: suite.$.name,
				failures: suite.$.failures,
				skipped: suite.$.skipped,
				time: suite.$.time,
				timestamp: suite.$.timestamps,
				tests: []
			}

			console.log('suite.testcase', suite.testcase)

			for (const test of suite.testcase) {
				suiteInfo.tests.push({
					name: test.$.name,
					failure: test.failure
				})
			}

			if (map[env]) {
				map[env].push(suiteInfo)
			}
			else {
				map[env] = [suiteInfo];
			};

			// console.log(JSON.stringify(jsonContents))
			// console.log(jsonContents)
		})
		// console.log(xmlContents)
	}
	return map;

	//
    // console.log(contents);
}

module.exports = class Automation {

	static run ({reportsPath, regressionCommand='make regression', verbose=true, appName}={}) {

		if (!reportsPath) {
			throw new Error('must specify nightwtach reports path')
		}

		console.log('Starting regression tests');


		if (verbose){
			sendSlackNotification({
				init: true,
				appName: appName
			});
		}

		const reports = readReports(reportsPath);
		console.log(reports)

		// TODO delete old reports before exec
		sendSlackNotification({
			error: false, // TODO check
			reports: reports,
			appName: appName
		});

		// exec(regressionCommand, {env: process.env}, function (error, stdout, stderr) {
		// 	console.log('\n\nerror', error);
		// 	console.log('\n\nstdout', stdout);
		// 	console.log('\n\nstderr', stderr);
		// 	// const output = curate(stdout, stderr);
		// 	// console.log('output', output)

		// 	sendSlackNotification({
		// 		error: error || stderr, // TODO check
		// 		output: stdout
		// 	});

		// 	if (error || stderr) { // TODO ONLY non retry errors
		// 		console.log('SENDING EMAIL', error, stderr)
		// 		sendEmails(stderr, stdout);
		// 	}
		// });
	}

	static schedule ({time='0 5 * * 1-5'}={}) {

		worker.setup().then(function () {

			console.log('scheduling', time);

			new worker.CronJob({
				cronTime: time,
				timeZone: 'Europe/London',
				onTick: this.run,
				onComplete: function () {
					console.log('cronjob done');
				}
			});

		});
	}
}
