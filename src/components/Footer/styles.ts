import styled from 'styled-components';
import { colors } from '../../styled/Colors';
import { SvgHeadphones } from '../../assets/svg';

export const FooterStyled = styled.div`
	background-color: ${colors.syracuseOrange};
`;

export const FooterContainer = styled.div`
	color: ${colors.white};
	font-family: 'LobsterV20LatinRegular', sans-serif;
`;

export const FooterHeadphones = styled.span`
	color: ${colors.gold};
	font-family: 'Norwester', sans-serif;
`;

export const StyledSvgHeadphones = styled(SvgHeadphones)`
	height: 16px;
	padding-right: 0.25rem;
	padding-left: 0.25rem;
	vertical-align: middle;
`;

export const SvgFooterHeadphones = styled.span`
	color: ${colors.gold};
`;

export const FooterBlurd = styled.div`
	font-family: 'Norwester', sans-serif;
`;
