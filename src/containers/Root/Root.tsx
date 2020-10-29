import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

import { Global } from '../../styled';
import { useTheme } from '../../styled/ThemeContext';

import { AppTheme } from '../../styled';

export type RootProps = {
	route: {
		routes: RouteConfig[];
	};
};

export const Root: React.FC<RootProps> = ({ route }: RootProps) => {
	const themeMode = useTheme();
	const themeModeMode = AppTheme.theme[`${themeMode.mode}`];

	return (
		<HelmetProvider>
			<Helmet />
			<ThemeProvider theme={themeModeMode}>
				<Global.GlobalStyle />
				{/* ------------- App ------------- */}
				{renderRoutes(route.routes)}
			</ThemeProvider>
		</HelmetProvider>
	);
};
