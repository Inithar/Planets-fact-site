import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const PlanetName = styled.h1`
  margin: 0;
  font-size: 40px;
  line-height: 52px;
  text-transform: uppercase;
  font-family: 'Antonio', sans-serif;
  color: ${({ theme }) => theme.colors.white};

  ${device.bigTablet} {
    font-size: 80px;
    line-height: 104px;
  }
`;
