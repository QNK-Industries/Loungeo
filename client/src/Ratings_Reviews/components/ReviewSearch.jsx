import React from 'react';

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
    <div>
      <input placeholder="Search Reviews" onChange={(event) => searchFilter(event)} />
    </div>
  );
};

export default ReviewSearch;
