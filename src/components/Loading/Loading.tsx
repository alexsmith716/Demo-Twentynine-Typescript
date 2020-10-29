import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export type Props = {
	text: string;
};

const dot = keyframes`
	0% {
		opacity: 0.25;
	}

	50% {
		opacity: 0.25;
	}

	100% {
		opacity: 1;
	}
`;

const dotRule = css`
	${dot} 1.3s infinite;
`;

const DotOne = styled.span`
	opacity: 10;
	animation: ${dotRule};
	animation-delay: 0s;
`;

const DotTwo = styled.span`
	opacity: 10;
	animation: ${dotRule};
	animation-delay: 0.2s;
`;

const DotThree = styled.span`
	opacity: 10;
	animation: ${dotRule};
	animation-delay: 0.3s;
`;

export const Loading: React.FC<Props> = ({ text }) => {
	return (
		<div>
			{text}
			<DotOne>.</DotOne>
			<DotTwo>.</DotTwo>
			<DotThree>.</DotThree>
		</div>
	);
};
