const exec = require('child_process').exec;
const fs = require('fs');

const util = require('./util');
const sendEmails = require('./email');
const sendSlackNotification = require('./slack');
const logger = require('@financial-times/n-logger').default;

function emptyReportsFolder (path) {
	logger.info('Deleting old reports...');

	let reportNames;
	try {
		reportNames = fs.readdirSync(path);
	} catch (err) {
		if (err.code === 'ENOENT') {
			return;
		}
	}

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
			if (jsonReport.modules.hasOwnProperty(moduleName)) {

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
		verbose=true,
		compact=false,
		packageJson = {},
		appName,
		appLogo,
		suite='regression'
	}={}) {

		if (!nightwatchJson) {
			throw new Error('must specify nightwtach config path')
		}

		const command = `make ${suite}`;

		logger.info(`Starting ${suite} tests...`);
		const reportsPath = nightwatchJson.output_folder;
		emptyReportsFolder(reportsPath)


		sendSlackNotification({
			init: true,
			appName: appName,
			verbose: verbose,
			suite: suite
		});


		exec(command, {env: process.env}, function (error, stdout, stderr) {
			console.log('\n\n[debug] error:', error);
			console.log('\n\n[debug] stdout:', stdout);
			console.log('\n\n[debug] stderr:', stderr);

			const reports = readReports(reportsPath);

			sendSlackNotification({
				error: error,
				reports: reports,
				appName: appName,
				appLogo: appLogo,
				packageJson: packageJson,
				verbose: verbose,
				compact: compact,
				suite: suite
			});

			if (error) {
				logger.info('Sending email...', error, stderr)
				sendEmails(stderr, stdout, { suite });
			}
		});
	}
}
