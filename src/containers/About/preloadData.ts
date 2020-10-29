import { Store } from 'redux';
import { isInfoAlertThreeLoaded, loadInfoAlertThree } from '../../redux/modules/infoAlertThree';

type Props = {
	store: Store;
};

async function preloadData(store: Props): void {
	const infoLoaded = isInfoAlertThreeLoaded(store.getState().infoAlertThree);
	if (!infoLoaded) {
		await store.dispatch(loadInfoAlertThree());
	}
}

export { preloadData };
