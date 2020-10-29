import React, { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';

export type Props = {
	triggerProp: (location: string) => Promise<any>;
	children: React.ReactNode;
};

export const RouterTrigger: React.FC<Props> = ({ triggerProp, children }) => {
	const location = useLocation();
	const [needTrigger, setNeedTrigger] = useState(false);
	const [locationState, setLocationState] = useState(location);
	const [prevLocationState, setPreviousLocationState] = useState(location);

	const navigated =
		!locationState ||
		`${location.pathname}${location.search}` !== `${locationState.pathname}${locationState.search}`;

	if (navigated) {
		setLocationState(location);
		setNeedTrigger(true);
	}

	useEffect(() => {
		if (needTrigger) {
			setNeedTrigger(false);
		}

		if (!needTrigger) {
			triggerProp(location.pathname)
				.catch((error: Error) =>
					console.log(
						'>>>>>>>>>>>>>>>>>>>>>>>> RouterTrigger useEffect() > triggerProp > ERROR:',
						error,
					),
				)
				.then(() => {
					// for next route, preset "new" location as "previous" location (will reflect a change)
					setPreviousLocationState(locationState);
          window.scrollTo(0, 0);
				});
		}

		return () => {
			console.log(
				'>>>>>>>>>>>>>>>>>>>>>>>> RouterTrigger useEffect() > componentWillUnmount > cleanup phase',
			);
		};
	}, [needTrigger, location.pathname, locationState, triggerProp]);

	return <Route location={prevLocationState || location} render={() => children} />;
};
