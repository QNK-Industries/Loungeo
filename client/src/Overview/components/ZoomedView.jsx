import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 90vh;
  width: 35vw;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Img = styled.img`
  box-shadow: 2px 2px 5px black;
  position: absolute;
  height: 90vh;
  width: 35vw;
  object-fit: cover;
  cursor: -webkit-zoom-out;
  transform: scale(2.5);
  overflow: show;
`;

export default function ZoomedView({
  currentStyle, imageIndex, mouseLocation,
}) {
  //

  if (Object.keys(currentStyle).length === 0) {
    return (<div>Loading Image</div>);
  }
  return (
    <>
      <Div>
        <Img
          src={currentStyle.photos[imageIndex].url}
          alt=""
          style={{ transformOrigin: `${mouseLocation[0]}px ${mouseLocation[1]}px` }}
        />
      </Div>
    </>
  );
}
