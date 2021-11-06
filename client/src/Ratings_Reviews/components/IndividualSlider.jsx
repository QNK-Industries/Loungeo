import React from 'react';
import styled from 'styled-components';

const StyledSlider = styled.div`
  width: 300px;
  border-bottom: 5px solid black;
  margin: 10px 0;
  position: relative;
`;

const StyleDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  left: ${(props) => props.position}%;
  transform: translateY(-25%) translateX(-25%);
`;

const RatingDot = styled.div`
  width: 15px;
  height: 15px;
  background-color: purple;
  position: absolute;
  left: ${(props) => props.position}%;
  transform: translateY(-25%) translateX(-25%) rotate(45deg);
`;

const IndividualSlider = ({ characteristic, characteristicDetails, rating }) => {
  function displayBreakpoints() {
    const breakpointBucket = [];
    for (let i = 0; i < 5; i += 1) {
      breakpointBucket.push(<StyleDot position={i * 25} />);
    }
    return breakpointBucket;
  }

  return (
    <div style={{ 'margin-bottom': '20px' }}>
      <span>
        {characteristic}
      </span>
      <StyledSlider>
        {displayBreakpoints()}
        <RatingDot position={(rating.value - 1) * 25} />
      </StyledSlider>
      <div style={{ display: 'flex', 'justify-content': 'space-between', width: '300px' }}>
        <span style={{ width: '33%', 'text-align': 'left' }}>
          {characteristicDetails[1]}
        </span>
        <span style={{ width: '33%', 'text-align': 'center' }}>
          {characteristicDetails[3]}
        </span>
        <span style={{ width: '33%', 'text-align': 'right' }}>
          {characteristicDetails[5]}
        </span>
      </div>
    </div>
  );
};

export default IndividualSlider;
