import React from 'react';
import PropTypes from 'prop-types';

const Answers = ({ showModal }) => (
  <div>
    Placeholder |
    <span onClick={showModal}>Add Answer</span>
    <br />
    A. This is an answer dawg
    <br />
    By User, Date | Placeholder | Report
  </div>
);

Answers.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Answers;
