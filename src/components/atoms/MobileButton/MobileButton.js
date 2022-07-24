import styled from 'styled-components';

export const MobileButton = styled.button`
  position: relative;
  font-size: 11px;
  letter-spacing: 1.93px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  opacity: ${({ isActive }) => (isActive ? '100%' : '50%')};

  &::before {
    content: '';
    position: absolute;
    bottom: -18px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({ theme, planet, isActive }) => (isActive ? theme.planetButtonColor[planet] : 'transparent')};
  }

  &:focus::before {
    background-color: ${({ theme, planet }) => theme.planetButtonColor[planet]};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.white};
    opacity: 100%;
  }
`;
