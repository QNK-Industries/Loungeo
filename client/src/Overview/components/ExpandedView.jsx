import React from 'react';
import styled from 'styled-components';

const Box = styled.span`
  position: absolute;
  height: 100px;
  width: 100px;
  cursor: pointer;
  z-index: 10;
`;

const Div = styled.div`
  margin: 0px 5px 0px 20px;
  height: 90vh;
  width: 35vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover ${Box} {
    color: blue;
    border: 2px solid blue;
    transform-origin: 
  }
`;

const Img = styled.img`
  box-shadow: 2px 2px px black;
  position: absolute;
  height: 90vh;
  width: 35vw;
  object-fit: cover;
  cursor: -webkit-zoom-out;
  animation-name: custom;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;
`;

export default function ExpandedView({
  currentStyle, setImageClick, imageIndex, imageClick,
}) {
  return (
    <>
      <Div>
        <Img src={currentStyle.photos[imageIndex].url} alt="" onClick={() => { setImageClick(!imageClick); }} />
        <Box></Box>
      </Div>
    </>
  );
}
