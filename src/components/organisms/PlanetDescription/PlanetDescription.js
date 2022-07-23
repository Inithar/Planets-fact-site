import { PlanetText } from 'components/atoms/PlanetText/PlanetText';
import { PlanetImage } from 'components/atoms/PlanetImage/PlanetImage';
import { PlanetName } from 'components/atoms/PlanetName/PlanetName';
import { MobileButtonsSection } from 'components/molecules/MobileButtonSection/MobileButtonsSection';
import { Source } from 'components/molecules/Source/Source';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Wrapper, PlanetImgContainer } from './PlanetDescription.style';
import { StepContext } from 'providers/CurrentStepProvider';

export const PlanetDescription = () => {
  const { descriptionData } = useContext(StepContext);

  const { name, content, source, imageSrc } = descriptionData;
  return (
    <Wrapper>
      <MobileButtonsSection />
      <Container>
        <PlanetImgContainer>
          <PlanetImage src={imageSrc} />
        </PlanetImgContainer>
        <Container>
          <PlanetName>{name}</PlanetName>
          <PlanetText>{content}</PlanetText>
          <Source href={source} name={'Wikipedia'} />
        </Container>
      </Container>
    </Wrapper>
  );
};
