
// const SLACK_URL = process.env.SLACK_URL;

// const SLACK_MENTIONS = process.env.SLACK_MENTIONS;

const SLACK_MENTIONS= '@laura.carvajal';
const SLACK_URL = 'https://hooks.slack.com/services/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';

module.exports = function sendSlackNotification ({
	init,
	error,
	reports,
	packageJson,
	verbose,
	appName = 'Regression',
	appLogo = 'https://next-geebee.ft.com/assets/brand-ft/icons/favicon-32x32.png'
}={}) {

	const appGithub = packageJson && packageJson.repository ? packageJson.repository.url : '';
	const appHerokuName = packageJson ? packageJson.name : '';

	if (init && verbose) {
		const initOptions = {
			method: 'POST',
			body: JSON.stringify({
				username: `${appName} Tests`,
				text: 'Starting regression tests...'
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
			if (reports.hasOwnProperty(key)) {

				let testResults = '';

				// console.log('reports[key]', reports[key][0].tests)
				// for (const test of reports[key][0].tests) {
				// 	console.log(test)
				// 	testResults += `\n${test.name}`;
				// }

				const failures = reports[key][0].failures;

				failuresFound += Number(failures);

				if (failures > 0) {
					failedFields.push({
						'title': key,
						'value': reports[key][0].name,
						'short': true
					});
				}
				else {
					successFields.push({
						'title': key,
						'value': reports[key][0].name,
						'short': true
					});
				}
			}
		}
	}

	const attachmentSuccess = {
		'fallback': '',
		'fallback': 'All tests passed',
		'pretext': 'All regression tests passed!',
		'author_name': 'Saucelabs Dashboard',
		'author_link': 'https://saucelabs.com/beta/dashboard/tests',
		'author_icon': 'https://marketplace-cdn.atlassian.com/files/images/2fdb6577-55eb-4d53-a5f5-87771ea85929.png',
		'title': `${appHerokuName}`,
		'title_link': appGithub,
		'color': 'good',
		'fields': successFields,
		'footer': `${appName}`,
		'footer_icon': appLogo,
		'ts': Date.now() / 1000
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

	if (!error && failuresFound === 0) {
		successBody.body = JSON.stringify(successBody.body);
		console.log('sending success body')
		console.log(successBody)
		fetch(SLACK_URL, successBody);
	}
	else {

		const attachmentFailure = JSON.parse(JSON.stringify(attachmentSuccess));
		attachmentFailure.color = '#f00';
		attachmentFailure.fields = failedFields;
		attachmentFailure.pretext = `${failuresFound} tests failed`;
		attachmentFailure.text = SLACK_MENTIONS;

		attachmentSuccess.pretext = 'These tests are passing:'

		const failureBody = JSON.parse(JSON.stringify(successBody));
		failureBody.body.attachments = [attachmentFailure, attachmentSuccess]

		failureBody.body = JSON.stringify(failureBody.body);
		console.log('sending failure body')
		console.log(failureBody)
		fetch(SLACK_URL, failureBody);
	}
};