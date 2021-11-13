import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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

const Button = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 4.5vh;
  cursor: pointer;
  z-index: 10;
  color: #F8F0FB;
  -webkit-text-stroke: 1vh white;
  opacity: 50%;
  &:hover {
    opacity: 100;
  }
  `;

const LeftButton = styled(Button)`
  left: 0%;
  bottom: 50%;
`;

const RightButton = styled(Button)`
  right: 0;
  bottom: 50%;
`;

export default function DefaultView({
  currentStyle, setImageClick, imageIndex, setImageIndex, imageClick,
}) {
  let button = null;
  const styleImgCount = Object.keys(currentStyle).length;

  if (styleImgCount === 0) {
    return (<div>Loading Image</div>);
  }

  if (imageIndex === 0) {
    button = <RightButton type="button" icon={faArrowRight} onClick={() => { setImageIndex(imageIndex + 1); }} />;
  } else if (imageIndex === currentStyle.photos.length - 1) {
    button = <LeftButton type="button" icon={faArrowLeft} onClick={() => { setImageIndex(imageIndex - 1); }} />;
  } else {
    button = (
      <>
        <RightButton type="button" icon={faArrowRight} onClick={() => { setImageIndex(imageIndex + 1); }} />
        <LeftButton type="button" icon={faArrowLeft} onClick={() => { setImageIndex(imageIndex - 1); }} />
      </>
    );
  }
  return (
    <>
      <Div data-testid="DefaultImageDiv">
        {currentStyle.photos.length > 1 ? button : null}
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
