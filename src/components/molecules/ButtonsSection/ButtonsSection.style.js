import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${device.bigTablet} {
    width: 100%;
    margin-top: 40px;
  }
`;
