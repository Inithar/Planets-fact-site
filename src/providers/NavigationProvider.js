import React, { useState } from 'react';

export const NavigationState = React.createContext({ isOpen: false, handleToggleNavigation: () => {} });

export const NavigationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleNavigation = () => setIsOpen(!isOpen);

  return <NavigationState.Provider value={{ isOpen, handleToggleNavigation }}>{children}</NavigationState.Provider>;
};
