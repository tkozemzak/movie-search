import React from 'react';
import './Slideshow.scss';

const Slideshow = () => {
  return (
    <>
      <div className="slider">
        <div className="slider-slides">
          <div
            className="slider-image"
            style={{
              backgroundImage: `url(https://wallpapercave.com/wp/hPLjH8C.jpg)`
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
