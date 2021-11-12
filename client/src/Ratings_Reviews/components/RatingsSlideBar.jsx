/* eslint-disable max-len */
import React from 'react';
import IndividualSlider from './IndividualSlider.jsx';

const RatingsSlideBar = ({ characteristics, characteristicList }) => (
  <div className="ratings-slide-bar-wrapper" data-testid="ratingsslidebar">
    {Object.keys(characteristics).map((char, index) => <IndividualSlider key={`${index + 1}`} characteristic={char} characteristicDetails={characteristicList[char]} rating={characteristics[char]} />)}
  </div>
);

export default RatingsSlideBar;
