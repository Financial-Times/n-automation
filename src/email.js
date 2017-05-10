const REGRESSION_TRANSPORT = process.env.REGRESSION_TRANSPORT;
const RECIPIENTS = process.env.REGRESSION_RECIPIENTS;

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(REGRESSION_TRANSPORT);
const logger = require('@financial-times/n-logger').default;

module.exports = function sendEmails (err, output, { suite = 'regression' } = { }) {
	const capitalisedSuite = suite.charAt(0).toUpperCase() + suite.slice(1);
	const options = {
		from: `"Signup ${capitalisedSuite}" <no-reply@ft.com>`,
		to: RECIPIENTS,
		subject: `❗${capitalisedSuite} tests failed ${new Date()}`,
		text: output.replace('[0;37m ','').replace('[41m ', '').replace('[42m ', '').replace('[44m ', '').replace('[45m ', '')
	};

	transporter.sendMail(options, function (emailError, data) {
		if (emailError) {
			return logger.info('Error sending emails', emailError);
		}
		logger.info(`${capitalisedSuite} test notification sent to: `, data);
	});
};
