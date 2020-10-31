import React from 'react';

// array of React `<link>` elements
// array of React `<script>` elements

type Props = {
	linkElements: React.ReactElement[];
	styleElements: React.ReactElement[];
	scriptElements: React.ReactElement[];
	store: string;
	content: string;
	styledComponents: React.ReactElement[];
	graphqlState: string;
};

const Html: React.FC<Props> = ({
	linkElements,
	styleElements,
	scriptElements,
	store,
	content,
	styledComponents,
	graphqlState,
}) => {

	return (
		<html lang="en-US">
			<head>
				<meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"
				/>
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="application-name" content="Election App 2020!" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />
				<meta name="apple-mobile-web-app-title" content="Election App 2020!" />

				{/* (>>>>>>> LinkElements <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{linkElements}

				{/* (>>>>>>> STYLED-COMPONENTS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{styledComponents}

				{/* (>>>>>>> StyleElements <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{styleElements}
			</head>

			<body>
				{/* (>>>>>>> CONTENT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				<div role="main" id="react-root" dangerouslySetInnerHTML={{ __html: content }} />

				{/* (>>>>>>> STORE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{store && (
					<script
						dangerouslySetInnerHTML={{
							__html: `window.__PRELOADED__=true;window.REDUX_DATA=${store};`,
						}}
						charSet="UTF-8"
					/>
				)}

				{/* (>>>>>>> GRAPHQL <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{graphqlState && (
					<script
						dangerouslySetInnerHTML={{
							__html: `window.__APOLLO_STATE__=${graphqlState};`,
						}}
						charSet="UTF-8"
					/>
				)}

				{/* (>>>>>>> SCRIPTS  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
				{scriptElements}
			</body>
		</html>
	);
};

export default Html;
