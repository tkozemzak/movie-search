import React from 'react';
import Slideshow from '../slide-show/Slideshow';
import './MainContent.scss';

const MainContent = () => {
  return (
    <div className="main-content">
      <Slideshow />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* grid component */}
    </div>
  );
};

export default MainContent;
