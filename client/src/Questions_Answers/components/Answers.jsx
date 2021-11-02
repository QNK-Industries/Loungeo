import React from 'react';

const Answers = ({ showModal, body }) => (
  <div>
    Placeholder |
    <button type="button" onClick={showModal}>Add Answer</button>
    <br />
    A. {body}
    <br />
    By User, Date | Placeholder | Report
  </div>
);

export default Answers;
