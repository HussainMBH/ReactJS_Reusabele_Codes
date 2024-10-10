import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <h1>MBH System</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">User</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
