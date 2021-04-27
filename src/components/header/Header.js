import React from 'react';
import logo from '../../logo.png';

const Header = () => {
  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="" />
          </div>
          <div className="header-menu-toggle">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="header-nav">
            <li className="header-nav-item">Now Playing</li>
            <li className="header-nav-item">New Movies</li>
          </ul>
          <input className="search-input" type="text" placeholder="Search for a movie" />
        </div>
      </div>
    </>
  );
};

export default Header;
