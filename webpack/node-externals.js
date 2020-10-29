const fs = require('fs');
const path = require('path');

const res = (p) => path.resolve(__dirname, p);
const nodeModules = res('../node_modules');

// a hand-crafted "webpack-node-externals"
// https://github.com/webpack/webpack/issues/839#issuecomment-76738356

// this is SERVER BUILD ++++
// SERVER BUILD > no need to bundle Node dependencies ++++
// externals: modules that should not be bundled
// "externals" configuration provides a way of excluding dependencies from the output bundles.
// Instead, the created bundle relies on that dependency to be present in the consumer's environment.
// >>>> "consumer" is any end-user application that includes the library bundled using webpack <<<<
// Prevent bundling of certain imported packages and instead retrieve these external dependencies at runtime
// >>>> For example, to include jQuery from a CDN instead of bundling it: <<<<

// What is a webpack Module?
// "CommonJS require() statement"
// http://webpack.js.org/concepts/modules/

// https://webpack.js.org/configuration/externals/
// https://github.com/liady/webpack-node-externals
// When bundling with Webpack for the backend (target: 'node')
//    - you usually don't want to bundle its node_modules dependencies
// All node modules will not be bundled but will be left as "require('module')"

const externals = fs
	.readdirSync(nodeModules)

	// WILL include in the bundle
	.filter((x) => !/\.bin|@loadable\/component/.test(x))
	.reduce((accumulator, currentArrayElement) => {
		accumulator[currentArrayElement] = `commonjs ${currentArrayElement}`;
		return accumulator;
	}, {});

// WILL NOT include in the bundle
externals['react-dom/server'] = 'commonjs react-dom/server';

// console.log('>>>> webpack > node-externals > externals: ', externals);

module.exports = externals;
