import styled from 'styled-components';
import { device } from 'assets/styles/responsive';

export const StyledButton = styled.button`
  margin-bottom: 16px;
  padding: 8px 20px;
  width: 280px;
  font-size: 10px;
  text-align: left;
  line-height: 25px;
  letter-spacing: 1.93px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    margin-bottom: 0;
  }

  ${device.bigTablet} {
    width: 100%;
  }
`;

export const Iterator = styled.span`
  margin-right: 17px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
`;
