function toTitleCase (str) {
    return str.replace(/\w\S*/g, function (txt){
    	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

module.exports = class Util {
	static getEnvironmentData (name) {

		const environment = name.split('_');

		const browser = toTitleCase(environment[0]);
		const version = environment[1] === 'undefined' ? '' : ` ${Math.floor(parseInt(environment[1], 10))}`;
		const os = environment[2] === 'ANY' ? '' : ` on ${toTitleCase(environment[2])}`

		return `${browser}${version}${os}`
	}
}
