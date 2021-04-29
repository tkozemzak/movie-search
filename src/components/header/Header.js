import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/cinema-logo.svg';
import './Header.scss';
import { getMovies } from '../../redux/actions/movies';
import { PropTypes } from 'prop-types';

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
];

const Header = ({ getMovies }) => {
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);

  useEffect(() => {
    getMovies('now_playing', 1);
    // eslint-disable-next-line
  }, []);

  const toggleMenu = () => {
    menuClass = !menuClass;
    setMenuClass(menuClass);

    navClass = !navClass;
    setNavClass(navClass);

    navClass ? document.body.classList.add('header-nav-open') : document.body.classList.remove('header-nav-open');
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="" />
          </div>
          <div
            onClick={() => {
              toggleMenu();
            }}
            className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`}
            id="header-mobile-menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
            {HEADER_LIST.map((data) => {
              return (
                <li key={data.id} className="header-nav-item">
                  <span className="header-list-name">
                    <i className={data.iconClass} />
                  </span>
                  &nbsp;
                  <span className="header-list-name">{data.name}</span>
                </li>
              );
            })}
            <input className="search-input" type="text" placeholder="Search for a movie" />
          </ul>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  getMovies: PropTypes.func
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps, { getMovies })(Header);
