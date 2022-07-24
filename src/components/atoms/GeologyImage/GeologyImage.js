import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const GeologyImage = styled.img.attrs(({ src }) => ({
  src: src
}))`
  position: absolute;
  bottom: 40px;
  width: 70px;

  ${device.tablet} {
    bottom: 50px;
    width: 100px;
  }

  ${device.bigTablet} {
    bottom: 0;
    width: 163px;
  }
`;
