import React from 'react';
import PropTypes from 'prop-types';

const Answers = (props) => (
  <div>
    Placeholder |
    <button type="button" onClick={props.showModal}>Add Answer</button>
    <br />
    A. {props.body}
    <br />
    By User, Date | Placeholder | Report
  </div>
);

export default Answers;
