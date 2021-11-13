import React from 'react';
import { StyledReviewButton } from '../ReviewsStyles.js';

const ReviewButton = ({ type, action }) => (
  <StyledReviewButton onClick={() => action()}>
    <span>
      {type}
    </span>
  </StyledReviewButton>
);

export default ReviewButton;
