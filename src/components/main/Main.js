import React, { useState, useEffect, useRef } from 'react';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadMoreMovies } from '../../redux/actions/movies';

const Main = ({ loadMoreMovies, page }) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);

  const mainRef = useRef();
  const bottomLineRef = useRef();

  //add 3 second loader until redux store can be populated
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  //redux action for loadmoremovies
  useEffect(() => {
    loadMoreMovies('now_playing', currentPage);
  });

  const handleScroll = () => {
    const { height } = mainRef.current.getBoundingClientRect();
    const { top: bottomLineTop } = mainRef.current.getBoundingClientRect();
    if (bottomLineTop <= height) {
      //fetch data here
    }
  };

  return (
    <div className="main" ref={mainRef} onScroll={() => handleScroll()}>
      {loading ? <Spinner /> : <MainContent />}
      <div ref={bottomLineRef}></div>
    </div>
  );
};

Main.propTypes = {
  list: PropTypes.array,
  page: PropTypes.number,
  loadMoreMovies: PropTypes.func
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps, { loadMoreMovies })(Main);
