const THEME_DEFAULT = 'redux-example/theme/THEME_DEFAULT';
const THEME_DARK = 'redux-example/theme/THEME_DARK';

export type Actions = { type: typeof THEME_DEFAULT } | { type: typeof THEME_DARK };

export type State = {
	mode: string;
};

export const initialState = {
	mode: 'default',
};

export const reducer = (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case THEME_DEFAULT:
			return {
				mode: 'default',
			};

		case THEME_DARK:
			return {
				mode: 'dark',
			};

		default:
			return state;
	}
};

export function toggleTheme(themeMode: string): Actions {
	const t = themeMode === 'default' ? THEME_DARK : THEME_DEFAULT;
	return {
		type: t,
	};
}
