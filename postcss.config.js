const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		require('postcss-import'),
		postcssPresetEnv({
			stage: 0,
		}),
	],
};
