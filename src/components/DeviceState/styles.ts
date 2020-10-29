import styled from 'styled-components';
import { AppColors } from '../../styled';

export const DeviceStateStyled = styled.div`
  background-color: #fffff0;
  border: 2px solid #b0c4de;
  padding: 16px;
`;

export const StoreStateOnline = styled.div`
  color: ${AppColors.colors.olive};
  font-family: 'OpenSansBold', sans-serif;
`;

export const StoreStateUserAgent = styled.div`
  color: ${AppColors.colors.crimson};
  font-family: 'PhilosopherBold', sans-serif;
`;

export const StoreStateIsBot = styled.div`
  color: ${AppColors.colors.orangered};
  font-family: 'Norwester', sans-serif;
`;

export const StoreStateBlurb = styled.div`
  color: ${AppColors.colors.mediumspringgreen};
  font-family: 'OldEnglish', sans-serif;
`;
