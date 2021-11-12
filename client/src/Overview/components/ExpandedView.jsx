import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
height: 90vh;
width: 35vw;
position: relative;
`;

const Img = styled.img`
  box-shadow: 2px 2px 5px black;
  position: absolute;
  height: 90vh;
  width: 35vw;
  object-fit: cover;
  cursor: -webkit-zoom-out;
`;

const Box = styled.span`
  position: absolute;
  height: 36vh;
  width: 14vw;
  top: -18vh;
  left: -7vw;
  cursor: -webkit-zoom-out;
  z-index: 10;
  border: solid 1px white;
  opacity: .4;
  background-color: white;
`;

export default function ExpandedView({
  currentStyle, setImageClick, imageIndex, imageClick, mouseLocation, setMouseLocation,
}) {
  const zoomHandler = (e) => {
    const offset = e.currentTarget.getBoundingClientRect();
    const boxOffsetX = offset.width / 5;
    const boxOffsetY = offset.height / 5;
    let x = e.clientX - offset.x - boxOffsetX < 0 ? boxOffsetX : e.clientX - offset.x;
    x = x - offset.width > -boxOffsetX ? offset.width - boxOffsetX : x;
    let y = e.clientY - offset.y - boxOffsetY < 0 ? boxOffsetY : e.clientY - offset.y;
    y = y - offset.height > -boxOffsetY ? offset.height - boxOffsetY : y;
    setMouseLocation([x, y]);
  };
  return (
    <span>
      <MainDiv
        data-testid="ExpandedImageDiv"
        onMouseOver={zoomHandler}
        onPointerMove={zoomHandler}
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
    </span>
  );
}
