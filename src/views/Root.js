import React from 'react';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import data from './../data/data.json';
import { Planet } from './Planet';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          {data.map((planet, index) => {
            return <Route path={`/${planet.name}`} key={index} element={<Planet data={planet} />}></Route>;
          })}
          <Route path="*" element={<Navigate to="mercury" replace />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  </ThemeProvider>
);

export default Root;
