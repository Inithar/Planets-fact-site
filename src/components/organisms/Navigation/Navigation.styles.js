import styled from 'styled-components';
import hamburgerIcon from 'assets/icons/icon-hamburger.svg';
import { device } from 'assets/styles/responsive';
import { NavLink } from 'react-router-dom';

const mobileNavigationHeight = '69px';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;

  ${device.smallDesktop} {
    display: flex;
  }
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 28px;
  line-height: 36px;
  font-family: 'Antonio', sans-serif;
  text-transform: uppercase;
  letter-spacing: -1.05px;

  ${device.tablet} {
    margin-top: 18px;
    width: 100%;
    text-align: center;
  }
`;

export const BurgerIcon = styled.img.attrs({ src: `${hamburgerIcon}` })`
  padding: 10px;
  margin-left: auto;
  opacity: 0.45;
  cursor: pointer;

  ${device.tablet} {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px;
  height: ${mobileNavigationHeight};

  ${device.smallDesktop} {
    padding-left: 32px;
    padding-right: 0;
  }
`;

export const MobileLinksContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 33px 24px 67px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s;
  z-index: 2;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 34px 0 22px;

  ${device.smallDesktop} {
    margin-left: auto;
    padding-right: 40px;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  margin-right: 33px;
  padding: 5px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.75;
  text-decoration: none;
  transition: opacity 0.3s;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: -35px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.cyan};
    opacity: 0;
    transition: opacity 1s;
  }

  &:hover::before {
    opacity: 1;
  }
`;
