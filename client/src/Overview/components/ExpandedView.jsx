import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 32px 16px 5px 100px;
  height: 520px;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  float: left;
`;
const Img = styled.img`
  box-shadow: 2px 2px px black;
  position: absolute;
  height: 520px;
  width: 800px;
  cursor: -webkit-zoom-in;
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

const Icon = styled.span`
  margin: 5px 5px 5px 5px;
  position: relative;
  left: 0;
  height: 20px;
  width: 20px;
  cursor: pointer;
  z-index: 10;
`;

const ClickedIcon = styled.span`
  margin: 5px 5px 5px 5px;
  color: red;
  position: relative;
  left: 0;
  height: 20px;
  width: 20px;
  cursor: pointer;
  z-index: 10;
`;

const Button = styled.span`
  margin: 5px 5px 5px 5px;
  position: relative;
  left: 0;
  height: 10px;
  width: 25px;
  cursor: pointer;
  z-index: 10;
  color: grey;
  font-size: 40px;
  -webkit-text-stroke: 2px white;
`;

export default function ExpandedView({
  currentStyle, setImageClick, imageIndex, setImageIndex, setMouseLocation,
}) {
  let button = null;

  if (Object.keys(currentStyle).length === 0) {
    return (<div>Loading Image</div>);
  }

  if (imageIndex === 0) {
    button = <Button type="button" onClick={() => { setImageIndex(imageIndex + 1); }}>&#8594;</Button>;
  } else if (imageIndex === currentStyle.photos.length - 1) {
    button = <Button type="button" onClick={() => { setImageIndex(imageIndex - 1); }}>&#8592;</Button>;
  } else {
    button = (
      <>
        <Button type="button" onClick={() => { setImageIndex(imageIndex - 1); }}>&#8592;</Button>
        <Button type="button" onClick={() => { setImageIndex(imageIndex + 1); }}>&#8594;</Button>
      </>
    );
  }

  return (
    <>
      <Div>
        {button}
        <Img
          src={currentStyle.photos[imageIndex].url}
          alt=""
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setImageClick(2);
            setMouseLocation([e.clientX - rect.left, e.clientY - rect.top]);
            console.log('x', e.clientX, rect.left);
            console.log('y', e.clientY, rect.top);
          }}
        />
        {[...Array(Object.keys(currentStyle).length - 1)].map((image, index) => (
          imageIndex === index
            ? (
              <div>
                <ClickedIcon alt="">&#9679;</ClickedIcon>
              </div>
            ) : (
              <div>
                <Icon alt="" onClick={() => setImageIndex(index)}>&#9679;</Icon>
              </div>
            )
        ))}
      </Div>
    </>
  );
}
