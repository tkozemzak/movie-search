import React, { useState, useEffect } from 'react';
import Slideshow from '../slide-show/Slideshow';
import './MainContent.scss';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../../../services/movies.service';

const MainContent = ({ list }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);

  const randomImages = list.sort(() => Math.random() - Math.random()).slice(0, 4);

  useEffect(() => {
    if (randomImages.length) {
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}/${randomImages[0].backdrop_path}`
        },
        {
          id: 2,
          url: `${IMAGE_URL}/${randomImages[1].backdrop_path}`
        },
        {
          id: 3,
          url: `${IMAGE_URL}/${randomImages[2].backdrop_path}`
        },
        {
          id: 4,
          url: `${IMAGE_URL}/${randomImages[3].backdrop_path}`
        }
      ];
      setImages(IMAGES);
    }
  }, []);

  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const imagesArray = [
    {
      url: 'https://wallpapercave.com/wp/4KOmgLX.jpg',
      rating: 7.5
    },
    {
      url: 'https://wallpapercave.com/wp/hPLjH8C.jpg',
      rating: 6.7
    },
    {
      url: 'https://wallpapercave.com/wp/4KOmgLX.jpg',
      rating: 9.2
    },
    {
      url: 'https://i.pinimg.com/originals/bf/ae/3f/bfae3fa83ae7efd6b7b56c3df0fac9bf.jpg',
      rating: 5.1
    },
    {
      url: 'https://i.pinimg.com/originals/bf/ae/3f/bfae3fa83ae7efd6b7b56c3df0fac9bf.jpg',
      rating: 8.9
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
      <Grid images={imagesArray} />
    </div>
  );
};

MainContent.propTypes = {
  list: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list
});

export default connect(mapStateToProps, {})(MainContent);
