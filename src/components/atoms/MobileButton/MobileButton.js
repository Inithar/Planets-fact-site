import styled from 'styled-components';

export const MobileButton = styled.button`
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 1.93px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  opacity: 50%;

  &::before {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.cyan};
    opacity: 0;
  }
`;
