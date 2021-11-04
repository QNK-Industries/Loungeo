import React from 'react';

const Answers = ({ showModal, body, asker }) => (
  <div>
    Placeholder |
    <button type="button" onClick={showModal}>Add Answer</button>
    <br />
    A. {body}
    <br />
    By {asker}, Date | Placeholder | Report
  </div>
);

export default Answers;
