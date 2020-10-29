import { Store } from 'redux';
import { isInfoLoaded, loadInfo } from '../../redux/modules/info';
import { isInfoAlertLoaded, loadInfoAlert } from '../../redux/modules/infoAlert';

type Props = {
	store: Store;
};

async function preloadData(store: Props): void {
	const infoLoaded = isInfoLoaded(store.getState().info);
	if (!infoLoaded) {
		await store.dispatch(loadInfo());
	}

	const infoAlertLoaded = isInfoAlertLoaded(store.getState().infoAlert);
	if (!infoAlertLoaded) {
		await store.dispatch(loadInfoAlert());
	}
}

export { preloadData };
