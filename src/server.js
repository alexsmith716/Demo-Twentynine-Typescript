import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { Router, StaticRouter } from 'react-router';
import { createMemoryHistory } from 'history';
import { renderRoutes } from 'react-router-config';

import { ChunkExtractor } from '@loadable/server';

import { HelmetProvider } from 'react-helmet-async';
import fetch from 'node-fetch';
import { ServerStyleSheet } from 'styled-components';

import { resolvers } from './graphql/resolvers/resolvers.js';

import asyncGetPromises from './utils/asyncGetPromises';

import routes from './routes';
import configureStore from './redux/configureStore';
import initialStatePreloaded from './redux/initial-preloaded-state';
import { getUserAgent, isBot } from './utils/device';

import Html from './helpers/Html';
import { apiClient } from './helpers/apiClient';

import defineHeaders from './utils/defineHeaders';

import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache, ApolloLink, gql } from '@apollo/client';

import { onError } from '@apollo/client/link/error';
import { getDataFromTree } from '@apollo/client/react/ssr';

// -------------------------------------------------------------------

export default (statsFile) => async (req, res) => {
	req.counterPreloadedState = Math.floor(Math.random() * (100 - 1)) + 1;
	req.userAgent = getUserAgent(req.headers['user-agent']);
	req.isBot = isBot(req.headers['user-agent']);

	const history = createMemoryHistory({ initialEntries: [req.originalUrl] });

	const preloadedState = initialStatePreloaded(req);

	const providers = {
		client: apiClient(req),
	};

	const store = configureStore({
		history,
		data: { ...preloadedState },
		helpers: providers,
	});

	store.subscribe(() => console.log('>>>> SERVER > configureStore > store.getState(): ', store.getState()));

	// =====================================================

	const sheet = new ServerStyleSheet();

	defineHeaders();

	const httpLink = createHttpLink({
		uri: 'http://localhost:4000/graphql',
		// fetch: customFetch,
		fetch: fetch,
	});

	const cache = new InMemoryCache();

	const errorLink = onError(({ graphQLErrors, networkError }) => {
		if (graphQLErrors && graphQLErrors?.length > 0) {
			//  catchError((e) => handleError(e))
			graphQLErrors.map(({ message, locations, path }) =>
				console.log(
					`>>>> SERVER > [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
				),
			);
		}

		if (networkError) {
			console.log(`>>>> SERVER > [Network error!!!!!]: ${networkError}`);
		}
	});

	const link = ApolloLink.from([
		errorLink,
		httpLink,
	]);

	const clientApollo = new ApolloClient({
		ssrMode: true,
		cache,
		link,
		resolvers,
	});

	// =====================================================

	function hydrate(a) {
		res.write('<!doctype html>');
		ReactDOM.renderToNodeStream(<Html assets={a} store={store} />).pipe(res);
	}

	await asyncGetPromises(routes, req.path, store);

	try {
		console.log('>>>> SERVER > InMemoryCache > CACHE > cache.extract() 1: ', cache.extract());

		// ==========================================================================

		clientApollo.writeQuery({
			query: gql`
				query GetCartItems {
					cartItems
				}
			`,
			data: {
				cartItems: ['itemAA', 'itemBB', 'itemCC'],
			},
		});

		console.log('>>>> SERVER > InMemoryCache > CACHE > cache.extract() 2: ', cache.extract());

		const helmetContext = {};
		const context = {};

		const component = (
			<HelmetProvider context={helmetContext}>
				<ApolloProvider client={clientApollo}>
					<Provider store={store}>
						<Router history={history}>
							<StaticRouter location={req.originalUrl} context={context}>
								{renderRoutes(routes)}
							</StaticRouter>
						</Router>
					</Provider>
				</ApolloProvider>
			</HelmetProvider>
		);

		// -------------------------------------------------------------------

		await getDataFromTree(component);

		const content = ReactDOM.renderToString(sheet.collectStyles(component));

		console.log('>>>> SERVER > RESPONSE > 11111===================== !!!! ============== statsFile: ', statsFile);
		const extractor = new ChunkExtractor({statsFile});
		console.log('>>>> SERVER > RESPONSE > 22222===================== !!!! =====================');
		const assets = extractor.collectChunks(<component />);
		console.log('>>>> SERVER > RESPONSE > 33333===================== !!!! ============== assets: ', assets);

		if (__DISABLE_SSR__) {
			return hydrate(assets);
		}

		if (context.url) {
			return res.redirect(301, context.url);
		}

		const { location } = history;

		const loc = location.pathname + location.search;
		if (decodeURIComponent(req.originalUrl) !== decodeURIComponent(loc)) {
			return res.redirect(301, location.pathname);
		}

		const storeState = JSON.stringify(store.getState());
		const graphqlState = JSON.stringify(clientApollo.extract());
		const styledComponents = sheet.getStyleElement();

		const a1 = extractor.getStyleTags();
		const a2 = extractor.getLinkTags();
		const a3 = extractor.getScriptTags();

		console.log('>>>> SERVER > getStyleTags: ', a1);
		console.log('>>>> SERVER > getLinkTags: ', a2);
		console.log('>>>> SERVER > getScriptTags: ', a3);

		//  >>>> SERVER > getStyleTags:
		//      <link data-chunk="main" rel="stylesheet" href="/main.0376eef96420b7bb4890.css">
		//  
		//  >>>> SERVER > getLinkTags:
		//      <link data-chunk="main" rel="preload" as="style" href="/main.0376eef96420b7bb4890.css">
		//      <link data-chunk="main" rel="preload" as="script" href="/vendors.8d30e69a06fdabe79eb0.js">
		//      <link data-chunk="main" rel="preload" as="script" href="/main.53ae926a52db297c9e19.js">
		//      
		//  >>>> SERVER > getScriptTags:
		//      <script id="__LOADABLE_REQUIRED_CHUNKS__" type="application/json">[]</script><script id="__LOADABLE_REQUIRED_CHUNKS___ext" type="application/json">{"namedChunks":[]}</script>

		const html = (
			<Html
				content={content}
				store={storeState}
				styledComponents={styledComponents}
				graphqlState={graphqlState}
			/>
		);

		//const ssrHtml = `<!DOCTYPE html><html lang="en"><div>Fooooooooooo!!!!!</div></html>`;
		//res.status(200).send(ssrHtml);
		const ssrHtml = `<!DOCTYPE html><html lang="en">${ReactDOM.renderToString(html)}</html>`;
		res.status(200).send(ssrHtml);
	} catch (error) {
		console.log('>>>> SERVER > RESPONSE > ERRRRRRROOOOORRRR!!!: ', error);
		const errorHtml = `<!DOCTYPE html><html lang="en"><div>Error Loading. Response Status 500.</div></html>`;
		res.status(500).send(errorHtml);
	}
};
