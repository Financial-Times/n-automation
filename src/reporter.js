const denodeify = require('denodeify');

const writeFile = denodeify(require('fs').writeFile);

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
		results.sessionId = options.globals.test_settings.sessionId;
		const writes = Object.keys(modules)
			.map(moduleName => {
				const file = `${outputFolder}${prefix}${moduleName.replace('/', '-')}.json`;
				return writeFile(file, JSON.stringify(results, null, 4))
					.catch(() => { });
			});

		Promise.all(writes)
			.then(() => done() );
	}
};
