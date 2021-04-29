import React, { useState, useEffect, useRef } from 'react';
import './Rating.scss';
import PropTypes from 'prop-types';

const Rating = ({ rating, totalStars, className }) => {
  const [numberOfStars, setNumberOfStars] = useState();

  const ratingRef = useRef();

  useEffect(() => {
    //create an array of integers based on a single integer passed down as prop
    setNumberOfStars([...Array(totalStars).keys()].map((i) => i++));

    let percentage;
    //calculate percentage for css for how many stars show
    if (rating <= 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }
    //round percentage down and apply width to the gold stars using Ref
    const starPercentage = `${Math.floor(percentage)}%`;
    ratingRef.current.style.width = starPercentage;
  }, [rating, totalStars]);

  return (
    <div className="star-rating">
      <div className={`back-stars ${className}`}>
        {numberOfStars &&
          numberOfStars.map((i) => {
            return <i key={i} className="fa fa-star" aria-hidden="true"></i>;
          })}

        <div className={`front-stars ${className}`} ref={ratingRef}>
          {numberOfStars &&
            numberOfStars.map((i) => {
              return <i key={i} className="fa fa-star" aria-hidden="true"></i>;
            })}
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Rating;
