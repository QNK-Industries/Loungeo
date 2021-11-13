/* eslint-disable max-len */
import React from 'react';
import { ReviewsWrapper } from '../ReviewsStyles.js';
import Review from './Review.jsx';

const ReviewsContainer = ({ reviews, reviewLimit, search }) => {
  function displayReviews() {
    return reviews
      .filter((review, index) => index < reviewLimit)
      .map((review) => <Review key={`review-${review.review_id}`} review={review} search={search} />);
  }

  return (
    <ReviewsWrapper>
      {displayReviews()}
    </ReviewsWrapper>
  );
};

export default ReviewsContainer;
