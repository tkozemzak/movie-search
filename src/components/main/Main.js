import React, { useState, useEffect, useRef } from 'react';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
import SearchResults from '../content/search-result/SearchResults';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadMoreMovies, setResponsePageNumber } from '../../redux/actions/movies';
import './Main.scss';

const Main = ({ loadMoreMovies, page, totalPages, setResponsePageNumber, movieType, searchResults }) => {
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
    let pageNumber = currentPage;
    if (page < totalPages) {
      pageNumber += 1;
      setCurrentPage(pageNumber);
      loadMoreMovies(movieType, pageNumber);
    }
  };

  //redux action for loadmoremovies
  useEffect(() => {
    setResponsePageNumber(currentPage, totalPages);
    //eslint-disable-next-line
  }, [currentPage, totalPages]);

  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const { top: bottomLineTop } = bottomLineRef.current.getBoundingClientRect();
    if (bottomLineTop - 1 <= containerHeight) {
      fetchData();
    }
  };

  return (
    <div className="main" ref={mainRef} onScroll={handleScroll}>
      {loading ? <Spinner /> : <>{searchResults && searchResults.length === 0 ? <MainContent /> : <SearchResults />}</>}
      <div ref={bottomLineRef}></div>
    </div>
  );
};

Main.propTypes = {
  list: PropTypes.array,
  page: PropTypes.number,
  totalPages: PropTypes.number,
  loadMoreMovies: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
  movieType: PropTypes.string
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  page: state.movies.page,
  totalPages: state.movies.totalPages,
  movieType: state.movies.movieType,
  searchResults: state.movies.searchResults
});

export default connect(mapStateToProps, { loadMoreMovies, setResponsePageNumber })(Main);
