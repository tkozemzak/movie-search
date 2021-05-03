import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import placeHolder from '../../assets/lazy-loader.gif';

const LazyLoad = ({ src, alt, children, className }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();

  return (
    <>
      <div className={className} ref={setImageRef} style={{ backgroundImage: `url(${imageSrc})` }} alt={alt}>
        {children}
      </div>
    </>
  );
};

export default LazyLoad;
