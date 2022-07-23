import React from 'react';
import { Iterator, StyledButton } from './Button.style';

export const Button = ({ children, iterator }) => {
  return (
    <StyledButton>
      <Iterator>{iterator}</Iterator>
      {children}
    </StyledButton>
  );
};
