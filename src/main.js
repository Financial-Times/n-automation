'use strict';

const REGRESSION_TRANSPORT = process.env.REGRESSION_TRANSPORT;
const SLACK_URL = process.env.SLACK_URL;
const RECIPIENTS = process.env.REGRESSION_RECIPIENTS;
const SLACK_MENTIONS = process.env.SLACK_MENTIONS;

// TODO exctract to config file
const SUPPORTED_BROWSERS = ['ie8', 'ie9', 'ie10', 'ie11', 'chrome', 'firefox', 'edge', 'safari', 'iPhone6Plus', 'Nexus7'];

const worker = require('@financial-times/n-worker');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(REGRESSION_TRANSPORT);
const exec = require('child_process').exec;
const fetch = require('isomorphic-fetch');
// const sample = require('./sample.js');

let VERBOSE = true;

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

const sendSlackNotification = function (err, results) {
	console.log('sendSlackNotification', err, results)
	if (!results) {

		// Don't show start message on slack when not in verbose mode
		if (VERBOSE) {
			const initOptions = {
				method: 'POST',
				body: JSON.stringify({
					username: '(Beta) Signup Tests',
					text: `Started ${new Date()}`
				}),
				headers: {
					'Content-type': 'application/json'
				}
			};
			fetch(SLACK_URL, initOptions);
		}
		return;
	}


	const fields = [];

	for (const key in results) {
		if (results.hasOwnProperty(key)) {
			fields.push({
				'title': key,
				'value': results[key].join(', '),
				'short': false
			});
		}
	}

	const options = {
		method: 'POST',
		body: JSON.stringify({
			username: '(Beta) Signup Tests',
			'attachments': [
				{
					'fallback': '',

					'text': err ? 	`Some automated tests have failed\n${SLACK_MENTIONS}` :
									`${fields.length} of ${fields.length} tests passing`,

					'color':  err ? 'warning' :
									'good',

					'fields': fields
				}
			]
		}),
		headers: {
			'Content-type': 'application/json'
		}
	};

	fetch(SLACK_URL, options);
};

const curate = function (stdout, stderr) {
	let moreTestResults = true;
	const marker = 'Test: ';
	const failMarker = 'TEST FAILURE';
	const EOL = '\n';
	let result = {};
	let showedFailure = stdout.indexOf(failMarker) !== -1 ? true : false;

	console.log('CURATING:');
	console.log('failure', showedFailure, stdout.indexOf(failMarker));
	console.log('stderr', stderr);

	// We can show failure but succeed on a retry
	// only return empty if stderr is present
	if (showedFailure && stderr) {
		return {};
	}

	while (moreTestResults) {

		let index = stdout.indexOf(marker);

		if (index === -1) {
			moreTestResults = false;
			break;
		}

		let testName = stdout.substring(index + marker.length, stdout.indexOf(EOL, index)).replace('[0m', '');

		if (!result[testName]) {
			result[testName] = [];
		}

		let browser = null;
		let largestIndex = null;
		for (const candidate of SUPPORTED_BROWSERS) {
			let candidateIndex = stdout.lastIndexOf(candidate, index);

			if (candidateIndex !== -1 && result[testName].indexOf(candidate) === -1) {
				if (!largestIndex || candidateIndex > largestIndex) {
					largestIndex = candidateIndex;
					browser = candidate;
				}
			}
		}
		if (browser) {
			result[testName].push(browser);
		}
		largestIndex = null;

		stdout = stdout.substring(index + marker.length, stdout.length);
	}
	return result;
}

class Automation {

	constructor ({verbose=true}={}) {
		VERBOSE = verbose;
	}

	run () {
		console.log('Starting regression tests');
		sendSlackNotification();
		exec('make regression', {env: process.env}, function (error, stdout, stderr) {
			console.log('error', error);
			console.log('stdout', stdout);
			console.log('stderr', stderr);
			const output = curate(stdout, stderr);
			console.log('output', output)

			sendSlackNotification(error || stderr, output);

			if (error || stderr) {
				console.log('SENDING EMAIL', error, stderr)
				sendEmails(stderr, stdout);
			}
			else {
				console.log('NOT SENDING EMAIL', error, stderr)
			}
		});
	}

	schedule () {
		// regression.ping();

		worker.setup().then(function () {
			console.log('scheduling');
			new worker.CronJob({
				// cronTime: '00 * * * *',
				cronTime: '30 8,12,16 * * 1-5',
				timeZone: 'Europe/London',
				onTick: this.run,
				onComplete: function () {
					console.log('cronjob done');
				}
			});
		});

	}

	// dryRun () {
	// 	const fakeStdout = sample.output;
	// 	const output = curate(fakeStdout);

	// 	console.log(output);
	// 	// sendSlackNotification(false, output);
	// 	// sendEmails(false, output);
	// }

	// this.dryRun();

}
export default Automation;
