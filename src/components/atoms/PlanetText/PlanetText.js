import styled from 'styled-components';

export const PlanetText = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  padding: 0 28px;
  font-size: 12px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
`;
