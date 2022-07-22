import styled from 'styled-components';
import planetMercury from 'assets/images/planet-mercury.svg';

export const PlanetImage = styled.img.attrs(({ src }) => ({
  src: src
}))`
  width: ${props => props.width};
`;
