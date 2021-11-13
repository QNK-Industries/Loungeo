import React from 'react';
import { StyledSortBar } from '../ReviewsStyles.js';

const SortBar = ({ changeSorting }) => (
  <StyledSortBar>
    <h4>
      Sort by
    </h4>
    <label htmlFor="sort" className="review-select">
      <select name="sort" id="sort" onChange={(event) => changeSorting(event.target.value)}>
        <option value="relevant">
          Relevant
        </option>
        <option value="helpful">
          Helpful
        </option>
        <option value="newest">
          Newest
        </option>
      </select>
      <svg className="sprites">
        <symbol id="select-arrow-down" viewBox="0 0 10 6">
          <polyline points="1 1 5 5 9 1" />
        </symbol>
      </svg>
    </label>
  </StyledSortBar>
);

export default SortBar;
