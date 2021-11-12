import React from 'react';

const SortBar = ({ changeSorting }) => (
  <div>
    <h4>
      Sort by
    </h4>
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
  </div>
);

export default SortBar;
