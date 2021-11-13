/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import utils from '../../Shared/serverUtils.js';
import OverallRating from './OverallRating.jsx';
import {
  RequiredCharacters,
  PhotoUploadContainer,
  ModalContent,
  Title,
  CloseButton,
  FieldContainer,
  InputContainer,
  CharacteristicsContainer,
  PersonalInformationContainer,
  RatingAndRecommend,
  SubmitButton,
} from '../ReviewsStyles.js';
import CharacteristicSelection from './CharacteristicSelection.jsx';

const ReviewForm = ({ product, modalOff, characteristics, characteristicList }) => {
  const [imageBucket, setImageBucket] = useState([]);
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
          <span className="photo-bucket-limit">{imageBucket.length}/5</span>
        </div>
        <div className="photo-bucket-list">
          {imageBucket.map((image, index) => (
            <div className="photo-bucket-upload">
              <img alt="review upload" src={image} />
              <button type="button" onClick={() => removeImage(index)}>X</button>
            </div>
          ))}
          {displayAddImage()}
        </div>
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
    setTimeout(() => {
      modalOff();
      utils.submitReview(newReview);
    }, 2700);
  }

  return (
    <ModalContent>
      <CloseButton onClick={modalOff}>Close</CloseButton>
      <Title>
        <h1>Write Your Review</h1>
        <p>About the <span>{product.name}</span></p>
      </Title>
      <form onSubmit={(event) => handleSubmit(event)}>
        <RatingAndRecommend>
          <OverallRating />
          <div className="do-you-recommend">
            <span>Do you recommend this product? *</span>
            <label className="radio-label" htmlFor="recommend-yes">
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
            Summary: *
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
                required
              />
              {textCount('summary')}
            </InputContainer>
          </label>
        </FieldContainer>
        <FieldContainer>
          <label htmlFor="body-input">
            Review: *
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
          <label className="review-username" htmlFor="review-username">
            Username: *
            <input
              id="review-username"
              name="reviewUsername"
              max-length="60"
              type="text"
              autoComplete="nickname"
              required
            />
            <div>
              <span>For privacy reasons, do not use your full name. *</span>
            </div>
          </label>
          <label htmlFor="review-email">
            Email: *
            <input
              id="review-email"
              name="reviewEmail"
              max-length="120"
              type="email"
              autoComplete="email"
              required
            />
            <div>
              <span>For authentication reasons, you will not be emailed. *</span>
            </div>
          </label>
        </PersonalInformationContainer>
        <SubmitButton>
          <button type="submit">
            <span>Submit Review</span>
            <svg width="24" height="24" fill="#262730" viewBox="0 0 24 24">
              <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" />
            </svg>
          </button>
        </SubmitButton>
      </form>
    </ModalContent>
  );
};

export default ReviewForm;
