import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 32px 16px 5px 100px;
  height: 1300px;
  width: 3000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  float: left;
`;

export default function ZoomedView({
  currentStyle, setImageClick, imageIndex,
}) {
  const Img = styled.img`
    box-shadow: 2px 2px px black;
    position: absolute;
    height: 1300px;
    width: 3000px;
    cursor: -webkit-zoom-out
    ;
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
    transform: scale(2.5);
    transform-origin: ${mouseLocation[0] * 2.5 ** 2}px ${mouseLocation[1] * 2.5 ** 2}px;
  `;
  if (Object.keys(currentStyle).length === 0) {
    return (<div>Loading Image</div>);
  }
  return (
    <>
      <Div>
        <Img src={currentStyle.photos[imageIndex].url} alt="" onClick={() => { setImageClick(0); }} />
      </Div>
    </>
  );
}
