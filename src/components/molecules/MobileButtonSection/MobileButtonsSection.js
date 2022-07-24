import { MobileButton } from 'components/atoms/MobileButton/MobileButton';
import { Wrapper } from 'components/molecules/MobileButtonSection/MobileButtonsSection.style';
import React, { useContext } from 'react';
import { StepContext } from 'providers/CurrentStepProvider';

export const MobileButtonsSection = () => {
  const {
    buttonsState,
    changeButtonState,
    changeDescriptionData,
    descriptionData: { name }
  } = useContext(StepContext);

  const handleClick = e => {
    changeButtonState(e);
    changeDescriptionData(e.target.value);
  };

  return (
    <Wrapper>
      <MobileButton onClick={handleClick} value="overview" isActive={buttonsState.overview} planet={name} autoFocus>
        Overview
      </MobileButton>
      <MobileButton onClick={handleClick} value="structure" isActive={buttonsState.structure} planet={name}>
        Structure
      </MobileButton>
      <MobileButton onClick={handleClick} value="surface" isActive={buttonsState.surface} planet={name}>
        Surface
      </MobileButton>
    </Wrapper>
  );
};
