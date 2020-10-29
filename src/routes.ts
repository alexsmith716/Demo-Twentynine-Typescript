import { Root } from './containers/Root';
import { App } from './containers/App';
import Home from './containers/Home';
import NotFound from './containers/NotFound';

//	import About from './containers/About/Loadable';
//	import GraphqlPage from './containers/GraphqlPage/Loadable';

import { preloadData as preloadDataApp } from './containers/App/preloadData';
import { preloadData as preloadDataAboutThree } from './containers/About/preloadData';

import './styled/fonts.css';

const routes = [
	{
		component: Root,
		path: '/',
		routes: [
			{
				path: '/',
				component: App,
				loadData: preloadDataApp,
				routes: [
					{
						path: '/',
						exact: true,
						component: Home,
					},
					//	{
					//		path: '/about',
					//		exact: true,
					//		component: About,
					//		loadData: preloadDataAboutThree,
					//	},
					//	{
					//		path: '/graphqlpage',
					//		exact: true,
					//		component: GraphqlPage,
					//	},
					{
						path: '*',
						component: NotFound,
					},
				],
			},
		],
	},
];

export default routes;
