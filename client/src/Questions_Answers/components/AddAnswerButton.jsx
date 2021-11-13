import React from 'react';
import ButtonStyling from '../stylings/ButtonStyling.js';

const AddAnswerButton = ({ type, action }) => (
  <ButtonStyling onClick={() => action()}>
    <span>
      {type}
    </span>
  </ButtonStyling>
);

export default AddAnswerButton;
