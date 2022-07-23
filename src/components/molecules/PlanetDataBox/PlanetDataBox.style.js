import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px 24px;
  width: ${({ width }) => width};
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    margin-right: 11px;
    padding: 16px 0 19px 16px;
    width: 25%;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const DataName = styled.p`
  margin: 0;
  font-size: 9px;
  font-weight: bold;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;

  ${device.tablet} {
  }
`;

export const DataValue = styled.p`
  margin: 0;
  margin-left: auto;
  font-size: 20px;
  line-height: 26px;
  font-family: 'Antonio', sans-serif;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  ${device.tablet} {
    margin-top: 10px;
    margin-left: 0;
  }
`;
