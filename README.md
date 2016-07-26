# n-automation [![Circle CI](https://circleci.com/gh/Financial-Times/n-automation.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-automation)

Run automated [regression tests](https://en.wikipedia.org/wiki/Regression_testing) for your app using [nightwatch.js](http://nightwatchjs.org/) and get results on Slack and email.

![slack notification](doc/slacknotif.png)

## Installation

`npm install @financial-times/n-automation`

## Usage

Write a `regression` recipe on your Makefile containing the tests you'd like to run, passing the `n-automation` reporter to `nht nightwatch`:

### Makefile
```bash
REPORTER = ./node_modules/@financial-times/n-automation/build/reporter.js

regression-core:
	nht nightwatch -c nightwatch.js path/to/test.js --reporter ${REPORTER}
	nht nightwatch -c nightwatch.js path/to/anotherTest.js --reporter ${REPORTER}
	...
```

Init `n-automation` in an independent file somewhere in your project:

### jobs/run-regression.js

```js
const Automation = require('@financial-times/n-automation');

Automation.run({
	appName: 'Your App Name',
	nightwatchJson: require('../nightwatch.js') // If you have one. Uses `n-heroku-tools` default otherwise.
});
```
### Env Variables

`process.env.SLACK_URL` Slack [Incoming Webhook URL](https://api.slack.com/incoming-webhooks) for the channel to notify of test results (required)
`process.env.SLACK_MENTIONS` Slack users to mention on failure (optional)

### Heroku Schedule

Schedule your job with something like the [Heroku Scheduler](https://elements.heroku.com/addons/scheduler). Once a day is recommended.

### Slack notifications


### Email on failure

