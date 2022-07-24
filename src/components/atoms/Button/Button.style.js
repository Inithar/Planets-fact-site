import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 280px;
  height: 48px;
  font-size: 10px;
  text-align: left;
  line-height: 25px;
  letter-spacing: 1.93px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, planet, isActive }) => (isActive ? theme.planetButtonColor[planet] : 'transparent')};
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: background-color 0.7s;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme, planet }) => theme.planetButtonColor[planet]};
  }

  ${device.bigTablet} {
    width: 100%;
  }
`;

export const Iterator = styled.span`
  margin: 0 17px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
`;
