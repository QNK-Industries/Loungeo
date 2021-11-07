import React from 'react';
import styled from 'styled-components';

const StyledReviewButton = styled.div`
  width: 150px;
  height: 50px;
  border: 1px solid black;
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  transition: all 0.2s ease-in;

  & h5 {
    margin: 0;
  }

  & :hover {
    transform: scale(1.05);
  }
`;

const ReviewButton = ({ type, action }) => (
  <StyledReviewButton onClick={() => action()}>
    <h5>
      {type}
    </h5>
  </StyledReviewButton>
);

export default ReviewButton;
