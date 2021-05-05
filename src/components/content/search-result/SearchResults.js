import React, { useState, useEffect, Fragment } from 'react';
import Rating from '../rating/Rating';
import { connect } from 'react-redux';
import './SearchResults.scss';
import '../grid/Grid.scss';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../../services/movies.service';
import LazyLoad from '../../lazy-load/LazyLoad';

const SearchResults = ({ searchResults, searchQuery }) => {
  const [movieData, setMovieData] = useState([]);

  //set movie data into local state with list from redux store
  //if list from redux changes, local state will update
  useEffect(() => {
    setMovieData(searchResults);
  }, [searchResults]);

  return (
    <div className="search-keyword">
      <div className="grid-search-title">
        <span className="grid-text1">Your search keyword</span> <span className="grid-text2">{searchQuery}</span>
      </div>
      <div className="grid">
        {movieData.map((image, i) => {
          return (
            <Fragment key={uuidv4()}>
              {image.poster_path && (
                <LazyLoad className="grid-cell" src={`${IMAGE_URL}${image.poster_path}`} alt="placeholder">
                  <div className="grid-read-more">
                    <button className="grid-cell-button">More Info</button>
                  </div>
                  <div className="grid-detail">
                    <span className="grid-detail-title">{image.title}</span>
                    <div className="grid-detail-rating">
                      <Rating rating={image.vote_average} totalStars={5} />
                      &nbsp;&nbsp;
                      <div className="grid-vote-average">{(image.vote_average / 2).toFixed(1)}</div>
                    </div>
                  </div>
                </LazyLoad>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  searchResults: state.movies.searchResults,
  searchQuery: state.movies.searchQuery
});

export default connect(mapStateToProps, {})(SearchResults);
