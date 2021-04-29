import React, { useState, useEffect } from 'react';
import Rating from '../rating/Rating';
import { connect } from 'react-redux';
import './Grid.scss';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../../services/movies.service';

const Grid = ({ list }) => {
  const [movieData, setMovieData] = useState([]);

  //set movie data into local state with list from redux store
  //if list from redux changes, local state will update
  useEffect(() => {
    setMovieData(list);
  }, [list]);

  return (
    <>
      <div className="grid">
        {movieData.map((image, i) => {
          return (
            <div key={uuidv4()}>
              <div className="grid-cell" style={{ backgroundImage: `url(${IMAGE_URL}${image.poster_path})` }}>
                <div className="grid-read-more">
                  <button className="grid-cell-button">More Info</button>
                </div>
                <div className="grid-detail">
                  <span className="grid-detail-title">{image.title}</span>
                  <div className="grid-detail-rating">
                    <Rating rating={image.vote_average} totalStars={5} />
                    &nbsp;&nbsp;
                    <div className="grid-vote-average">{image.vote_average}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

Grid.propTypes = {
  list: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps, {})(Grid);
