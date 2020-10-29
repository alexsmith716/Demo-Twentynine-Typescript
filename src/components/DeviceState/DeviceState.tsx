import React from 'react';
import { useSelector } from 'react-redux';
import { State as DeviceStateState } from '../../redux/modules/device';
import * as Styles from './styles';

export type State = {
	online: boolean;
	device: DeviceStateState;
};

export const DeviceState: React.FC = () => {
	const online = useSelector((state: State) => state.online);
	const userAgent = useSelector((state: State) => state.device.userAgent);
	const isBot = useSelector((state: State) => state.device.isBot);

	return (
		<div className="container">
			<div className="flex-column-center mb-5">
				<Styles.DeviceStateStyled className="flex-column-center">
					<Styles.StoreStateOnline>{`'online' store state is ${online} !`}</Styles.StoreStateOnline>

					<Styles.StoreStateUserAgent>{`device 'userAgent' store state is ${userAgent} !`}</Styles.StoreStateUserAgent>

					<Styles.StoreStateIsBot>{`device 'bot' store state is ${isBot} !`}</Styles.StoreStateIsBot>

					<Styles.StoreStateBlurb>DeviceStateStyled!</Styles.StoreStateBlurb>
				</Styles.DeviceStateStyled>
			</div>
		</div>
	);
};
