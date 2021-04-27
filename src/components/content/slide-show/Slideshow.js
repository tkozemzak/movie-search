import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = () => {
  const images = [1, 2, 3, 4, 5];
  const [state, setState] = useState({
    slideshow: images[0],
    slideIndex: 0
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const { slideShow, slideIndex } = state;

  //   const currentSlideIndex = 0;

  const moveSlideWithArrows = (type) => {
    let index = currentSlideIndex;
    if (type === 'prev') {
      if (currentIndex <= 0) {
        index = images.length - 1;
      } else {
        index--;
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
          <div
            className="slider-image"
            style={{
              backgroundImage: `url(https://wallpapercave.com/wp/hPLjH8C.jpg)`
            }}
          ></div>
        </div>
        <Indicators currentSlide={0} />
        <RenderArrows />
      </div>
    </>
  );
};

export default Slideshow;
