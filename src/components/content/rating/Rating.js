import React, { useState, useEffect, useRef } from 'react';
import './Rating.scss';

const Rating = ({ rating, totalStars }) => {
  const [numberOfStars, setNumberOfStars] = useState();

  const ratingRef = useRef();

  useEffect(() => {
    const starsArray = [...Array(totalStars).keys()].map((i) => {
      return i++;
    });

    setNumberOfStars(starsArray);
  }, [rating, totalStars]);

  return (
    <div className="star-rating">
      <div className="back-stars">
        {numberOfStars &&
          numberOfStars.map((i) => {
            return <i key={i} className="fa fa-star" aria-hidden="true"></i>;
          })}

        <div className="front-stars">
          {numberOfStars &&
            numberOfStars.map((i) => {
              return <i key={i} className="fa fa-star" aria-hidden="true"></i>;
            })}
        </div>
      </div>
    </div>
  );
};

export default Rating;
