/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  StyledReview,
  ReviewBorder,
  ColumnDiv,
  SellerResponse,
  ReviewPhotos,
  Highlight,
  ReviewShowButton,
} from '../ReviewsStyles.js';
import StarRating from '../../Shared/StarRating.jsx';
import HelpfulBar from './HelpfulBar.jsx';

const Review = ({ review, search }) => {
  const [minimizedBody, setMinimizedBody] = useState(true);

  function highlightFound(text, type) {
    if (search) {
      const parts = text.split(new RegExp(`(${search})`, 'gi'));
      return (
        <span className={type}> { parts.map((part, i) => (
          <Highlight key={`highlight-${i}`} active={part.toLowerCase() === search.toLowerCase()}>
            { part }
          </Highlight>
        ))}
        </span>
      );
    }
    return <span className={type}>{text}</span>;
  }

  function parseDate() {
    const date = new Date(review.date);
    return <span>{date.toLocaleString('default', { month: 'long' })} {date.getDate()}, {date.getFullYear()}</span>;
  }

  function splitSummary() {
    if (review.summary.length > 60) {
      const lastWordBreakPosition = review.summary.substring(0, 60).lastIndexOf(' ');
      return (
        <ColumnDiv>
          {highlightFound(`${review.summary.substring(0, lastWordBreakPosition)}...`, 'review-summary')}
          {highlightFound(`...${review.summary.substring(lastWordBreakPosition + 1)}`, 'review-sub-summary')}
        </ColumnDiv>
      );
    }
    return (
      <ColumnDiv>
        {highlightFound(review.summary, 'review-summary')}
      </ColumnDiv>
    );
  }

  function displayShowMore() {
    if (minimizedBody) {
      return (
        <ReviewShowButton type="button" onClick={() => setMinimizedBody(false)}>
          Show More
        </ReviewShowButton>
      );
    }
    return (
      <ReviewShowButton type="button" onClick={() => setMinimizedBody(true)}>
        Show Less
      </ReviewShowButton>
    );
  }

  function splitBody() {
    if (review.body.length > 250) {
      const lastWordBreakPosition = review.body.substring(0, 250).lastIndexOf(' ');
      return (
        <ColumnDiv>
          {highlightFound(`${review.body.substring(0, lastWordBreakPosition)}...`, 'review-body')}
          {displayShowMore()}
        </ColumnDiv>
      );
    }
    return (
      <ColumnDiv>
        {highlightFound(review.body, 'review-body')}
      </ColumnDiv>
    );
  }

  function displayBody() {
    if (minimizedBody) {
      return splitBody();
    }
    return (
      <ColumnDiv>
        {highlightFound(review.body, 'review-body')}
        {displayShowMore()}
      </ColumnDiv>
    );
  }

  function displaySellerResponse() {
    if (review.response) {
      return (
        <SellerResponse>
          <h4>
            Response from seller:
          </h4>
          <p>
            {review.response}
          </p>
        </SellerResponse>
      );
    }
    return null;
  }

  return (
    <StyledReview>
      <div className="spaced-form-content">
        <StarRating ratingObj={{ average: review.rating }} />
        {parseDate()}
      </div>
      {splitSummary()}
      <div>
        {displayBody()}
      </div>
      {displaySellerResponse()}
      <ReviewPhotos>
        {review.photos.map((photo, index) => <img key={`img-${review.review_id}-${index}`} alt="review submitted" src={photo.url} />)}
      </ReviewPhotos>
      <div className="spaced-form-content">
        <span>
          by {review.reviewer_name}
        </span>
        <HelpfulBar reviewId={review.review_id} helpfulness={review.helpfulness} />
      </div>
      <ReviewBorder />
    </StyledReview>
  );
};

export default Review;
