import React, { useState } from 'react';

export const StepContext = React.createContext({ step: 'overview', descriptionData: {}, changePlanetData: () => {} });

export const CurrentStepProvider = ({ children, planetData }) => {
  const { name, overview, structure, geology, images } = planetData;

  const [descriptionData, setDescriptionData] = useState({
    name: name,
    content: overview.content,
    source: overview.source,
    imageSrc: images.planet
  });

  const changePlanetData = step => {
    switch (step) {
      case 'overview':
        setDescriptionData({
          name: name,
          content: overview.content,
          source: overview.source,
          imageSrc: images.planet
        });
        break;
      case 'structure':
        setDescriptionData({
          name: name,
          content: structure.content,
          source: structure.source,
          imageSrc: images.internal
        });
        break;
      case 'surface':
        setDescriptionData({
          name: name,
          content: geology.content,
          source: geology.source,
          imageSrc: images.geology
        });
        break;
    }
  };

  return <StepContext.Provider value={{ step: 'overview', descriptionData, changePlanetData }}>{children}</StepContext.Provider>;
};
