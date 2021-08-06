import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

import { QUERIES } from '../../constants';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <MobileMenuIcon id="shopping-bag" strokeWidth={1} />
          <MobileMenuIcon id="search" strokeWidth={1} />
          <MobileMenuIcon id="menu" strokeWidth={1} onClick={() => setShowMobileMenu(true)} />
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: scroll;

  @media ${QUERIES.tablet} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  gap: clamp(-1rem, 4vw, 4rem); 
  margin: 0px 48px;


  @media ${QUERIES.tablet} {
    margin: 0;
    gap: 40px;
  }

  @media ${QUERIES.mobile} {
    gap: 24px;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tablet} {
       :last-of-type {
            display: none;
       }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const MobileMenuIcon = styled(Icon)`
  display: none;

  @media ${QUERIES.tablet} {
    display: revert;
  }

`;

export default Header;
