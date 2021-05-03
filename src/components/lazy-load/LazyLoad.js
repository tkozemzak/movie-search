import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import placeHolder from '../../assets/lazy-loader.gif';
import Spinner from '../spinner/Spinner';

const LazyLoad = ({ src, alt, children, className }) => {
  const [imageSrc, setImageSrc] = useState();
  const [imageRef, setImageRef] = useState();

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

export default LazyLoad;
