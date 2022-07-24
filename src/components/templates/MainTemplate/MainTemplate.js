import { Navigation } from 'components/organisms/Navigation/Navigation';
import React from 'react';
import { Content, Separator, Wrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Separator />
    <Content>{children}</Content>
  </Wrapper>
);
