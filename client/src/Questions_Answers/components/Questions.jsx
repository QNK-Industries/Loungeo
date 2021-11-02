import React from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers.jsx';
import BottomSection from './BottomSection.jsx';

const Questions = ({ showModal }) => (
  <div>
    <h2>Q. This is a question fam</h2>
    <Answers showModal={showModal} />
    <BottomSection />
  </div>
);

Questions.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Questions;
