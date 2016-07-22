const emoji = {
	'ANDROID': ':android:',
	'CHROME': ':chrome:',
	'FIREFOX': ':ff:',
	'INTERNET EXPLORER': ':ie:',
	'MICROSOFTEDGE': ':edge:',
	'SAFARI': ':safari:',
	'MAC': ':mac:',
	'WINDOWS': ':windows:',
	'WINDOWS NT': ':windows:'
}

function toEmoji (str) {
	return emoji[str.toUpperCase()] || str;
}

module.exports = class Util {
	static getEnvironmentData (name) {

		const environment = name.split('_');

		const browser = toEmoji(environment[0]);
		const version = environment[1] === 'undefined' ? '' : ` ${Math.floor(parseInt(environment[1], 10))}`;
		// const os = environment[2] === 'ANY' ? '' : `${toEmoji(environment[2])}`

		return `${browser}${version}`
	}
}
