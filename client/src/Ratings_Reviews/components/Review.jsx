/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import StarRating from '../../Shared/StarRating.jsx';

const StyledReview = styled.div`
  margin-bottom: 30px;
  padding: 0 15px;

  & .review-summary {
    font-size: 24px;
  }
`;

const ReviewBorder = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 30px;
  border-bottom: solid 2px lightgrey;
`;

const Review = ({ review, search }) => {
  function highlightFound(text, type) {
    if (search) {
      const parts = text.split(new RegExp(`(${search})`, 'gi'));
      return (
        <span className={type}> { parts.map((part, i) => (
          <span key={i} style={part.toLowerCase() === search.toLowerCase() ? { 'background-color': 'yellow' } : {}}>
            { part }
          </span>
        ))}
        </span>
      );
    }
    return <span className={type}>{text}</span>;
  }

  /*
    Aut repellendus blanditiis sed voluptas sapiente eligendi quisquam non ut.
  */

  function parseDate() {
    const date = new Date(review.date);
    return <span>{date.toLocaleString('default', { month: 'long' })} {date.getDate()}, {date.getFullYear()}</span>;
  }

  function displaySummary() {
    if (review.summary.length > 60) {
      const lastWordBreakPosition = review.summary.substring(0, 60).lastIndexOf(' ');
      return (
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          {highlightFound(`${review.summary.substring(0, lastWordBreakPosition)}...`, 'review-summary')}
          {highlightFound(`...${review.summary.substring(lastWordBreakPosition + 1)}`, 'review-sub-summary')}
        </div>
      );
    }
    return highlightFound(review.summary, 'review-summary');
  }

  return (
    <StyledReview>
      <div style={{ display: 'flex', 'justify-content': 'space-between' }}>
        <StarRating ratingObj={{ average: review.rating }} />
        {parseDate()}
      </div>
      {displaySummary()}
      <h1>Body</h1>
      {highlightFound(review.body)}
      <ReviewBorder />
    </StyledReview>
  );
};

export default Review;
