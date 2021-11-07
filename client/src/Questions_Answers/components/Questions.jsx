import React, { useState } from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';

const GH_TOKEN = require('../../../../tokens.js');

const RightBar = {
  float: 'right',
};

const Questions = ({ modal, id, questionBody, answers, showModal, helpful, getQuestions, count }) => {
  const [answerCount, setAnswerCount] = useState(2);
  const putRequest = 'questions';
  const addHelpful = (questionId, endPoint) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/${endPoint}/${questionId}/helpful`, {}, {
      headers: {
        Authorization: GH_TOKEN.GH_TOKEN,
      },
    })
      .then((response) => console.log('You did it dawg ', response.data))
      .then(() => getQuestions(count))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div style={RightBar}>
        <span onClick={() => addHelpful(id, putRequest)}>Helpful?</span> {helpful}|
        <button type="button" onClick={() => showModal(id, questionBody)}>Add Answer</button>
      </div>
      <h2>Q. {questionBody}</h2>
      {/* <Answers showModal={props.showModal} /> */}
      <div style={Object.keys(answers).length
        ? { overflowY: 'scroll', height: '200px'}
        : null}>
        {Object.keys(answers).slice(0, answerCount).map((answer) => <Answers
        showModal={showModal}
        body={answers[answer].body}
        asker={answers[answer].answerer_name}
        date={answers[answer].date} helpful={answers[answer].helpfulness} id={answers[answer].id} addHelpful={addHelpful}/>).reverse()}</div>
        {Object.keys(answers).length
        ? <button onClick={() => setAnswerCount(answerCount + 2)}
        >Add More Answers</button>
        : null}
    </div>
  );
};

export default Questions;
