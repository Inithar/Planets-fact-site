import { Navigation } from 'components/organisms/Navigation/Navigation';
import React from 'react';
import { Content, Separator, Wrapper } from './MainTemplate.styles';
import { NavigationProvider } from 'providers/NavigationProvider';

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <NavigationProvider>
      <Navigation />
      <Separator />
      <Content>{children}</Content>
    </NavigationProvider>
  </Wrapper>
);
