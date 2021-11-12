import React from 'react';
import { SelectionContainer, StyledLabel } from '../ReviewsStyles.js';

const CharacteristicSelection = ({ type, details }) => {
  function creatAllRadios() {
    return Object.keys(details).map((index) => (
      <StyledLabel key={`label-${type}-${index}`} htmlFor={`radio-${type.toLowerCase()}-${index}`}>
        <input id={`radio-${type.toLowerCase()}-${index}`} type="radio" name={`${type}`} value={index} required />
        <span>{details[index]}</span>
      </StyledLabel>
    ));
  }

  return (
    <SelectionContainer>
      <div>
        <h3>*{type}:</h3>
      </div>
      {creatAllRadios()}
    </SelectionContainer>
  );
};

export default CharacteristicSelection;
