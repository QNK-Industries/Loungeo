import React from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import BottomSection from './BottomSection.jsx';

const Questions = (props) => (
  <div>
    <h2>Q. {props.question_body}</h2>
    {/* <Answers showModal={props.showModal} /> */}
    {Object.keys(props.answers).map((answer) => <Answers showModal={props.showModal} body={answer.body}/>)}
    <BottomSection />
  </div>
);

Questions.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Questions;
