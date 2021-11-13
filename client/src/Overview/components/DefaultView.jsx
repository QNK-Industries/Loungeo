import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 90vh;
  width: 35vw;
  position: relative;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  box-shadow: 2px 2px 5px darkgrey;
  position: absolute;
  height: 90vh;
  width: 35vw;
  object-fit: cover;
  cursor: -webkit-zoom-in;
`;

const Button = styled.span`
  position: absolute;
  height: 10px;
  width: 10px;
  cursor: pointer;
  z-index: 10;
  color: rgb(104,104,104);
  font-size: 40px;
  -webkit-text-stroke: 1px white;
`;

const LeftButton = styled(Button)`
  left: 0%;
  bottom: 50%;
`;

const RightButton = styled(Button)`
  right: 4.2%;
  bottom: 50%;
`;

export default function DefaultView({
  currentStyle, setImageClick, imageIndex, setImageIndex, imageClick,
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
  return (
    <>
      <Div data-testid="DefaultImageDiv">
        {button}
        <Img
          data-testid="DefaultImageImg"
          src={currentStyle.photos[imageIndex].url}
          alt=""
          onClick={() => { setImageClick(!imageClick); }}
        />
      </Div>
    </>
  );
}
