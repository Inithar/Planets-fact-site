import { MobileNavigationLink } from 'components/molecules/MobileNavigationLink.js/MobileNavigationLink';
import React, { useContext } from 'react';
import { Wrapper, Logo, BurgerIcon, Container, MobileLinksContainer, LinksContainer, StyledLink } from './Navigation.styles';
import { useIsMobile } from 'hooks/useIsMobile';
import { NavigationState } from 'providers/NavigationProvider';

export const Navigation = () => {
  const { isOpen, handleToggleNavigation } = useContext(NavigationState);
  const isMobile = useIsMobile();

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
          <StyledLink planet={'mercury'} to="mercury">
            mercury
          </StyledLink>
          <StyledLink planet={'venus'} to="venus">
            venus
          </StyledLink>
          <StyledLink planet={'earth'} to="earth">
            earth
          </StyledLink>
          <StyledLink planet={'mars'} to="mars">
            mars
          </StyledLink>
          <StyledLink planet={'jupiter'} to="jupiter">
            jupiter
          </StyledLink>
          <StyledLink planet={'saturn'} to="saturn">
            saturn
          </StyledLink>
          <StyledLink planet={'uranus'} to="uranus">
            uranus
          </StyledLink>
          <StyledLink planet={'neptune'} to="neptune">
            neptune
          </StyledLink>
        </LinksContainer>
      )}
    </Wrapper>
  );
};
