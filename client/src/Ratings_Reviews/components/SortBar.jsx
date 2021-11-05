import React from 'react';

const SortBar = () => (
  <div>
    <h4>
      Sort by
    </h4>
    <select name="sort" id="sort">
      <option value="RELEVANT">
        Relevant
      </option>
      <option value="HELPFUL">
        Helpful
      </option>
      <option value="NEWEST">
        Newest
      </option>
    </select>
  </div>
);

export default SortBar;
