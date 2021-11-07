import React, { useState } from 'react';
import Answers from './Answers.jsx';

const RightBar = {
  float: 'right',
};

const Questions = ({ modal, id, questionBody, answers, showModal }) => {
  const [questionId, setQuestionId] = useState(id);
  return (
    <div>
      <div style={RightBar}>
        Helpful? |
        <button type="button" onClick={() => showModal(id, questionBody)}>Add Answer</button>
      </div>
      <h2>Q. {questionBody}</h2>
      {/* <Answers showModal={props.showModal} /> */}
      {Object.keys(answers).slice(0, 2).map((answer) => <Answers
        showModal={showModal}
        body={answers[answer].body}
        asker={answers[answer].answerer_name}
        date={answers[answer].date} helpful={answers[answer].helpfulness} />).reverse()}
    </div>
  );
};

export default Questions;
