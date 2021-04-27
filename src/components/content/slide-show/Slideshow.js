import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = () => {
  const images = [
    {
      url: 'https://wallpapercave.com/wp/hPLjH8C.jpg'
    },
    {
      url: 'https://wallpapercave.com/wp/4KOmgLX.jpg'
    },
    {
      url: 'https://i.pinimg.com/originals/bf/ae/3f/bfae3fa83ae7efd6b7b56c3df0fac9bf.jpg'
    }
  ];
  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const { slideShow, slideIndex } = state;

  let currentSlideIndex = 0;

  const moveSlideWithArrows = (type) => {
    let index = currentIndex;
    if (type === 'prev') {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index--;
      }
    } else {
      if (currentIndex < images.length) {
        index++;
      }
      if (index === images.length) {
        index = 0;
      }
    }
    setCurrentIndex(index);
    setState((prev) => ({
      ...prev,
      slideIndex: index,
      slideShow: images[index]
    }));
  };

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div className="slider-arrow slider-arrow--left" onClick={() => moveSlideWithArrows('prev')} />
        <div className="slider-arrow slider-arrow--right" onClick={() => moveSlideWithArrows('next')} />
      </div>
    );
  };

  const Indicators = (props) => {
    const { currentSlide } = props;
    const listIndicators = images.map((slide, i) => {
      const btnClasses = i === currentSlide ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
      return <button className={btnClasses} key={i} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  return (
    <>
      <div className="slider">
        <div className="slider-slides">
          {images && images.length && slideShow && (
            <div
              className="slider-image"
              style={{
                backgroundImage: `url(${slideShow.url})`
              }}
            ></div>
          )}
        </div>
        <Indicators currentSlide={slideIndex} />
        <RenderArrows />
      </div>
    </>
  );
};

export default Slideshow;
