import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const StepContext = React.createContext({ descriptionData: {}, changeDescriptionData: () => {} });

export const CurrentStepProvider = ({ children, planetData }) => {
  const location = useLocation();
  const { name, overview, structure, geology, images } = planetData;

  const [descriptionData, setDescriptionData] = useState({
    name: name,
    content: overview.content,
    source: overview.source,
    imageSrc: images.planet
  });

  const changeDescriptionData = step => {
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

  if (descriptionData.name !== location.pathname.substring(1)) {
    changeDescriptionData('overview');
  }

  return <StepContext.Provider value={{ descriptionData, changeDescriptionData }}>{children}</StepContext.Provider>;
};
