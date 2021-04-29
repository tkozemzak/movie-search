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

  //pull 4 random images from redux store list of movies
  const randomImages = list.sort(() => Math.random() - Math.random()).slice(0, 4);

  useEffect(() => {
    //check for image data locally and in redux store
    if (list.length && randomImages.length) {
      //map through random image list and return the correct image url, title, and release date
      const IMAGES = randomImages.map((item, i) => {
        return {
          id: i,
          url: `${IMAGE_URL}${item.backdrop_path}`,
          title: item.title,
          release_date: item.release_date.slice(0, 4)
        };
      });
      //set array of objects to local state
      setImages(IMAGES);
    }
    //eslint-disable-next-line
  }, []);
  //set current page in local state.
  const paginate = (type) => {
    if (type === 'prev' && currentPage >= 1) {
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      <Grid />
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
