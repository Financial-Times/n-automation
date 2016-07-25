const exec = require('child_process').exec;
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
		if (name.indexOf('json')) {
			fs.unlinkSync(`${path}/${name}`);
		}
	}
}

function readReports (path) {

	logger.info('Reading new reports...')
	const map = {};

	const reportNames = fs.readdirSync(path);
	logger.info(reportNames);

	if (!reportNames) {
		logger.info('No reports found!')
	}

	for (const name of reportNames) {

		const jsonReport = JSON.parse(fs.readFileSync(`${path}/${name}`, 'utf8'));

		for (const moduleName in jsonReport.modules) {
			if (jsonReport.hasOwnProperty(moduleName)) {

				const module = jsonReport.modules[moduleName];

				const suiteInfo = {
					name: moduleName,
					failures: module.failures,
					skipped: module.skipped,
					time: module.time,
					timestamp: module.timestamp,
					tests: []
				}

				for (const testCaseName in module.completed) {
					if (module.completed.hasOwnProperty(testCaseName)) {
						const testCase = module.completed[testCaseName];
						suiteInfo.tests.push({
							name: testCaseName,
							failure: testCase.failed,
							time: testCase.time,
							videoUrl: `https://saucelabs.com/beta/tests/${jsonReport.sessionId}/watch`
						});
					}
				}

				const env = util.getEnvironmentData(name);

				if (map[env]) {
					map[env].push(suiteInfo)
				}
				else {
					map[env] = [suiteInfo];
				};
			}
		}
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
				error: error,
				reports: reports,
				appName: appName,
				appLogo: appLogo,
				packageJson: packageJson,
				verbose: verbose
			});

			if (error) {
				logger.info('Sending email...', error, stderr)
				sendEmails(stderr, stdout);
			}
		});
	}
}
