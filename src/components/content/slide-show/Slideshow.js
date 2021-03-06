import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Slideshow.scss';

const Slideshow = ({ images, auto, showArrows }) => {
  //set initial state to the first image and the first index in the slideshow indeces
  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderInterval, setSliderInterval] = useState(0);

  const { slideShow, slideIndex } = state;

  let currentSlideIndex = 0;

  useEffect(() => {
    setState({
      ...state,
      slideIndex: 0,
      slideShow: images[0]
    });
    //scroll through photos on 5 sec interval if user sets autoscroll
    if (auto) {
      const timeInterval = setInterval(() => {
        autoMoveSlide();
      }, 5000);

      setSliderInterval(timeInterval);

      return () => {
        clearInterval(timeInterval);
        clearInterval(sliderInterval);
      };
    }

    // eslint-disable-next-line
  }, [images]);

  //scroll through photos on 5 sec interval if user sets autoscroll
  const autoMoveSlide = () => {
    let lastIndex = 0;
    lastIndex = currentSlideIndex + 1;
    currentSlideIndex = lastIndex >= images.length ? 0 : lastIndex;
    setState((prev) => ({
      ...prev,
      slideIndex: currentSlideIndex,
      slideShow: images[currentSlideIndex]
    }));
  };

  //wraparound index if arrows are used to scroll through slideshow
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
            >
              <div className="slider-title">
                <h1>{slideShow.title}</h1>
                <h5>{slideShow.release_date}</h5>
              </div>
            </div>
          )}
        </div>
        <Indicators currentSlide={slideIndex} />
        {showArrows ? <RenderArrows /> : null}
      </div>
    </>
  );
};

Slideshow.propTypes = {
  images: PropTypes.array.isRequired,
  auto: PropTypes.bool.isRequired,
  showArrows: PropTypes.bool.isRequired,
  currentSlide: PropTypes.number
};

export default Slideshow;
