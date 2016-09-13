let SLACK_URL = process.env.SLACK_URL;
let SLACK_MENTIONS = process.env.SLACK_MENTIONS;

const fetch = require('isomorphic-fetch');
const logger = require('@financial-times/n-logger').default.logger;

module.exports = function sendSlackNotification ({
	init,
	error,
	reports,
	// packageJson,
	verbose,
	compact,
	appName = 'Regression',
	suite
	// appLogo = 'https://next-geebee.ft.com/assets/brand-ft/icons/favicon-32x32.png'
}={}) {

	// const appGithub = packageJson && packageJson.repository ? packageJson.repository.url : '';
	// const appHerokuName = packageJson ? packageJson.name : '';

	if (init && verbose) {
		const initOptions = {
			method: 'POST',
			body: JSON.stringify({
				username: `${appName} Tests`,
				text: `Starting ${suite} tests...`
			}),
			headers: {
				'Content-type': 'application/json'
			}
		};
		fetch(SLACK_URL, initOptions);
		return;
	}

	const successFields = [];
	const failedFields = [];
	let failuresFound = 0;

	if (verbose) {
		for (const key in reports) {
			if (reports.hasOwnProperty(key)) { // key is browser

				let testResults = '';
				let failedTestResults = '';

				for (const test of reports[key]) { // test suite: gateways
					let failures = 0;
					let passed = 0;
					failures += test.failures;
					failuresFound += Number(failures);

					for (const testCase of test.tests) { // test: UK | PREMIUM |...

						if (testCase.failure) {
							failedTestResults += `\n<${testCase.videoUrl}|${testCase.name}>`;
						}
						else {
							testResults += (compact ? ' ' : '\n') + testCase.name;
							passed++;
						}
					}

					if (failures > 0) { // all test cases for a suite failed

						failedFields.push({
							'title': key,
							'value': `${test.name}:${failedTestResults}`,
							'short': false
						});
					}

					if (passed > 0) {

						const existingField = successFields.find(function (field) {
							return field.title === key;
						})

						if (existingField) {
							existingField.value += `\n${test.name}` + (failedTestResults ? ' (partial success)' : '')
						}
						else {
							successFields.push({
								'title': key,
								'value': `${test.name}` + (failedTestResults ? ' (some failed)' : ''),
								'short': false
							});
						}
					}
				}
			}
		}
	}

	const attachmentSuccess = {
		'fallback': 'All tests passed',
		// 'pretext': 'All regression tests passed!',
		// 'author_name': 'Saucelabs Dashboard',
		// 'author_link': 'https://saucelabs.com/beta/dashboard/tests',
		// 'author_icon': 'https://marketplace-cdn.atlassian.com/files/images/2fdb6577-55eb-4d53-a5f5-87771ea85929.png',
		// 'title': `${appHerokuName}`,
		// 'title_link': appGithub,
		'color': 'good',
		'fields': successFields,
		// 'footer': `${appName}`,
		// 'footer_icon': appLogo,
		// 'ts': Date.now() / 1000
	}

	const successBody = {
		method: 'POST',
		body: {
			username: `${appName} Tests`,
			attachments: [attachmentSuccess]
		},
		headers: {
			'Content-type': 'application/json'
		}
	};

	logger.info('error?', error)

	if (failuresFound === 0) {
		successBody.body = JSON.stringify(successBody.body);
		// logger.info('sending success body')
		logger.info(successBody)
		fetch(SLACK_URL, successBody);
	}
	else {
		const attachmentFailure = JSON.parse(JSON.stringify(attachmentSuccess));
		attachmentFailure.color = '#f00';
		attachmentFailure.fields = failedFields;
		// attachmentFailure.pretext = `${failuresFound} tests failed:`;
		// attachmentFailure.text = SLACK_MENTIONS;
		// attachmentSuccess.pretext = 'These tests have passed:'

		const failureBody = JSON.parse(JSON.stringify(successBody));
		failureBody.body.attachments = [attachmentFailure, attachmentSuccess];
		failureBody.body.text = `${failuresFound} test cases failed, ${SLACK_MENTIONS}`;

		failureBody.body = JSON.stringify(failureBody.body);
		// logger.info('sending failure body')
		logger.info(failureBody)
		fetch(SLACK_URL, failureBody);
	}
};
