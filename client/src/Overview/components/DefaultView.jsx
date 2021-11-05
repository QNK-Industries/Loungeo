import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 32px 16px 5px 100px;
  height: 520px;
  width: 570px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  float: left;
`;
const Img = styled.img`
  box-shadow: 2px 2px px black;
  position: absolute;
  max-height: 520px;
  max-width: 580px;
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
  box-shadow: 2px 2px 5px black
  margin: 5px 5px 5px 5px;
  position: relative;
  left: 0;
  height: 30px;
  width: 25px;
  cursor: pointer;
  z-index: 10;
`;

const ClickedThumbnail = styled.img`
  box-shadow: 2px 2px 5px yellow;
  margin: 5px 5px 5px 5px;
  position: relative;
  left: 0;
  height: 30px;
  width: 25px;
  cursor: pointer;
  z-index: 10;
`;

export default function DefaultView({ currentStyle }) {
  const [imageIndex, setImageIndex] = useState(0);

  if (Object.keys(currentStyle).length === 0) {
    return (<div>Loading Image</div>);
  }

  return (
    <>
      <Div>
        <Img src={currentStyle.photos[imageIndex].url} alt="" />
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
