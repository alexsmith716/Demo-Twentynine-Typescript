import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

const NotFoundStyled = styled.div`
	// background-color: ${(props) => props.theme.rutgersScarlet};
`;

const StyledHeadingOne = styled.h1`
	color: #000;
`;

const NotFound: React.FC = () => {
	return (
		<NotFoundStyled>
			<Helmet title="Page Not Found" />
			<div className="container">
				<StyledHeadingOne className="mt-4 mb-3">Status Code 404!</StyledHeadingOne>
				<div>
					<div>
						<p>Page Not Found!</p>
					</div>
				</div>
			</div>
		</NotFoundStyled>
	);
};

export default NotFound;
