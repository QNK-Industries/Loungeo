import React from 'react';
import Answers from './Answers.jsx';

const RightBar = {
  float: 'right',
};

const Questions = ({ question_body, answers, showModal }) => (
  <div>
    <div style={RightBar}>
      Helpful? |
      <button type="button" onClick={showModal}>Add Answer</button>
    </div>
    <h2>Q. {question_body}</h2>
    {/* <Answers showModal={props.showModal} /> */}
    {Object.keys(answers).map((answer) => <Answers showModal={showModal} body={answers[answer].body} asker={answers[answer].answerer_name} date={answers[answer].date} />)}

  </div>
);

export default Questions;
