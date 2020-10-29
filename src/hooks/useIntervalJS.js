import { useEffect, useRef } from 'react';

export function useIntervalJS(updatingFunction, delay) {
	const savedCallback = useRef();

	useEffect(() => {
		savedCallback.current = updatingFunction;
	}, [updatingFunction]);

	useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}
