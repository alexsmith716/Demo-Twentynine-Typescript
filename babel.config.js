module.exports = (api) => {

	const web = process.env.IS_CLIENT !== "false";

	api.cache(true);

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					modules: web ? false : "auto",
					useBuiltIns: web ? "usage" : undefined,
					corejs: web ? {version: 3, proposals: true} : false,
					targets: web ? {browsers: ["last 2 versions"]} : {node: "current"},
					debug: web ? false : false,
				}
			],
			"@babel/preset-typescript",
			"@babel/preset-react",
		],
		plugins: [
			["@babel/plugin-proposal-decorators", { legacy: true }],
			"@loadable/babel-plugin",
			"@babel/plugin-proposal-class-properties",
			"@babel/plugin-proposal-object-rest-spread",
			"@babel/plugin-proposal-export-default-from",
			"@babel/plugin-transform-runtime",
			[
				"babel-plugin-styled-components",
				{
					ssr: true,
					displayName: true,
					preprocess: false
				}
			],
		],
	};
};
