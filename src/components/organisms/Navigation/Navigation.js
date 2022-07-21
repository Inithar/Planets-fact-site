import { MobileNavigationLink } from 'components/molecules/MobileNavigationLink.js/MobileNavigationLink';
import React, { useEffect, useState } from 'react';
import { Wrapper, Logo, BurgerIcon, Container, MobileLinksContainer, LinksContainer, StyledLink } from './Navigation.styles';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      newWidth >= 768 ? setIsMobile(false) : setIsMobile(true);
      console.log('updating height');
    };

    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  const handleToggleNavigation = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <Container>
        <Logo>The planets</Logo>
        <BurgerIcon onClick={handleToggleNavigation} />
      </Container>
      {isMobile ? (
        <MobileLinksContainer isOpen={isOpen}>
          <MobileNavigationLink planet={'mercury'} />
          <MobileNavigationLink planet={'venus'} />
          <MobileNavigationLink planet={'earth'} />
          <MobileNavigationLink planet={'mars'} />
          <MobileNavigationLink planet={'jupiter'} />
          <MobileNavigationLink planet={'saturn'} />
          <MobileNavigationLink planet={'uranus'} />
          <MobileNavigationLink planet={'neptune'} />
        </MobileLinksContainer>
      ) : (
        <LinksContainer>
          <StyledLink>mercury</StyledLink>
          <StyledLink>venus</StyledLink>
          <StyledLink>earth</StyledLink>
          <StyledLink>mars</StyledLink>
          <StyledLink>jupiter</StyledLink>
          <StyledLink>saturn</StyledLink>
          <StyledLink>uranus</StyledLink>
          <StyledLink>neptune</StyledLink>
        </LinksContainer>
      )}
    </Wrapper>
  );
};
