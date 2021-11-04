import React from 'react';
import moment from 'moment';

const AnswerStyle = {
  border: '1px solid black',
  marginTop: '15px',
};

const Answers = ({
  showModal, body, asker, date,
}) => (
  <div style={AnswerStyle}>
    <br />
    <strong>A</strong> {body}
    <br />
    <br />
    By {asker}, {moment(date).utc().format('MMMM D, YYYY')} | Helpful? | Report
  </div>
);

export default Answers;
