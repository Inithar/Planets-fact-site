import React from 'react';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Planet } from 'components/organisms/Planet/Planet';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MainTemplate>
      <Planet />
    </MainTemplate>
  </ThemeProvider>
);

export default Root;
