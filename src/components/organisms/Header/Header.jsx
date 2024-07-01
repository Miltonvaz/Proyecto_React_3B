import React from 'react';
import NavBar from '../../molecules/NavBar/NavBar';
import Logo from '../../atmos/Logo/Logo';

const Header = ({ children }) => (
  <header className="header">
    <div className="logo">
      <Logo />
    </div>
    <NavBar />
    {children}
  </header>
);

export default Header;
