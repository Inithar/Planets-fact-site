import { MobileButton } from 'components/atoms/MobileButton/MobileButton';
import { Wrapper } from 'components/molecules/MobileButtonSection/MobileButtonsSection.style';
import React, { useContext, useEffect, useState } from 'react';
import { StepContext } from 'providers/CurrentStepProvider';

export const MobileButtonsSection = () => {
  const ctx = useContext(StepContext);
  
  const handleClick = e => {
    ctx.changePlanetData(e.target.value);
  };

  return (
    <Wrapper>
      <MobileButton onClick={handleClick} value="overview">
        Overview
      </MobileButton>
      <MobileButton onClick={handleClick} value="structure">
        Structure
      </MobileButton>
      <MobileButton onClick={handleClick} value="surface">
        Surface
      </MobileButton>
    </Wrapper>
  );
};
