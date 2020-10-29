const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const externals = require('./node-externals');
const rootPath = path.resolve(__dirname, '..');

const generatedIdent = (name, localName, lr) => {
	const b = Buffer.from(lr).toString('base64');
	// eslint-disable-next-line space-infix-ops
	return `${name}__${localName}--${b.substring(b.length - 12, b.length - 3)}`;
};

module.exports = {
	context: path.resolve(__dirname, '..'),

	name: 'server',
	target: 'node',
	externals,
	mode: 'production',

	entry: {
		server: './src/server.js',
	},

	output: {
		path: path.resolve('./build'),
		filename: '[name].js',
		libraryTarget: 'commonjs2',
	},

	module: {
		rules: [
			{
				type: 'javascript/auto',
				test: /\.mjs$/,
				use: [],
				include: /node_modules/,
			},

			{
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				loader: 'graphql-tag/loader',
			},

			// ====================================================================================

			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					babelrc: false,
					configFile: path.resolve(rootPath, 'babel.config.js'),
				},
			},

			// ====================================================================================

			{
				test: /\.(css)$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								getLocalIdent: (loaderContext, localIdentName, localName) => {
									const lr = loaderContext.resourcePath;
									if (path.basename(lr).indexOf('global.scss') !== -1) {
										return localName;
									}
									if (path.basename(lr).indexOf('graphiql.css') !== -1) {
										return localName;
									}
									return generatedIdent(
										path.basename(lr).replace(/\.[^/.]+$/, ''),
										localName,
										lr,
									);
								},
								namedExport: true,
							},
							importLoaders: 2,
						},
					},
					{
						loader: 'resolve-url-loader',
					},
					{
						loader: 'postcss-loader',
					},
				],
			},

			// ====================================================================================

			{
				test: /\.(scss)$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								getLocalIdent: (loaderContext, localIdentName, localName) => {
									const lr = loaderContext.resourcePath;
									if (path.basename(lr).indexOf('global.scss') !== -1) {
										return localName;
									}
									return generatedIdent(
										path.basename(lr).replace(/\.[^/.]+$/, ''),
										localName,
										lr,
									);
								},
								namedExport: true,
							},
							importLoaders: 2,
						},
					},
					{
						loader: 'resolve-url-loader',
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								outputStyle: 'compressed',
							},
						},
					},
				],
			},

			// ====================================================================================

			{
				test: /\.(gif|jpg|svg|png|ico|woff|woff2|ttf)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							esModule: false,
						},
					},
				],
			},
		],
	},

	performance: {
		hints: false,
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.css', '.scss', '.mjs'],
		alias: {
			react: path.resolve('./node_modules/react'),
		},
	},

	plugins: [
		new ForkTsCheckerWebpackPlugin(),

		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),

		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		}),

		new webpack.DefinePlugin({
			'process.env.IS_CLIENT': JSON.stringify(false),
			__CLIENT__: false,
			__SERVER__: true,
			__DEVELOPMENT__: false,
			__DEVTOOLS__: false,
		}),

		new webpack.HashedModuleIdsPlugin(),
	],
};
