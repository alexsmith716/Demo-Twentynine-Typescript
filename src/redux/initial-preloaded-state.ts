import { Request } from 'express';
import { State as DeviceState } from './modules/device';

type Props = {
	device?: DeviceState;
	counterPreloaded: number;
};

export default (req: Request): Props => ({
	device: {
		userAgent: req.userAgent,
		isBot: req.isBot,
	},

	counterPreloaded: {
		counterPreloadedState: req.counterPreloadedState,
	},
});
