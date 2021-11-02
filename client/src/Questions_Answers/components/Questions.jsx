import React from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import BottomSection from './BottomSection.jsx';

const Questions = ({ question_body, answers, showModal }) => (
  <div>
    <h2>Q. {question_body}</h2>
    {/* <Answers showModal={props.showModal} /> */}
    {Object.keys(answers).map((answer) => <Answers showModal={showModal} body={answers[answer].body} />)}
    <BottomSection />
  </div>
);

Questions.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Questions;
