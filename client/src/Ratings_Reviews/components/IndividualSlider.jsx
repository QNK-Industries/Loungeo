import React from 'react';
import styled from 'styled-components';

const StyledSlider = styled.div`

`;

const IndividualSlider = ({ characteristic, rating }) => (
  <div>
    {characteristic}
    <StyledSlider>
      Slider Test
    </StyledSlider>
  </div>
);

export default IndividualSlider;
