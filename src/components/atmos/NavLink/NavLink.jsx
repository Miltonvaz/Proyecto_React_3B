import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, text }) => (
  <li>
    <Link to={to} className="nav-link">{text}</Link>
  </li>
);

export default NavLink;
