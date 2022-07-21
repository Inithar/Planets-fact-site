import styled from 'styled-components';

export const PlanetDescription = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  padding: 0 28px;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
`;
