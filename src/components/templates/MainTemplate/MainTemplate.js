import { Navigation } from 'components/organisms/Navigation/Navigation';
import React from 'react';
import { Separator, Wrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Separator />
    {children}
  </Wrapper>
);
