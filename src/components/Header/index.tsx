import React from 'react';

import MainNav from './MainNav';
import Logo from './Logo';

import * as Styled from './styles';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Styled.Header className="resume-header">
    <Styled.Wrapper>
      <Logo />
      <MainNav />
    </Styled.Wrapper>
  </Styled.Header>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
