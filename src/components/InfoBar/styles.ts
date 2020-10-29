import styled from 'styled-components';
import { AppColors } from '../../styled';

export const InfoBarContainerBgColor = styled.div`
  background-color: ${AppColors.colors.lightskyblue};
`;

export const InfoBarContainer = styled.div`
  padding: 16px;
  text-align: center;
`;

export const InfoBarContainerStyled = styled.div`
  font-family: 'PhilosopherBold', sans-serif;
`;

export const DataMessage = styled.span`
  color: ${AppColors.colors.firebrick};
  font-family: 'RobotoMonoV4LatinRegular', sans-serif;
`;
