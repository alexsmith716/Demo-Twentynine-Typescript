const path = require('path');
const express = require('express');
//  const httpProxy = require('http-proxy');
const http = require('http');
//  const bodyParser = require('body-parser');
const webpack = require('webpack');
const { getUserAgent } = require('../src/utils/device');
const { isBot } = require('../src/utils/device');
const logger = require('../src/utils/logger');

/* eslint-disable global-require */

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8080;

const unhandledRejections = new Map();

process.on('unhandledRejection', (reason, promise) => {
	logger.error(`>>>> BIN > START > process > Unhandled Rejection at promise: ${promise}`);
	logger.error(`>>>> BIN > START > process > Unhandled Rejection reason: ${reason}`);
	unhandledRejections.set(promise, reason);
});

process.on('rejectionHandled', (promise) => {
	logger.error(`>>>> BIN > START > process > rejectionHandled > promise: ${promise}`);
	unhandledRejections.delete(promise);
});

//  const targetUrl = process.env.API_HOST || 'http://localhost:8080';
const app = express();
const server = http.createServer(app);

//  const proxy = httpProxy.createProxyServer({
//    target: targetUrl,
//    changeOrigin: true,
//  });

app.set('port', port);
//  app.use(bodyParser.json());
//  app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	logger.log(`>>>>>>>>>>>>>>>>> START > REQUEST IN <<<<<<<<<<<<<<<<<<<<<<<`);
	// logger.log(`>>>>>>>>>>>>>>>>> START > REQ.ip +++++++++++++: ${req.ip}`);
	logger.log(`>>>>>>>>>>>>>>>>> START > REQ.method +++++++++++++++: ${req.method}`);
	logger.log(`>>>>>>>>>>>>>>>>> START > REQ.url ++++++++++++++++++: ${req.url}`);
	logger.log(`>>>>>>>>>>>>>>>>> START > REQ.path ++++++++++++++++++: ${req.path}`);
	logger.log(`>>>>>>>>>>>>>>>>> START > REQ.originalUrl ++++: ${req.originalUrl}`);
	logger.log(`>>>>>>>>>>>>>>>>> START > REQUEST OUT <<<<<<<<<<<<<<<<<<<<<<<`);
	next();
});

app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use('/favicon.ico', (req, res) => res.status(200).send());

app.use((req, res, next) => {
	req.userAgent = getUserAgent(req.headers['user-agent']);
	req.isBot = isBot(req.headers['user-agent']);
	next();
});

//  app.use((req, res, next) => {
//    res.setHeader('X-Forwarded-For', req.ip);
//    return next();
//  });
//  
//  app.use('/api', (req, res) => {
//    console.log('>>>> BIN > START > PROXY TO API SERVER');
//    proxy.web(req, res, { target: targetUrl });
//  });
//  
//  app.use('/graphql', (req, res) => {
//    console.log('>>>> BIN > START > PROXY TO GRAPHQL SERVER');
//    proxy.web(req, res, { target: targetUrl });
//  });

// ---------------------------------------------------------------------

let isBuilt = false;

const done = () => {
	if (!isBuilt) {
		server.listen(port, host, (err) => {
			isBuilt = true;
			logger.end('>>>> BIN > START > STATS COMPILER HAS COMPLETED BUILD !! WAIT IS OVER !');
			if (err) {
				logger.error('>>>> BIN > START > ERROR:', err);
			}
		});
	}
};

logger.start(`>>>> BIN > START > __DEVELOPMENT__ ?: ${__DEVELOPMENT__}`);
logger.start('>>>> BIN > START > STATS COMPILER ATTEMPTING BUILD ! PLEASE WAIT ! ...');

// ----------------------------------------------------------------------------------

const clientConfigProd = require('../webpack/prod.client');
const serverConfigProd = require('../webpack/prod.server');

webpack([clientConfigProd, serverConfigProd]).run((err, stats) => {
	if (err) {
		logger.error('>>>> BIN > START > PROD > err: ', err.stack || err);
		if (err.details) {
			logger.error('>>>> BIN > START > PROD > err.details: ', err.details);
		}
		return;
	}

	const clientStats = stats.toJson().children[0];
	const serverStats = stats.toJson().children[1];

	if (stats.hasErrors()) {
		logger.error('>>>> BIN > START > clientStats.hasErrors: ', clientStats.errors);
		logger.error('>>>> BIN > START > serverStats.hasErrors: ', serverStats.errors);
	}
	if (stats.hasWarnings()) {
		logger.warn('>>>> BIN > START > clientStats.warnings: ', clientStats.warnings);
		logger.warn('>>>> BIN > START > clientStats.warnings: ', serverStats.warnings);
	}

	const webStats = path.resolve(__dirname,'../dist/loadable-stats.json');

	// eslint-disable-next-line import/no-unresolved
	const serverRender = require('../build/server.js').default;

	app.use(serverRender(webStats));

	done();
});

// ----------------------------------------------------------------------------------

const gracefulShutdown = (msg, cb) => {
	logger.log(`>>>> BIN > START > Mongoose Connection closed through: ${msg}`);
	cb();
};

process.on('exit', (code) => {
	logger.log(`>>>> BIN > START > About to exit with code: ${code}`);
});

process.on('warning', (warning) => {
	logger.warn('>>>> BIN > START > Node process warning.name:', warning.name);
	logger.warn('>>>> BIN > START > Node process warning.message:', warning.message);
	logger.warn('>>>> BIN > START > Node process warning.stack:', warning.stack);
});

process.on('SIGINT', (m) => {
	logger.log('>>>> BIN > START > CHILD got Node process SIGINT message:', m);
	gracefulShutdown('app termination', () => {
		logger.log('>>>> BIN > START > Mongoose SIGINT gracefulShutdown');
		process.exit(0);
	});
});

process.once('SIGUSR2', (m) => {
	logger.log('>>>> BIN > START > CHILD got Node process SIGUSR2 message:', m);
	gracefulShutdown('nodemon restart', () => {
		logger.log('>>>> BIN > START > Mongoose SIGUSR2 gracefulShutdown');
		process.kill(process.pid, 'SIGUSR2');
	});
});

process.on('SIGTERM', (m) => {
	logger.log('>>>> BIN > START > CHILD got Node process SIGTERM message:', m);
	gracefulShutdown('Heroku app termination', () => {
		logger.log('>>>> BIN > START > Mongoose SIGTERM gracefulShutdown');
		process.exit(0);
	});
});
