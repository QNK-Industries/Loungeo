import React from 'react';
import moment from 'moment';

const AnswerStyle = {
  border: '1px solid black',
  marginTop: '15px',
};

const Answers = ({
  body, asker, date, helpful,
}) => (
  <div style={AnswerStyle}>
    <br />
    <strong>A</strong> {body}
    <br />
    <br />
    By {asker}, {moment(date).utc().format('MMMM D, YYYY')} |  <span onClick={() => console.log('Helpful Click ')}>Helpful? {helpful}</span> | Report
  </div>
);

export default Answers;
