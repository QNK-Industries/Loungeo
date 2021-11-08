import React, { useState } from 'react';
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

  function displayRating() {
    if (star) {
      return <span>{rating[star]}</span>;
    }
    return null;
  }

  function displayStar() {
    if (star) {
      return <StarRating ratingObj={{ average: star }} />;
    }
    return <StarRating ratingObj={{ average: tempStar }} />;
  }

  return (
    <div>
      <span>
        Overall Rating:
      </span>
      {displayStar()}
      {displayRating()}
    </div>
  );
};

export default OverallRating;
