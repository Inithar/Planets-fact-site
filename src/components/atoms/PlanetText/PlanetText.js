import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const PlanetText = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  padding: 0 28px;
  font-size: 12px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;

  ${device.tablet} {
    padding-left: 0;
    padding-right: 70px;
  }

  ${device.bigTablet} {
    padding-right: 0;
    font-size: 14px;
  }
`;
