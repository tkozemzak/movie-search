import React from 'react';
import Rating from '../rating/Rating';
import './Details.scss';
import Overview from './overview/Overview';
import Tabs from './tabs/Tabs';

const tempImg = 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

const Details = () => {
  return (
    <>
      <div className="movie-container">
        <div className="movie-bg" style={{ backgroundImage: `url(${tempImg}})` }}></div>
        <div className="movie-overlay"></div>
        <div className="movie-details">
          <div className="movie-image">
            <img src={`${tempImg}`} alt="" />
          </div>
          <div className="movie-body">
            <div className="movie-overview">
              <div className="title">
                Title <span>Release Date</span>
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
                <div label="Crew">Crew component</div>
                <div label="Media">Media component</div>
                <div label="Reviews">Reviews component</div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
