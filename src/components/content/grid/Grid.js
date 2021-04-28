import React from 'react';
import Rating from '../rating/Rating';
import './Grid.scss';

const Grid = ({ images }) => {
  return (
    <>
      <div className="grid">
        {images.map((image, i) => {
          return (
            <div key={i}>
              <div className="grid-cell" style={{ backgroundImage: `url(${image.url})` }}>
                <div className="grid-read-more">
                  <button className="grid-cell-button">More Info</button>
                </div>
                <div className="grid-detail">
                  <span className="grid-detail-title">Title</span>
                  <div className="grid-detail-rating">
                    <Rating rating={image.rating} totalStars={10} />
                    &nbsp;&nbsp;
                    <div className="grid-vote-average">{image.rating}</div>
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

export default Grid;