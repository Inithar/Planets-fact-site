import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { Wrapper } from './ButtonsSection.style';

export const ButtonsSection = () => {
  return (
    <Wrapper>
      <Button iterator={'01'}>Overview</Button>
      <Button iterator={'02'}>Internal structure</Button>
      <Button iterator={'03'}>surface geology</Button>
    </Wrapper>
  );
};
