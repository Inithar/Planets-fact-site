import styled from 'styled-components';
import arrowIcon from 'assets/icons/arrow.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled(Container)`
  width: 100%;
  height: 12.5%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
`;

export const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme, ...props }) => theme.planetsColor[props.planet]};
  border-radius: 50%;
`;

export const PlanetName = styled.p`
  margin-left: 24px;
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.lineHeight.m};
  letter-spacing: 1.36px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const ArrowIcon = styled.img.attrs({ src: `${arrowIcon}` })`
  margin-left: auto;
  margin-right: 8px;
`;
