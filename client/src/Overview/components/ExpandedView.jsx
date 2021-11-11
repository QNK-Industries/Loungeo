import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
margin: 0px 5px 0px 20px;
height: 90vh;
width: 35vw;
position: relative;
`;

const ZoomDiv = styled.div`
  margin: 10px 10px 10px 100px;
  height: 90vh;
  width: 40vw;
  position: relative;
`;

const Img = styled.img`
  box-shadow: 2px 2px px black;
  position: absolute;
  height: 90vh;
  width: 35vw;
  object-fit: cover;
  cursor: -webkit-zoom-out;
`;

const ZoomImg = styled.img`
  box-shadow: 2px 2px px black;
  position: absolute;
  height: 90vh;
  width: 40vw;
  object-fit: contain;
  cursor: pointer;
  transform: scale(1.5);
  `;
  // transform-origin: ${mouseLocation[0] * 2.5 ** 2}px ${mouseLocation[1] * 2.5 ** 2}px;

const Box = styled.span`
  position: absolute;
  height: 100px;
  width: 100px;
  left: -50px;
  top: -50px;
  cursor: -webkit-zoom-out;
  z-index: 10;
  border: solid 1px red;
`;

export default function ExpandedView({
  currentStyle, setImageClick, imageIndex, imageClick,
}) {
  const [mouseLocation, setMouseLocation] = useState([0, 0]);

  return (
    <span>
      <MainDiv
        data-testid="ExpandedImageDiv"
        onMouseOver={(e) => {
          const offset = e.currentTarget.getBoundingClientRect();
          let x = e.clientX - offset.x - 50 < 0 ? 50 : e.clientX - offset.x;
          x = x - offset.width > -50 ? offset.width - 50 : x;
          let y = e.clientY - offset.y - 50 < 0 ? 50 : e.clientY - offset.y;
          y = y - offset.height > -50 ? offset.height - 50 : y;
          setMouseLocation([x, y]);
        }}
        onPointerMove={(e) => {
          const offset = e.currentTarget.getBoundingClientRect();
          let x = e.clientX - offset.x - 50 < 0 ? 50 : e.clientX - offset.x;
          x = x - offset.width > -50 ? offset.width - 50 : x;
          let y = e.clientY - offset.y - 50 < 0 ? 50 : e.clientY - offset.y;
          y = y - offset.height > -50 ? offset.height - 50 : y;
          setMouseLocation([x, y]);
        }}
        onMouseLeave={() => { setImageClick(!imageClick); }}
      >
        <Img
          src={currentStyle.photos[imageIndex].url}
          alt=""
          onClick={() => { setImageClick(!imageClick); }}
          data-testid="ExpandedImageImg"
        />
        <Box
          data-testid="ExpandedImageBox"
          style={{ transform: `translate(${mouseLocation[0]}px, ${mouseLocation[1]}px)` }}
          onClick={() => { setImageClick(!imageClick); }}
        />
      </MainDiv>
      {/* <ZoomDiv>
        <ZoomImg src={currentStyle.photos[imageIndex].url} />
      </ZoomDiv> */}
    </span>
  );
}
