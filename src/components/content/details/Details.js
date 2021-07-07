import './Details.scss';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'
import Rating from '../rating/Rating';
import Crew from './crew/Crew';
import Media from './media/Media';
import Overview from './overview/Overview';
import Tabs from './tabs/Tabs';
import Reviews from './reviews/Reviews';
import { movieDetails } from '../../../redux/actions/movies';
import { IMAGE_URL } from '../../../services/movies.service'

const tempImg = 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

const Details = ({ setShowSearch, movieDetails, movie_details }) => {
  const [details, setDetails] = useState();



  useEffect(() => {
    setShowSearch(false);
    return () => {
      setShowSearch(true);
    };
    //eslint-disable-next-line
  }, []);

  const { id } = useParams()

  useEffect(() => {
    if (movie_details.length === 0) {
      movieDetails(id)
    }
    setDetails(movie_details[0])

    
  }, [id, movie_details])

  return (
    <>
    {
      details && 
    
      <div className="movie-container">
        <div className="movie-bg" style={{ backgroundImage: `url(${IMAGE_URL}${details.backdrop_path})` }}></div>
        <div className="movie-overlay"></div>
        <div className="movie-details">
          <div className="movie-image">
            <img src={`${IMAGE_URL}${details.backdrop_path}`} alt="" />
          </div>
          <div className="movie-body">
            <div className="movie-overview">
              <div className="title">
                {details.title} <span>{details.release_date}</span>
              </div>
              <div className="movie-genres">
                <ul className="genres">
                  <li>Comedy</li>
                  <li>Action</li>
                </ul>
              </div>
              <div className="rating">
                <Rating className="rating-stars" rating={6.5} totalStars={5} />
                &nbsp;
                <span>6.5</span> <p>(200) reviews</p>
              </div>
              <Tabs>
                <div label="Overview">
                  <Overview />
                </div>
                <div label="Crew">
                  <Crew />
                </div>
                <div label="Media">
                  <Media />
                </div>
                <div label="Reviews">
                  <Reviews />
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
};

Details.propTypes = {
  movie_details: PropTypes.array,
  movieDetails: PropTypes.func
}

const mapStateToProps = (state) => ({
  movie_details: state.movies.movie_details
})

export default connect(
mapStateToProps,
{ movieDetails }
)(Details);
