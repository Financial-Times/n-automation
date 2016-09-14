const fs = require('fs')

function safePath (path) {
	const lastSlash = path.lastIndexOf('/');

	if (lastSlash === path.length - 1) {
		return path;
	}

	return `${path}/`;
}

module.exports = {
	write: function (results, options, done) {

		if (!options.output_folder) {
			throw new Error('No output folder found')
		}

		const outputFolder = safePath(options.output_folder);
		const prefix = options.filename_prefix;
		const modules = results.modules;
		results.sessionId = options.globals.sessionId;


		for (const moduleName in modules) {
			if (modules.hasOwnProperty(moduleName)) {
				const file = `${outputFolder}${prefix}${moduleName.replace('/', '-')}.json`;
				fs.writeFile(file, JSON.stringify(results, null, 4))
			}
		}
		done();
	}
};
