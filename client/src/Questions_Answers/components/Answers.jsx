import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const AnswerStyle = {
  border: '1px solid black',
  marginTop: '15px',
};

const Answers = ({
  body, asker, date, helpful, id,
}) => {
  const [questionId, setId] = useState(id);

  return (
  <div style={AnswerStyle}>
    <br />
    <strong>A</strong> {body}
    <br />
    <br />
    By {asker}, {moment(date).utc().format('MMMM D, YYYY')} |  <span onClick={() => console.log('Helpful Click ')}>Helpful? {helpful ? helpful : null}</span> | Report
  </div>
);}

export default Answers;
