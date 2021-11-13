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
      <h5>
        {characteristic}
      </h5>
      <StyledSlider>
        {displayBreakpoints()}
        <RatingDot position={(rating.value - 1) * 25} />
      </StyledSlider>
      <SliderDetailText>
        <div className="slider-text-left">
          <small>
            {characteristicDetails[1]}
          </small>
        </div>
        <div className="slider-text-center">
          <small>
            {characteristicDetails[3]}
          </small>
        </div>
        <div className="slider-text-right">
          <small>
            {characteristicDetails[5]}
          </small>
        </div>
      </SliderDetailText>
    </div>
  );
};

export default IndividualSlider;
