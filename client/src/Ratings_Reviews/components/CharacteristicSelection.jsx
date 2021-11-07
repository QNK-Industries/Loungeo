import React from 'react';
import styled from 'styled-components';

const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75px;
  width: 45%;

  & label, div {
    width: 16.66%;
  }

  & label {
    align-items: center;
    font-size: 12px;
  }

  & div {
    text-align: end;
    parring-right: 5px;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 20px;

  & input {
    margin: 3px 3px 0 3px;
  }
`;

const CharacteristicSelection = ({ type, details }) => {
  function creatAllRadios() {
    return Object.keys(details).map((index) => (
      <StyledLabel htmlFor={`radio-${type.toLowerCase()}-${index}`}>
        <input id={`radio-${type.toLowerCase()}-${index}`} type="radio" name={`${type}`} required />
        <span>{details[index]}</span>
      </StyledLabel>
    ));
  }

  return (
    <SelectionContainer>
      <div>
        <span style={{ 'line-height': '75px' }}>*{type}:</span>
      </div>
      {creatAllRadios()}
    </SelectionContainer>
  );
};

export default CharacteristicSelection;
