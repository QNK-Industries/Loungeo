import React from 'react';
import moment from 'moment';

const Answers = ({
  showModal, body, asker, date,
}) => (
  <div>
    Placeholder |
    <button type="button" onClick={showModal}>Add Answer</button>
    <br />
    A. {body}
    <br />
    By {asker}, {moment(date).utc().format('MMMM D, YYYY')} | Placeholder | Report
  </div>
);

export default Answers;
