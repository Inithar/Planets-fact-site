import styled from 'styled-components';

export const PlanetName = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: ${({ theme }) => theme.lineHeight.l};
  text-transform: uppercase;
  font-family: 'Antonio', sans-serif;
  color: ${({ theme }) => theme.colors.white};
`;
