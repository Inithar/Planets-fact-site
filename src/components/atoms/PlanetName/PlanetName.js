import styled from 'styled-components';

export const PlanetName = styled.h1`
  margin: 0;
  font-size: 40px;
  line-height: 52px;
  text-transform: uppercase;
  font-family: 'Antonio', sans-serif;
  color: ${({ theme }) => theme.colors.white};
`;
