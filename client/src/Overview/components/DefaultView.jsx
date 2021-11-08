import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 90vh;
  width: 45vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: left;
  background-color: grey;
`;
const Img = styled.img`
  box-shadow: 2px 2px px black;
  position: absolute;
  max-height: 90vh;
  max-width: 40vw;
  cursor: pointer;
  animation-name: custom;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.2s;
  @keyframes custom {
    0% {
      opacity: 0.7;
      filter: blur(14px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
`;

const Thumbnail = styled.img`
margin: 5px 5px 5px 5px;
right: 550%;
position: relative;
height: 30px;
width: 25px;
cursor: pointer;
z-index: 10;
box-shadow: 2px 2px 5px black;
`;

const ClickedThumbnail = styled.img`
margin: 5px 5px 5px 5px;
right: 550%;
position: relative;
height: 30px;
width: 25px;
cursor: pointer;
z-index: 10;
box-shadow: 2px 2px 5px yellow;
`;

const Button = styled.span`
  position: absolute;
  height: 10px;
  width: 25px;
  cursor: pointer;
  z-index: 10;
  color: grey;
  font-size: 40px;
  -webkit-text-stroke: 2px white;
`;

const LeftButton = styled(Button)`
  left: 1%;
  bottom: 50%;
`;

const RightButton = styled(Button)`
  right: 4%;
  bottom: 50%;
`;

export default function DefaultView({
  currentStyle, setImageClick, imageIndex, setImageIndex,
}) {
  let button = null;

  if (Object.keys(currentStyle).length === 0) {
    return (<div>Loading Image</div>);
  }

  if (imageIndex === 0) {
    button = <RightButton type="button" onClick={() => { setImageIndex(imageIndex + 1); }}>&#8594;</RightButton>;
  } else if (imageIndex === currentStyle.photos.length - 1) {
    button = <LeftButton type="button" onClick={() => { setImageIndex(imageIndex - 1); }}>&#8592;</LeftButton>;
  } else {
    button = (
      <>
        <LeftButton type="button" onClick={() => { setImageIndex(imageIndex - 1); }}>&#8592;</LeftButton>
        <RightButton type="button" onClick={() => { setImageIndex(imageIndex + 1); }}>&#8594;</RightButton>
      </>
    );
  }
  console.log(currentStyle.photos);
  return (
    <>
      <Div>
        {button}
        <Img src={currentStyle.photos[imageIndex].url} alt="" onClick={() => { setImageClick(1); }} />
        {currentStyle.photos.map((image, index) => {
          const thumbnail = image.thumbnail_url;
          return (
            imageIndex === index
              ? (
                <div>
                  <ClickedThumbnail src={thumbnail} alt="" />
                </div>
              ) : (
                <div>
                  <Thumbnail src={thumbnail} alt="" onClick={() => setImageIndex(index)} />
                </div>
              )
          );
        })}
      </Div>
    </>
  );
}
