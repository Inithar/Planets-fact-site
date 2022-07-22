import { PlanetDataBox } from 'components/molecules/PlanetDataBox/PlanetDataBox';
import React from 'react';
import { Wrapper } from './PlanetData.style';

export const PlanetData = ({ rotation, revolution, radius, temperature }) => (
  <Wrapper>
    <PlanetDataBox dataName={'Rotation time'} dataValue={rotation} />
    <PlanetDataBox dataName={'Revolution time'} dataValue={revolution} />
    <PlanetDataBox dataName={'Radius'} dataValue={radius} />
    <PlanetDataBox dataName={'Average temp.'} dataValue={temperature} />
  </Wrapper>
);
