import styled from 'styled-components';
import sourceIcon from 'assets/icons/icon-source.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledParagraph = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: ${({ theme }) => theme.lineHeight.l};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.7;
`;

export const StyledLink = styled.a.attrs(({ href }) => ({ href: href, target: '_blank' }))`
  margin-left: 4px;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: ${({ theme }) => theme.lineHeight.l};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
  opacity: 0.7;
  cursor: pointer;
`;

export const SourceIcon = styled.img.attrs({ src: sourceIcon })`
  margin-left: 4px;
`;
