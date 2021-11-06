/* eslint-disable max-len */
import React from 'react';
import IndividualSlider from './IndividualSlider.jsx';

const RatingsSlideBar = ({ characteristics, characteristicList }) => (
  <div>
    {Object.keys(characteristics).map((char) => <IndividualSlider characteristic={char} rating={characteristicList[char]} />)}
  </div>
);

export default RatingsSlideBar;
