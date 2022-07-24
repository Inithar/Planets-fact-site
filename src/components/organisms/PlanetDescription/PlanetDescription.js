import { PlanetText } from 'components/atoms/PlanetText/PlanetText';
import { PlanetImage } from 'components/atoms/PlanetImage/PlanetImage';
import { PlanetName } from 'components/atoms/PlanetName/PlanetName';
import { MobileButtonsSection } from 'components/molecules/MobileButtonSection/MobileButtonsSection';
import { Source } from 'components/molecules/Source/Source';
import React, { useContext } from 'react';
import { Container, Wrapper, PlanetImgContainer, DescriptionSection, InfoContainer } from './PlanetDescription.style';
import { StepContext } from 'providers/CurrentStepProvider';
import { useIsMobile } from 'hooks/useIsMobile';
import { ButtonsSection } from 'components/molecules/ButtonsSection/ButtonsSection';
import { GeologyImage } from 'components/atoms/GeologyImage/GeologyImage';

export const PlanetDescription = () => {
  const { descriptionData, step } = useContext(StepContext);
  const { name, content, source, imageSrc, geologyImg } = descriptionData;
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      {isMobile ? <MobileButtonsSection /> : null}
      <Container>
        <PlanetImgContainer>
          <PlanetImage src={imageSrc} />
          {step === 'surface' ? <GeologyImage src={geologyImg} /> : null}
        </PlanetImgContainer>
        <DescriptionSection>
          <InfoContainer>
            <PlanetName>{name}</PlanetName>
            <PlanetText>{content}</PlanetText>
            <Source href={source} name={'Wikipedia'} />
          </InfoContainer>
          {isMobile ? null : <ButtonsSection />}
        </DescriptionSection>
      </Container>
    </Wrapper>
  );
};
