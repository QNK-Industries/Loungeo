import React, { useState } from 'react';
import Answers from './Answers.jsx';

const RightBar = {
  float: 'right',
};

const Questions = ({ modal, id, questionBody, answers, showModal }) => {
  const [questionId, setId] = useState(id);
  return (
    <div>
      <div style={RightBar}>
        Helpful? |
        <button type="button" onClick={showModal}>Add Answer</button>
      </div>
      <h2>Q. {questionBody}</h2>
      {/* <Answers showModal={props.showModal} /> */}
      {Object.keys(answers).map((answer) => <Answers
        showModal={showModal}
        body={answers[answer].body}
        asker={answers[answer].answerer_name}
        date={answers[answer].date} />)}
        {modal
        ? null
        : <h1>MODAL!!!</h1>}
    </div>
  );
};

export default Questions;
