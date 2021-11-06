import React, { useState } from 'react';
import Answers from './Answers.jsx';


const RightBar = {
  float: 'right',
};

const Questions = ({ modal, id, questionBody, answers, showModal }) => {
  const [questionId] = useState(id);
  return (
    <div>
      <div style={RightBar}>
        <button onClick={() => console.log(modal)}>CLICK MEE</button>
        Helpful? |
        <button type="button" onClick={() => showModal(id, questionBody)}>Add Answer</button>
      </div>
      <h2>Q. {questionBody}</h2>
      {/* <Answers showModal={props.showModal} /> */}
      {Object.keys(answers).map((answer) => <Answers
        showModal={showModal}
        body={answers[answer].body}
        asker={answers[answer].answerer_name}
        date={answers[answer].date} />)}
    </div>
  );
};

export default Questions;
