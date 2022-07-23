import { MobileNavigationLink } from 'components/molecules/MobileNavigationLink.js/MobileNavigationLink';
import React, { useEffect, useState } from 'react';
import { Wrapper, Logo, BurgerIcon, Container, MobileLinksContainer, LinksContainer, StyledLink } from './Navigation.styles';
import { useIsMobile } from 'hooks/useIsMobile';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

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
          <StyledLink to="mercury">mercury</StyledLink>
          <StyledLink to="venus">venus</StyledLink>
          <StyledLink to="earth">earth</StyledLink>
          <StyledLink to="mars">mars</StyledLink>
          <StyledLink to="jupiter">jupiter</StyledLink>
          <StyledLink to="saturn">saturn</StyledLink>
          <StyledLink to="uranus">uranus</StyledLink>
          <StyledLink to="neptune">neptune</StyledLink>
        </LinksContainer>
      )}
    </Wrapper>
  );
};
