const exec = require('child_process').exec;
const parseXML = require('xml2js').parseString;
const fs = require('fs');

const util = require('./util');
const sendEmails = require('./email');
const sendSlackNotification = require('./slack');
const logger = require('@financial-times/n-logger').default.logger;

function emptyReportsFolder (path) {
	logger.info('Deleting old reports...')

	const reportNames = fs.readdirSync(path);

	logger.info(reportNames);

	for (const name of reportNames) {
		if (name.indexOf('xml')) {
			fs.unlinkSync(`${path}/${name}`);
		}
	}
}

function readReports (path) {

	logger.info('Reading new reports...')
	const map = {};

	const reportNames = fs.readdirSync(path);

	if (!reportNames) {
		logger.info('No reports found!')
	}

	for (const name of reportNames) {

		const xmlContents = fs.readFileSync(`${path}/${name}`, 'utf8');

		parseXML(xmlContents, function (xmlError, json) {

			// logger.info('\n\n\n\n', JSON.stringify(json))

			const env = util.getEnvironmentData(name)
			const suite = json.testsuites.testsuite[0]; // TODO accomodate multisuite
			const suiteInfo = {
				name: suite.$.name,
				failures: suite.$.failures,
				skipped: suite.$.skipped,
				time: suite.$.time,
				timestamp: suite.$.timestamps,
				tests: []
			}

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
		})
	}
	return map;
}

module.exports = class Automation {

	static run ({
		nightwatchJson,
		regressionCommand='make regression',
		verbose=true,
		packageJson = {},
		appName,
		appLogo
	}={}) {

		if (!nightwatchJson) {
			throw new Error('must specify nightwtach config path')
		}

		logger.info('Starting regression tests...');
		const reportsPath = nightwatchJson.output_folder;
		emptyReportsFolder(reportsPath)


		sendSlackNotification({
			init: true,
			appName: appName,
			verbose: verbose
		});


		exec(regressionCommand, {env: process.env}, function (error, stdout, stderr) {
			// logger.info('\n\nerror', error);
			// logger.info('\n\nstdout', stdout);
			// logger.info('\n\nstderr', stderr);

			const reports = readReports(reportsPath);

			sendSlackNotification({
				error: error || stderr, // TODO ONLY non retry errors
				reports: reports,
				appName: appName,
				appLogo: appLogo,
				packageJson: packageJson,
				verbose: verbose
			});

			if (error || stderr) {
				logger.info('Sending email...', error, stderr)
				sendEmails(stderr, stdout);
			}
		});
	}
}
