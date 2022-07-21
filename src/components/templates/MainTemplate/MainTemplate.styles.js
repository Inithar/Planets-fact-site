import styled from 'styled-components';
import background from 'assets/background-stars.svg';
import { device } from 'assets/styles/responsive';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-image: url(${background});
  background-color: ${({ theme }) => theme.colors.darkBlue};
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

  ${device.smallDesktop} {
    top: 85px;
  }
`;
