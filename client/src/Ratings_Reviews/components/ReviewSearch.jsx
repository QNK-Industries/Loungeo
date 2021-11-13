import React from 'react';
import { StyledReviewSearch } from '../ReviewsStyles.js';

const ReviewSearch = ({ search }) => {
  function searchFilter({ target }) {
    const adjustedString = target.value.toLowerCase();
    if (adjustedString.length > 2) {
      search(adjustedString);
    } else {
      search('');
    }
  }

  return (
    <StyledReviewSearch>
      <div className="search-container">
        <input placeholder="Search Reviews" onChange={(event) => searchFilter(event)} />
        <img className="search-button" alt="search" src="../../../images/search.svg" />
      </div>
    </StyledReviewSearch>
  );
};

export default ReviewSearch;
