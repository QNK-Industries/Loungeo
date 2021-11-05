import React, { useState } from 'react';
import SortBar from './SortBar.jsx';
import ReviewModal from './ReviewModal.jsx';
import RatingsTable from './RatingsTable.jsx';
import ReviewButton from './ReviewButton.jsx';
import ReviewSearch from './ReviewSearch.jsx';
import RatingsSlideBar from './RatingsSlideBar.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';

const RatingsAndReviewsModule = ({ mainProduct }) => {
  const [shownReviews, setShownReviews] = useState(2);
  const [writingReview, setWritingReview] = useState(false);
  const [sortBy, setSortBy] = useState('RELEVANCE');
  const [searchConstraint, setSearchConstraint] = useState('');

  function displayAddReview() {
    if (writingReview) {
      return <ReviewModal mainProduct={mainProduct} modalOff={() => setWritingReview(false)} />;
    }
    return null;
  }

  function changeSorting(type) {
    setSortBy(type);
  }

  return (
    <section className="ratings-module" style={{ display: 'flex', 'justify-content': 'space-around' }}>
      <div className="ratings-left-section" style={{ width: '400px' }}>
        <h2 style={{ 'font-size': '16px' }}>
          RATINGS & REVIEWS
        </h2>
        <RatingsTable mainProduct={mainProduct} />
        <RatingsSlideBar />
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
};

export default RatingsAndReviewsModule;
