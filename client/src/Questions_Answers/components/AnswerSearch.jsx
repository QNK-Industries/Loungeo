import React from 'react';

const AnswerSearch = ({ search }) => {
  const searchFilter = (e) => {
    const adjustedString = e.target.value.toLowerCase();
    if (adjustedString.length > 2) {
      search(adjustedString);
    } else {
      search('');
    }
  };

  return (
    <div>
      <input size="50" placeholder="Have a question? Search for answers…" onChange={(e) => searchFilter(e)} />
    </div>
  );
};

export default AnswerSearch;
