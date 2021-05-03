import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import { getMovies, setMovieType, setResponsePageNumber } from '../../redux/actions/movies';
import { PropTypes } from 'prop-types';
import NAV_BUTTON_LIST from '../../assets/nav-button-list';

const Header = ({ getMovies, setMovieType, page, totalPages, setResponsePageNumber }) => {
  let [navClass, setNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);
  const [type, setType] = useState('now_playing');

  useEffect(() => {
    getMovies(type, page);
    setResponsePageNumber(page, totalPages);
    // eslint-disable-next-line
  }, [type]);

  //set nav section name and api req url on nav button click
  const setMovieTypeUrl = (type) => {
    setType(type);
    setMovieType(type);
  };

  //apply css classes according to screen width
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
            <img src="" alt="" />
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
            {NAV_BUTTON_LIST.map((data) => {
              return (
                <li key={data.id} className={data.type === type ? 'header-nav-item active-item' : 'header-nav-item'} onClick={() => setMovieTypeUrl(data.type)}>
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
  getMovies: PropTypes.func,
  setMovieType: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
  // list: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  page: state.movies.page,
  totalPages: state.movies.totalPages
});

export default connect(mapStateToProps, { getMovies, setMovieType, setResponsePageNumber })(Header);
