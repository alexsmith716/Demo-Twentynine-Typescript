import React from 'react';
import { renderToNodeStream, renderToString, renderToStaticMarkup } from 'react-dom/server';
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
import { getDataFromTree, getMarkupFromTree } from '@apollo/client/react/ssr';

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
	const extractor = new ChunkExtractor({statsFile});
	// =====================================================

	// =====================================================
	//	function hydrate() {
	//		res.write('<!DOCTYPE html>');
	//		const stream = renderToNodeStream(<Html styleElements={extractor.getStyleElements()} scriptElements={extractor.getScriptElements()} store={JSON.stringify(store)} />);
	//		stream.pipe(res);
	//	}

	//	if (__DISABLE_SSR__) {
	//		return hydrate();
	//	}
	// =====================================================

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

		const App = () => (
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

		if (context.url) {
			return res.redirect(301, context.url);
		}

		const { location } = history;

		const loc = location.pathname + location.search;
		if (decodeURIComponent(req.originalUrl) !== decodeURIComponent(loc)) {
			return res.redirect(301, location.pathname);
		}

		// =====================================================
		const tree = extractor.collectChunks(<App />);
		// =====================================================

		// =====================================================
		await getDataFromTree(App);
		//  await Promise.all([getDataFromTree(App)]);
		//  await Promise.all([getMarkupFromTree({tree, renderFunction: renderToStaticMarkup})]);
		// =====================================================

		//  const content = renderToString(sheet.collectStyles(component));
		const body = renderToString(tree);

		const storeState = JSON.stringify(store.getState());
		const graphqlState = JSON.stringify(clientApollo.extract());

		const styledComponents = sheet.getStyleElement();

		const styleElements = extractor.getStyleElements();
		//	const linkElements = extractor.getLinkElements();
		const scriptElements = extractor.getScriptElements();

		//	console.log('>>>> SERVER > getStyleElements: ', styleElements);
		//	console.log('>>>> SERVER > getLinkElements: ', linkElements);
		//	console.log('>>>> SERVER > getScriptElements: ', scriptElements);

		const html = (
			<Html
				styleElements={styleElements}
				scriptElements={scriptElements}
				store={storeState}
				content={body}
				styledComponents={styledComponents}
				graphqlState={graphqlState}
			/>
		);

		const ssrHtml = `<!DOCTYPE html>${renderToString(html)}`;
		return res.status(200).send(ssrHtml);
	} catch (error) {
		console.log('>>>> SERVER > RESPONSE > ERRRRRRROOOOORRRR!!!: ', error);
		// const errorHtml = `<!DOCTYPE html><html lang="en"><div>Error Loading. Response Status 500.</div></html>`;
		return res.status(500).send(error);
	}
};
