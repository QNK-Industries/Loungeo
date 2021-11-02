import React from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import BottomSection from './BottomSection.jsx';

const Questions = (props) => (
  <div>
    <h2>Q. {props.question_body}</h2>
    <Answers showModal={props.showModal} />
    <BottomSection />
  </div>
);

Questions.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Questions;
