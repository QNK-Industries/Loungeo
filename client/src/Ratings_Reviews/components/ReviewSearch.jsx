import React from 'react';

const ReviewSearch = ({ search }) => {
  function searchFilter({ target }) {
    if (target.value.length > 2) {
      search(target.value);
    }
  }

  return (
    <div>
      <input placeholder="Search Reviews" onChange={(event) => searchFilter(event)} />
    </div>
  );
};

export default ReviewSearch;
