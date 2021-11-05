/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import starAverage from '../../Shared/StarAverage.jsx';
import StarBar from './StarBar.jsx';
import StarRating from '../../Shared/StarRating.jsx';
import utils from '../utils.js';

const ReveiwScoreHeader = styled.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & h1 {
    font-size: 36px;
    margin: .5em;
  }

  & .review-star-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const RatingsTable = ({ mainProduct }) => {
  const [ratingData, setRatingData] = useState({});
  const [starAverageData, setStarAverageData] = useState({});
  const [selectedStar, setSelectedStar] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });

  useEffect(() => utils.getRating(mainProduct.id, (results) => {
    setRatingData(results);
    setStarAverageData(starAverage(results.ratings));
  }), []);

  function displayRecommendedPercent() {
    return Math.floor((Number(ratingData.recommended.true) / starAverageData.total) * 100);
  }

  function isSelected(star) {
    return selectedStar[star];
  }

  function toggleSelected(star) {
    const stateCopy = { ...selectedStar };
    stateCopy[star] = !selectedStar[star];
    setSelectedStar(stateCopy);
  }

  function displayStarBars() {
    const bars = [];
    for (let i = 5; i > 0; i -= 1) {
      let ratingCount = 0;
      if (ratingData.ratings[i]) ratingCount = ratingData.ratings[i];
      bars.push(<StarBar key={i} stars={i} amount={ratingCount} total={starAverageData.total} selected={isSelected(i)} toggleSelected={(star) => toggleSelected(star)} />);
    }
    return bars;
  }

  if (starAverageData.total) {
    return (
      <div>
        <ReveiwScoreHeader>
          <h1>
            {starAverageData.average}
          </h1>
          <div className="review-star-header">
            <StarRating ratingObj={starAverageData} />
            <span>
              {starAverageData.total === 1 ? '1 review' : `${starAverageData.total} reviews`}
            </span>
          </div>
        </ReveiwScoreHeader>
        <div className="rating-sorter">
          {displayStarBars()}
        </div>
        <h4 style={{ 'text-align': 'center' }}>
          {displayRecommendedPercent()}% of reviewers would recommend this product
        </h4>
      </div>
    );
  }
  return 'Loading';
};

export default RatingsTable;
