import React from 'react';
import {
  StyledSlider,
  StyleDot,
  RatingDot,
  SliderDetailText,
} from '../ReviewsStyles.js';

const IndividualSlider = ({ characteristic, characteristicDetails, rating }) => {
  function displayBreakpoints() {
    const breakpointBucket = [];
    for (let i = 0; i < 5; i += 1) {
      breakpointBucket.push(<StyleDot key={`dot-${i + 1}`} position={i * 25} />);
    }
    return breakpointBucket;
  }

  return (
    <div className="slidebar-section">
      <span>
        {characteristic}
      </span>
      <StyledSlider>
        {displayBreakpoints()}
        <RatingDot position={(rating.value - 1) * 25} />
      </StyledSlider>
      <SliderDetailText>
        <span position="left">
          {characteristicDetails[1]}
        </span>
        <span position="center">
          {characteristicDetails[3]}
        </span>
        <span position="right">
          {characteristicDetails[5]}
        </span>
      </SliderDetailText>
    </div>
  );
};

export default IndividualSlider;
