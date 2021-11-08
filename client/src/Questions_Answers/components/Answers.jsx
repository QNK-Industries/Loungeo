import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const AnswerStyle = {
  border: '1px solid black',
  marginTop: '15px',
};

const GH_TOKEN = require('../../../../tokens.js');

const Answers = ({
  body, asker, date, helpful, id, addHelpful,
}) => {
  const [questionId, setId] = useState(id);
  const putRequest = 'answers';

  const reportAnswer = (reportId) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers/${reportId}/report`, {}, {
      headers: {
        Authorization: GH_TOKEN.GH_TOKEN,
      },
    })
      .then((res) => console.log('Answer reported ', res.data))
      .catch((error) => console.log(error));
  };

  return (
  <div style={AnswerStyle}>
    <br />
    <strong>A</strong> {body}
    <br />
    <br />
    By {asker === "Seller" ? <strong>{asker}</strong> : asker}, {moment(date).utc().format('MMMM D, YYYY')} |  <span onClick={() => addHelpful(questionId, putRequest)}>Helpful? {helpful ? helpful : null}</span> | <span onClick={() => reportAnswer(questionId)}>Report</span>
  </div>
);}

export default Answers;
