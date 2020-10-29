import styled from 'styled-components';
import { Button } from '../../components/Button';

import splashImage from './img/splashImage-2048x719.jpg';

export const Masthead = styled.div`
	padding-bottom: 78px;
	background: url(${splashImage});
	background-repeat: no-repeat;
	background-position: center center;
	background-position-x: 32%;
	background-size: cover;
	text-align: center;

	color: #dc143c;
	font-family: 'Phosphate', 'Desdemona', 'Noteworthy', 'Helvetica Neue', Helvetica, Arial, sans-serif;

	@media (min-width: 768px) {
		text-align: left;
	}
`;

export const MastheadHeadingOne = styled.h1`
	font-size: 61px;
	font-weight: 600;
	color: #104e8b;
	font-family: 'Stencil', 'Helvetica Neue', Helvetica, Arial, sans-serif;

	@media (min-width: 768px) {
		font-size: 4.1rem;
	}

	@media (min-width: 992px) {
		font-size: 4.7rem;
	}
`;

export const MastheadHeadingTwo = styled.h2`
	font-size: 2rem;
	color: #cd6600;
	font-family: 'Desdemona', 'Noteworthy', 'Helvetica Neue', Helvetica, Arial, sans-serif;

	@media (min-width: 768px) {
		font-size: 2.3rem;
	}

	@media (min-width: 992px) {
		font-size: 2.5rem;
	}
`;

export const MastheadBlurb = styled.div`
	margin-top: 20px;
	margin-bottom: 5px;
	font-size: 1.2rem;
	font-family: 'American Typewriter', 'Helvetica Neue', Helvetica, Arial, sans-serif;

	@media (min-width: 768px) {
		font-size: 1.4rem;
	}

	@media (min-width: 992px) {
		font-size: 1.6rem;
	}
`;

export const MastheadBlurbElipsis = styled(MastheadBlurb)`
	margin-left: 25px;
	margin-bottom: 35px;
`;

export const MastheadButton = styled(Button)`
	font-size: 1.1rem;
	font-family: 'Phosphate';
`;
