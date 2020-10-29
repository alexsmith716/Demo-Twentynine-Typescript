import { useEffect, useRef } from 'react';

// making setInterval declarative with react hooks

// tell/delegate DOM what you need/like: declarative (react)
// tell DOM what/how/should to do:     imperative
// --------------------------------------------------
// making setInterval declarative with react hooks
// setting up a interval to change the DOM in React
// "useEffect" Hook IS: "componentDidMount", "componentDidUpdate", "componentWillUnmount" combined
// "useRef":
//    returns a mutable ref object
//      whose ".current" property is initialized to the passed argument (initialValue).
//    The returned object will persist for lifetime of the component.
//    common use case is to access a child imperatively

// https://reactjs.org/docs/refs-and-the-dom.html

// CUSTOM HOOK: extract component logic into reusable functions
// CUSTOM HOOK: decide what it takes as arguments, and what, if anything, it should return
// CUSTOM HOOK: it's just like a normal function
// to share logic between two JavaScript functions, extract it to a third function
// TS >> "useEffect": return only 'function' or 'undefined'

// extract component logic into a reusable function "useInterval()"
// callback: () => { setCount(count + 1); }

// interface useIntervalProps {
//   callback: any;
//   delay: number;
//   notSure?: any;
// }

export function useInterval(callback: any, delay: number, notSure?: any) {
	// If `notSure` isn't given in `Props` object, it defaults to `any`

	// let notSure: any = null;

	// const savedCallback = React.useRef<HTMLDivElement>(null);
	const savedCallback = useRef(notSure);

	// Use Multiple Effects to Separate Concerns
	// using several/different "effects" separates unrelated logic
	// remember latest callback
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// set up the interval
	// AND optimize performance by skipping effects (only re-run effect if 'delay' changes)
	useEffect(() => {
		// Not all code paths return a value.

		// run additional code after React has updated the DOM (Effect Hook)
		// ===================================================================================

		// run code and immediately forget about it
		function tick() {
			savedCallback.current(); // Cannot invoke an object which is possibly 'undefined'
		}

		// run code ...
		// ... AND cleanup -don't forget to clear 'setInterval'
		let id = setInterval(tick, delay);
		// let id = setInterval( () => { savedCallback.current(); } , delay);
		return () => clearInterval(id);
	}, [delay]);
}
