/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import SortBar from './SortBar.jsx';
import utils from '../utils.js';
import ReviewModal from './ReviewModal.jsx';
import RatingsTable from './RatingsTable.jsx';
import ReviewButton from './ReviewButton.jsx';
import ReviewSearch from './ReviewSearch.jsx';
import RatingsSlideBar from './RatingsSlideBar.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';
import starAverage from '../../Shared/StarAverage.jsx';

const characteristicList = {
  Size: {
    1: 'A size too small',
    2: '½ a size too small',
    3: 'Perfect',
    4: '½ a size too big',
    5: 'A size too big',
  },
  Width: {
    1: 'Too narrow',
    2: 'Slightly narrow',
    3: 'Perfect',
    4: 'Slightly wide',
    5: 'Too wide',
  },
  Comfort: {
    1: 'Uncomfortable',
    2: 'Slightly uncomfortable',
    3: 'Ok',
    4: 'Comfortable',
    5: 'Perfect',
  },
  Quality: {
    1: 'Poor',
    2: 'Below average',
    3: 'What I expected',
    4: 'Pretty great',
    5: 'Perfect',
  },
  Length: {
    1: 'Runs short',
    2: 'Runs slightly short',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
  Fit: {
    1: 'Runs tight',
    2: 'Runs slightly tight',
    3: 'Perfect',
    4: 'Runs slightly long',
    5: 'Runs long',
  },
};

const RatingsAndReviewsModule = ({ mainProduct }) => {
  const [ratingData, setRatingData] = useState({});
  const [starAverageData, setStarAverageData] = useState({});
  const [shownReviews, setShownReviews] = useState(2);
  const [writingReview, setWritingReview] = useState(false);
  const [sortBy, setSortBy] = useState('RELEVANCE');
  const [searchConstraint, setSearchConstraint] = useState('');

  useEffect(() => utils.getRating(mainProduct.id, (results) => {
    setRatingData(results);
    setStarAverageData(starAverage(results.ratings));
  }), []);

  function displayAddReview() {
    if (writingReview) {
      return <ReviewModal mainProduct={mainProduct} modalOff={() => setWritingReview(false)} />;
    }
    return null;
  }

  /*   function displayData() {
    console.log('rating data');
    console.log(ratingData);
    console.log('star average data');
    console.log(starAverageData);
  } */

  function changeSorting(type) {
    setSortBy(type);
  }

  if (starAverageData.total) {
    return (
      <section className="ratings-module" style={{ display: 'flex', 'justify-content': 'space-around' }}>
        <div className="ratings-left-section" style={{ width: '400px' }}>
          <h2 style={{ 'font-size': '16px' }}>
            RATINGS & REVIEWS
          </h2>
          <RatingsTable ratingData={ratingData} starAverageData={starAverageData} />
          <RatingsSlideBar characteristics={ratingData.characteristics} characteristicList={characteristicList} />
          <div className="review-button-container">
            <ReviewButton type="ADD" action={() => console.log('add review')} />
            <ReviewButton type="MORE" action={() => setShownReviews(shownReviews + 2)} />
          </div>
        </div>
        <div className="ratings-right-section">
          <div className="reviews-nav-bar">
            <SortBar changeSorting={(type) => changeSorting(type)} />
            <ReviewSearch search={(query) => setSearchConstraint(query)} />
          </div>
          {displayAddReview()}
          <ReviewsContainer totalReviews={shownReviews} sortBy={sortBy} search={searchConstraint} />
        </div>
      </section>
    );
  }
  return 'Loading...';
};

export default RatingsAndReviewsModule;
