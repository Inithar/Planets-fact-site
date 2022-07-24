import styled from 'styled-components';
import background from 'assets/background-stars.svg';
import { device } from 'assets/styles/responsive';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Content = styled.div`
  ${device.bigTablet} {
    padding: 200px 100px 30px;
  }

  ${device.desktop} {
    padding: 212px 165px 56px;
  }
`;

export const Separator = styled.div`
  position: absolute;
  top: 69px;
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);

  ${device.tablet} {
    top: 159px;
  }

  ${device.bigTablet} {
    top: 85px;
  }
`;
