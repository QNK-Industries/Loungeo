/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import styled from 'styled-components';
import CharacteristicSelection from './CharacteristicSelection.jsx';

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fefefe;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid yellow;
  width: 70vw;
  max-width: 1200px;
  height: 60vh;
  z-index: 2;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Title = styled.div`
  text-align: center;
`;

const RatingAndRecommend = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CharacteristicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const FieldContainer = styled.div`
margin-bottom: 10px;

& label {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
`;

const InputContainer = styled.div`
  width: 800px;
  height: ${(props) => (props.inputType === 'body' ? '100px' : '25px')};
  margin-left: 10px;
  position: relative;

  & input {
    width: 800px;
    height: 25px;
    position: relative;
  }

  & textarea {
    width: 800px;
    height: 100px;
    resize: none;
    position: relative;
  }
`;

const RequiredCharacters = styled.div`
  position: absolute;
  right: 5px;
  bottom: 0;
`;

const ReviewForm = ({ product, modalOff, characteristics, characteristicList }) => {
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');

  function textCount(type) {
    if (type === 'body') {
      return (
        <RequiredCharacters>
          <span>{body.length}/1000</span>
        </RequiredCharacters>
      );
    }
    return (
      <RequiredCharacters>
        <span>{summary.length}/60</span>
      </RequiredCharacters>
    );
  }

  function displayRemainingCharacters() {
    if (body.length < 50) {
      return (
        <div style={{ width: '70%' }}>
          <span>Minimum required characters left: [{50 - body.length}]</span>
        </div>
      );
    }
    return (
      <div style={{ width: '70%' }}>
        <span>Minimum reached.</span>
      </div>
    );
  }

  return (
    <ModalContent>
      <CloseButton onClick={modalOff}>Close</CloseButton>
      <Title>
        <h1>Write Your Review</h1>
        <p>About the {product.name}</p>
      </Title>
      <form>
        <RatingAndRecommend>
          <div>
            <span>*Overall Rating: *****</span>
          </div>
          <div>
            <span>*Do you recommend this product?</span>
            <label htmlFor="recommend-yes" required>
              <input id="recommend-yes" type="radio" name="recommend-product" />
              Yes
            </label>
            <label htmlFor="recommend-no" required>
              <input id="recommend-no" type="radio" name="recommend-product" />
              No
            </label>
          </div>
        </RatingAndRecommend>
        <CharacteristicsContainer>
          {Object.keys(characteristics).map((characteristic) => (
            <CharacteristicSelection
              type={characteristic}
              details={characteristicList[characteristic]}
            />
          ))}
        </CharacteristicsContainer>
        <FieldContainer>
          <label htmlFor="summary-input">
            Summary:
            <InputContainer inputType="summary">
              <input
                type="text"
                id="summary-input"
                name="summary-input"
                placeholder="Example: Best purchase ever!"
                maxLength="60"
                onChange={(event) => {
                  setSummary(event.target.value);
                }}
              />
              {textCount('summary')}
            </InputContainer>
          </label>
        </FieldContainer>
        <FieldContainer>
          <label htmlFor="body-input">
            *Review:
            <InputContainer inputType="body">
              <textarea
                id="body-input"
                name="body-input"
                placeholder="Why did you like the product or not?"
                minLength="50"
                maxLength="1000"
                onChange={(event) => {
                  setBody(event.target.value);
                }}
                required
              />
              {textCount('body')}
            </InputContainer>
            {displayRemainingCharacters()}
          </label>
        </FieldContainer>
      </form>
    </ModalContent>
  );
};

export default ReviewForm;
