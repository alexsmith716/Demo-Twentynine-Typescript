import { Middleware, Dispatch } from 'redux';

export default function clientMiddleware(helpers: any): Middleware {
	return ({ dispatch, getState }) => (next: Dispatch) => (action) => {
		if (typeof action === 'function') {
			console.log(
				'>>>>>>>>>> clientMiddleware <<<<<<<<<<<<<<<<< > RETURNING typeof action === function: ',
				typeof action,
			);
			return action(dispatch, getState);
		}

		// allow the action creators access to the client API facade
		const { promise, types, ...rest } = action;

		if (!promise) {
			// {
			//   "type": "redux-example/filterableTable/SELECTED_OPTION",
			//   "option": "https://api.github.com/emojis",
			//   "meta": {"__multireducerKey": "AboutOneMultireducerFilterableTable1"}
			// }
			console.log('>>>>>>>>>> clientMiddleware <<<<<<<<<<<<<<<<< > NO promise: ', action);
			return next(action);
		} else {
			console.log('>>>>>>>>>> clientMiddleware <<<<<<<<<<<<<<<<< > YES promise: ', action);
		}

		// allow some (async) actions to pass a "promise generator"
		const [REQUEST, SUCCESS, FAILURE] = types;

		next({ ...rest, type: REQUEST });

		const actionPromise = promise(helpers, dispatch);

		actionPromise
			.then(
				(result) => next({ ...rest, result, type: SUCCESS }),
				(error) => next({ ...rest, error, type: FAILURE }),
			)
			.catch((error) => {
				console.error('MIDDLEWARE ERROR:', error);
				next({ ...rest, error, type: FAILURE });
			});

		console.log('>>>>>>>>>> clientMiddleware <<<<<<<<<<<<<<<<< > actionPromise: ', actionPromise);
		// returning "Promise"
		return actionPromise;
	};
}
