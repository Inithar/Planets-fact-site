import React from 'react';
import { PlanetData } from 'components/organisms/PlanetData/PlanetData';
import { PlanetDescription } from 'components/organisms/PlanetDescription/PlanetDescription';
import { CurrentStepProvider } from 'providers/CurrentStepProvider';

export const Planet = ({ data, data: { rotation, revolution, radius, temperature } }) => {
  return (
    <CurrentStepProvider planetData={data}>
      <PlanetDescription />
      <PlanetData rotation={rotation} revolution={revolution} radius={radius} temperature={temperature} />
    </CurrentStepProvider>
  );
};
