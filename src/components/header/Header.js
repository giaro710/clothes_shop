import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo__container">
          <Link to="/">
            <h3>The clothes shop</h3>
          </Link>
        </div>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
