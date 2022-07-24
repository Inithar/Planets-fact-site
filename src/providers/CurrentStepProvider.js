import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const StepContext = React.createContext({ buttonsState: {}, changeButtonState: () => {}, descriptionData: {}, changeDescriptionData: () => {} });

export const CurrentStepProvider = ({ children, planetData }) => {
  const location = useLocation();
  const { name, overview, structure, geology, images } = planetData;
  const [step, setStep] = useState('overview');

  const [buttonsState, setButtonsState] = useState({
    overview: true,
    structure: false,
    surface: false
  });

  const [descriptionData, setDescriptionData] = useState({
    name: name,
    content: overview.content,
    source: overview.source,
    imageSrc: images.planet
  });

  const changeButtonState = e => {
    setButtonsState(
      Object.assign(
        {
          overview: false,
          structure: false,
          surface: false
        },
        { [e.target.value]: true }
      )
    );
  };

  const changeDescriptionData = step => {
    setStep(step);
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
          imageSrc: images.planet,
          geologyImg: images.geology
        });
        break;
    }
  };

  if (descriptionData.name !== location.pathname.substring(1)) {
    changeDescriptionData('overview');
    setButtonsState({
      overview: true,
      structure: false,
      surface: false
    });
  }

  return <StepContext.Provider value={{ step, buttonsState, changeButtonState, descriptionData, changeDescriptionData }}>{children}</StepContext.Provider>;
};
