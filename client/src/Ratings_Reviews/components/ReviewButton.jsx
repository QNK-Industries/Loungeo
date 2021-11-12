import React from 'react';
import { StyledReviewButton } from '../ReviewsStyles.js';

const ReviewButton = ({ type, action }) => (
  <StyledReviewButton onClick={() => action()}>
    <h5>
      {type}
    </h5>
  </StyledReviewButton>
);

export default ReviewButton;
