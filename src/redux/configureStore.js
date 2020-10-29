import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// persisted state saved to redux / persisted state retrieved from redux
import { createPersistoid, persistCombineReducers, REGISTER } from 'redux-persist';

import clientMiddleware from './clientMiddleware';
import { rootReducer } from './reducer';

// ----------------------------------------------------------------------

function combine(reducers, persistConfig) {
	if (persistConfig) {
		return persistCombineReducers(persistConfig, reducers);
	}
	return combineReducers(reducers);
}

// ----------------------------------------------------------------------

function getNoOperationReducers(reducers, array) {
	if (!array) {
		return {};
	}

	// array.reduce( (accumulator, element) => cb, initAccumulator )
	return Object.keys(array).reduce((accu, element) => {
		if (reducers[element]) {
			return accu;
		}

		return {
			...accu,
			[element]: (state = array[element]) => state,
		};
	}, {});
}

// ----------------------------------------------------------------------

export default function configureStore({ data, helpers, persistConfig }) {
	const middleware = [clientMiddleware(helpers)];

	// ----------------------------------------------------------------------

	const enhancers = [applyMiddleware(...middleware)];

	// ----------------------------------------------------------------------

	const finalEnhancer = compose(...enhancers)(createStore);
	const reducers = rootReducer();
	const noopReducers = getNoOperationReducers(reducers, data);
	const store = finalEnhancer(combine({ ...noopReducers, ...reducers }, persistConfig), data);

	// ----------------------------------------------------------------------

	store.asyncReducers = {};
	// store.inject = _reducers => inject(store, _reducers, persistConfig);

	if (persistConfig) {
		const persistoid = createPersistoid(persistConfig);
		store.subscribe(() => {
			persistoid.update(store.getState());
		});
		store.dispatch({ type: REGISTER });
	}

	// ----------------------------------------------------------------------

	return store;
}
