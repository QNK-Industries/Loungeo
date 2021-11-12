import React, { useState } from 'react';
import { HiddenRadio, FormOverallRating } from '../ReviewsStyles.js';
import StarRating from '../../Shared/StarRating.jsx';

const rating = {
  1: 'Poor.',
  2: 'Fair.',
  3: 'Average.',
  4: 'Good!',
  5: 'Great!!!',
};

const OverallRating = () => {
  const [tempStar, setTempStar] = useState(0);
  const [star, setStar] = useState(0);

  function changeHover(index) {
    if (!star) {
      setTempStar(index);
    }
  }

  function displayRating() {
    if (star) {
      return <span>{rating[star]}</span>;
    }
    return null;
  }

  function displayStar() {
    if (star) {
      return (
        <StarRating
          ratingObj={{ average: star }}
          changeHover={(index) => changeHover(index)}
          setStar={(index) => setStar(index)}
          submissionNotSelected
        />
      );
    }
    return (
      <StarRating
        ratingObj={{ average: tempStar }}
        changeHover={(index) => changeHover(index)}
        setStar={(index) => setStar(index)}
        submissionNotSelected
      />
    );
  }

  return (
    <FormOverallRating>
      <span>
        Overall Rating:
      </span>
      <label htmlFor="review-rating">
        <HiddenRadio
          type="radio"
          name="reviewRating"
          id="review-rating"
          required
          checked={!!star}
          onChange={() => {}}
          value={star}
        />
        {displayStar()}
      </label>
      {displayRating()}
    </FormOverallRating>
  );
};

export default OverallRating;
