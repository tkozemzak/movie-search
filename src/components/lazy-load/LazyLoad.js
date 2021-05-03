import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';

const LazyLoad = ({ src, alt, children, className }) => {
  const [imageSrc, setImageSrc] = useState();
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;
    //check for existing imageRef, imageSrc, and Observer
    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        //create Observer instance, take entries in callback
        observer = new IntersectionObserver(
          (entries) => {
            //loop through entries
            entries.forEach((entry) => {
              if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                //set image source and stop listening to imageRef
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%'
          }
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <>
      {imageSrc ? (
        <div className={className} ref={setImageRef} style={{ backgroundImage: `url(${imageSrc})` }} alt={alt}>
          {children}
        </div>
      ) : (
        <div className={className} ref={setImageRef} alt={alt}>
          <Spinner />
          {children}
        </div>
      )}
    </>
  );
};

LazyLoad.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string
};

export default LazyLoad;
