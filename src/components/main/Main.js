import React, { useState, useEffect, useRef } from 'react';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadMoreMovies, setResponsePageNumber } from '../../redux/actions/movies';

const Main = ({ loadMoreMovies, page, totalPages, setResponsePageNumber }) => {
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

  const fetchData = () => {
    if (page < totalPages) {
      setCurrentPage((prev) => {
        return prev + 1;
      });
    }
  };

  //redux action for loadmoremovies
  useEffect(() => {
    setResponsePageNumber(currentPage, totalPages);
    loadMoreMovies('now_playing', currentPage);
  }, [currentPage]);

  const handleScroll = () => {
    const { height } = mainRef.current.getBoundingClientRect();
    const { top: bottomLineTop } = mainRef.current.getBoundingClientRect();
    if (bottomLineTop <= height) {
      fetchData();
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
  totalPages: PropTypes.number,
  loadMoreMovies: PropTypes.func,
  setResponsePageNumber: PropTypes.func
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  page: state.movies.page,
  totalPages: state.movies.totalPages
});

export default connect(mapStateToProps, { loadMoreMovies, setResponsePageNumber })(Main);
