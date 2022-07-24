import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const Wrapper = styled.div`
  padding: 28px 24px 47px;

  ${device.tablet} {
    display: flex;
    padding: 27px 39px;
  }

  ${device.bigTablet} {
    padding: 67px 0;
  }
`;
