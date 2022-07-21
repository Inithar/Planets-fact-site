import { MobileButton } from 'components/atoms/MobileButton/MobileButton';
import { Wrapper } from 'components/molecules/MobileButtonSection/MobileButtonsSection.style';
import React from 'react';

export const MobileButtonsSection = () => {
  return (
    <Wrapper>
      <MobileButton>Overview</MobileButton>
      <MobileButton>Structure</MobileButton>
      <MobileButton>Surface</MobileButton>
    </Wrapper>
  );
};
