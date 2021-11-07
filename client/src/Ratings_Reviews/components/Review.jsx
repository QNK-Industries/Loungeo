/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
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

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Review = ({ review, search }) => {
  const [minimizedBody, setMinimizedBody] = useState(true);

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
        <button type="button" style={{ width: 'fit-content', 'border-bottom': 'solid 1px black' }} onClick={() => setMinimizedBody(false)}>
          Show More
        </button>
      );
    }
    return (
      <button type="button" style={{ width: 'fit-content', 'border-bottom': 'solid 1px black' }} onClick={() => setMinimizedBody(true)}>
        Show Less
      </button>
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

  return (
    <StyledReview>
      <div style={{ display: 'flex', 'justify-content': 'space-between' }}>
        <StarRating ratingObj={{ average: review.rating }} />
        {parseDate()}
      </div>
      {splitSummary()}
      <div>
        {displayBody()}
      </div>
      <ReviewBorder />
    </StyledReview>
  );
};

export default Review;
