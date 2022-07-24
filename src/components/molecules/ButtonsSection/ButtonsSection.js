import { Button } from 'components/atoms/Button/Button';
import React, { useContext, useEffect, useState } from 'react';
import { Wrapper } from './ButtonsSection.style';
import { StepContext } from 'providers/CurrentStepProvider';

export const ButtonsSection = () => {
  const { buttonsState, changeButtonState, changeDescriptionData } = useContext(StepContext);

  const handleClick = e => {
    changeButtonState(e);
    changeDescriptionData(e.target.value);
  };

  return (
    <Wrapper>
      <Button iterator={'01'} onClick={handleClick} value="overview" isActive={buttonsState.overview}>
        Overview
      </Button>
      <Button iterator={'02'} onClick={handleClick} value="structure" isActive={buttonsState.structure}>
        Internal structure
      </Button>
      <Button iterator={'03'} onClick={handleClick} value="surface" isActive={buttonsState.surface}>
        surface geology
      </Button>
    </Wrapper>
  );
};
