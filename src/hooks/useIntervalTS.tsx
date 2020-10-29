import { useEffect, useRef } from 'react';

export function useIntervalTS(updatingFunction: any, delay: number, notSure?: any) {
	const savedCallback = useRef(notSure);

	useEffect(() => {
		savedCallback.current = updatingFunction;
	}, [updatingFunction]);

	useEffect(() => {
		function tick() {
			savedCallback.current();
		}

		let id = setInterval(tick, delay);

		return () => clearInterval(id);
	}, [delay]);
}
