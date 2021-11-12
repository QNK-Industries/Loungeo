/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import styled from 'styled-components';
import utils from '../../Shared/serverUtils.js';
import OverallRating from './OverallRating.jsx';
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
  width: ${(props) => (props.submitted ? '30vw' : '70vw')};
  max-width: 1200px;
  height: ${(props) => (props.submitted ? '10vw' : '60vw')};;
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

& remaining-characters {
  width: 70%;
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

const PhotoUploadContainer = styled.div`
  display: flex;
  justify-content: center;

  & img {
    max-width: 100px;
  }

  & .photo-bucket {
    display: flex;
    flex-direction: column;
  }
`;

const PersonalInformationContainer = styled.div`
  display: flex;
  justify-content: space-around;

  $ label {
    display: flex;
    flex-wrap: wrap;
  }

  & input {
    margin-left: 5px;
    width: 300px;
  }

  & div {
    width: 100%;
    text-align: end;
  }
`;

const ReviewForm = ({ product, modalOff, characteristics, characteristicList }) => {
  const [imageBucket, setImageBucket] = useState([]);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [justSubmittedForm, setJustSubmittedForm] = useState(false);

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
        <div className="remaining-characters">
          <span>Minimum required characters left: [{50 - body.length}]</span>
        </div>
      );
    }
    return (
      <div className="remaining-characters">
        <span>Minimum reached.</span>
      </div>
    );
  }

  function checkFiles(event) {
    setImageBucket([...imageBucket, URL.createObjectURL(event.target.files[0])]);
    event.target.value = '';
  }

  function displayAddImage() {
    if (imageBucket.length < 5) {
      return (
        <input
          type="file"
          name="reviewImages"
          multiple="multiple"
          onChange={(event) => checkFiles(event)}
        />
      );
    }
    return null;
  }

  function removeImage(index) {
    const newBucket = [...imageBucket];
    newBucket.splice(index, 1);
    setImageBucket(newBucket);
  }

  function displayImageBucket() {
    return (
      <PhotoUploadContainer>
        <div className="photo-bucket">
          <span>Upload Photos:</span>
          <span>{imageBucket.length}/5</span>
        </div>
        {imageBucket.map((image, index) => (
          <div>
            <img alt="review upload" src={image} />
            <button type="button" onClick={() => removeImage(index)}>X</button>
          </div>
        ))}
        {displayAddImage()}
      </PhotoUploadContainer>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newReview = {
      product_id: product.id,
      rating: Number(event.target.reviewRating.value),
      summary: summary.length === 0 ? null : summary,
      body,
      recommend: !!event.target.recommendProduct.value,
      name: event.target.reviewUsername.value,
      email: event.target.reviewEmail.value,
      photos: imageBucket,
      characteristics: {},
    };
    Object.keys(characteristics).forEach((element) => {
      newReview.characteristics[characteristics[element].id] = Number(event.target[element].value);
    });
    setJustSubmittedForm(true);
    setTimeout(() => {
      modalOff();
      utils.submitReview(newReview);
    }, 1000);
  }

  if (justSubmittedForm) {
    return (
      <ModalContent submitted>
        <Title>
          <h1>
            Thank you for your submission!
          </h1>
        </Title>
      </ModalContent>
    );
  }

  return (
    <ModalContent>
      <CloseButton onClick={modalOff}>Close</CloseButton>
      <Title>
        <h1>Write Your Review</h1>
        <p>About the {product.name}</p>
      </Title>
      <form onSubmit={(event) => handleSubmit(event)}>
        <RatingAndRecommend>
          <OverallRating />
          <div>
            <span>*Do you recommend this product?</span>
            <label htmlFor="recommend-yes">
              <input id="recommend-yes" type="radio" name="recommendProduct" value="true" required />
              Yes
            </label>
            <label htmlFor="recommend-no">
              <input id="recommend-no" type="radio" name="recommendProduct" value="false" />
              No
            </label>
          </div>
        </RatingAndRecommend>
        <CharacteristicsContainer>
          {Object.keys(characteristics).map((characteristic, index) => (
            <CharacteristicSelection
              key={`characteristic-${index + 1}`}
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
                name="summaryInput"
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
                name="bodyInput"
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
        {displayImageBucket()}
        <PersonalInformationContainer>
          <label htmlFor="review-username">
            *Username:
            <input
              id="review-username"
              name="reviewUsername"
              max-length="60"
              type="text"
              autoComplete="nickname"
              required
            />
            <div>
              <span>For privacy reasons, do not use your full name.</span>
            </div>
          </label>
          <label htmlFor="review-email">
            *Email:
            <input
              id="review-email"
              name="reviewEmail"
              max-length="120"
              type="email"
              autoComplete="email"
              required
            />
            <div>
              <span>For authentication reasons, you will not be emailed.</span>
            </div>
          </label>
        </PersonalInformationContainer>
        <input type="submit" value="Submit Review" />
      </form>
    </ModalContent>
  );
};

export default ReviewForm;
