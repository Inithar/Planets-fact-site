import { PlanetData } from 'components/organisms/PlanetData/PlanetData';
import { PlanetDescription } from 'components/organisms/PlanetDescription/PlanetDescription';
import React from 'react';

export const Planet = ({ data: { name, rotation, revolution, radius, temperature } }) => (
  <>
    <PlanetDescription name={name} />
    <PlanetData rotation={rotation} revolution={revolution} radius={radius} temperature={temperature} />
  </>
);
