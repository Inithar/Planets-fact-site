import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const PlanetImage = styled.img.attrs(({ src }) => ({
  src: src
}))`
  width: 111px;

  ${device.tablet} {
    width: 184px;
  }

  ${device.bigTablet} {
    width: 290px;
  }
`;
