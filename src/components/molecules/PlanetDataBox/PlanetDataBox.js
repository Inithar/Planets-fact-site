import React from 'react';
import { DataName, DataValue, Wrapper } from './PlanetDataBox.style';

export const PlanetDataBox = ({ dataName, dataValue }) => (
  <Wrapper>
    <DataName>{dataName}</DataName>
    <DataValue>{dataValue}</DataValue>
  </Wrapper>
);
