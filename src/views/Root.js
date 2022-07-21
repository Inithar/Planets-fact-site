import React from 'react';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MainTemplate></MainTemplate>
  </ThemeProvider>
);

export default Root;
