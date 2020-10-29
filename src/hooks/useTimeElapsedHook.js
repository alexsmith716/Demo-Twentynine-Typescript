import { useState } from 'react';
import { useIntervalJS } from './useIntervalJS';

export function useTimeElapsedHook(initStartTime, initStartDelay) {
	const [startTime, setStartTime] = useState(initStartTime);
	const [intervalDelay, setIntervalDelay] = useState(initStartDelay);

	// -------------------------------------------

	useIntervalJS(() => {
		setStartTime(startTime + 1);
	}, intervalDelay);

	// -------------------------------------------

	function setTheStartTime() {
		setStartTime(Date.now());
	}

	// function getTheStartTime() {
	//   setStartTime(Date.now());
	// }

	function startTimeElapsed() {
		setIntervalDelay(1);
	}

	function pauseTimeElapsed() {
		setIntervalDelay(null);
	}

	return {
		startTime,
		setTheStartTime,
		startTimeElapsed,
		pauseTimeElapsed,
	};
}
