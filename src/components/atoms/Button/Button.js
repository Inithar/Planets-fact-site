import React, { useContext } from 'react';
import { Iterator, StyledButton } from './Button.style';
import { StepContext } from 'providers/CurrentStepProvider';

export const Button = ({ children, iterator, onClick, value, isActive }) => {
  const {
    descriptionData: { name }
  } = useContext(StepContext);

  return (
    <StyledButton onClick={onClick} value={value} planet={name} isActive={isActive}>
      <Iterator>{iterator}</Iterator>
      {children}
    </StyledButton>
  );
};
