import styled from 'styled-components';
import sourceIcon from 'assets/icons/icon-source.svg';
import { device } from 'assets/styles/responsive';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${device.tablet} {
    justify-content: left;
  }
`;

export const StyledParagraph = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 52px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
`;

export const StyledLink = styled.a.attrs(({ href }) => ({ href: href, target: '_blank' }))`
  margin-left: 4px;
  font-size: 15px;
  line-height: 52px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
  opacity: 0.7;
  cursor: pointer;
`;

export const SourceIcon = styled.img.attrs({ src: sourceIcon })`
  margin-left: 4px;
`;
