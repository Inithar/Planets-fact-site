import { PlanetText } from 'components/atoms/PlanetText/PlanetText';
import { PlanetImage } from 'components/atoms/PlanetImage/PlanetImage';
import { PlanetName } from 'components/atoms/PlanetName/PlanetName';
import { MobileButtonsSection } from 'components/molecules/MobileButtonSection/MobileButtonsSection';
import { Source } from 'components/molecules/Source/Source';
import React from 'react';
import { Container, Wrapper, PlanetImgContainer } from './PlanetDescription.style';

export const PlanetDescription = ({ name }) => {
  return (
    <Wrapper>
      <MobileButtonsSection />
      <Container>
        <PlanetImgContainer>
          <PlanetImage width={'111px'} />
        </PlanetImgContainer>
        <Container>
          <PlanetName>{name}</PlanetName>
          <PlanetText>
            Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of
            four terrestrial planets in the Solar System, and is a rocky body like Earth.
          </PlanetText>
          <Source href={'https://en.wikipedia.org/wiki/Mercury_(planet)'} name={'Wikipedia'} />
        </Container>
      </Container>
    </Wrapper>
  );
};
