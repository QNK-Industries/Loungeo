import React, { useState } from 'react';
import styled from 'styled-components';
import StarRating from '../../Shared/StarRating.jsx';

const rating = {
  1: 'Poor.',
  2: 'Fair.',
  3: 'Average.',
  4: 'Good!',
  5: 'Great!!!',
};

const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 0;
  margin: 0;
`;

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
    <div>
      <span>
        Overall Rating:
      </span>
      <label htmlFor="review-rating" style={{ position: 'relative' }}>
        <HiddenRadio
          type="radio"
          name="reviewRating"
          id="review-rating"
          required
          checked={!!star}
          value={star}
        />
        {displayStar()}
      </label>
      {displayRating()}
    </div>
  );
};

export default OverallRating;
