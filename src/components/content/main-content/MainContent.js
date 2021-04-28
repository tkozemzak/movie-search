import React, { useState } from 'react';
import Slideshow from '../slide-show/Slideshow';
import './MainContent.scss';
import Paginate from '../paginate/Paginate';

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {};

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

  return (
    <div className="main-content">
      <Slideshow images={images} auto={false} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      {/* grid component */}
    </div>
  );
};

export default MainContent;
