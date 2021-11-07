import React, { useState } from 'react';
import axios from 'axios';
import Answers from './Answers.jsx';

const RightBar = {
  float: 'right',
};

const Questions = ({ modal, id, questionBody, answers, showModal, helpful }) => {
  const [questionId, setQuestionId] = useState(id);

  return (
    <div>
      <div style={RightBar}>
        Helpful? {helpful}|
        <button type="button" onClick={() => showModal(id, questionBody)}>Add Answer</button>
      </div>
      <h2>Q. {questionBody}</h2>
      {/* <Answers showModal={props.showModal} /> */}
      {Object.keys(answers).slice(0, 2).map((answer) => <Answers
        showModal={showModal}
        body={answers[answer].body}
        asker={answers[answer].answerer_name}
        date={answers[answer].date} helpful={answers[answer].helpfulness} id={answers[answer].id}/>).reverse()}
    </div>
  );
};

export default Questions;
