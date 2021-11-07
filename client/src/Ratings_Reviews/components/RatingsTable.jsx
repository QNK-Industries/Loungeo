/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarBar from './StarBar.jsx';
import StarRating from '../../Shared/StarRating.jsx';

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

const RemoveFilterBox = styled.div`
  width: 150px;
  height: 25px;
  margin: 0 auto;
  cursor: pointer;
  text-align: center;
  padding-top: 5px;
`;

const RatingsTable = ({ ratingData, starAverageData, filter }) => {
  const [selectedStar, setSelectedStar] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });

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

  function clearFilters() {
    setSelectedStar({ 1: false, 2: false, 3: false, 4: false, 5: false });
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

  function removeAllFilters() {
    if (Object.values(selectedStar).indexOf(true) !== -1) {
      return (
        <RemoveFilterBox onClick={() => clearFilters()}>
          <span>Remove Filters X</span>
        </RemoveFilterBox>
      );
    }
    return <RemoveFilterBox />;
  }

  useEffect(() => {
    const filterBucket = [];
    for (let i = 1; i < 6; i += 1) {
      if (selectedStar[i]) filterBucket.push(i);
    }
    filter(filterBucket);
  }, [selectedStar]);

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
        {removeAllFilters()}
      </div>
      <h4 style={{ 'text-align': 'center' }}>
        {displayRecommendedPercent()}% of reviewers would recommend this product
      </h4>
    </div>
  );
};

export default RatingsTable;
