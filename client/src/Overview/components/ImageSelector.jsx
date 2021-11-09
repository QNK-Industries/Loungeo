import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 88vh;
  width: 20vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  margin: 0px 5px 5px 0px;
  position: relative;
  height: 13vh;
  width: 6vw;
  cursor: pointer;
  z-index: 10;
  object-fit: cover;
`;

const UnclickedThumbnail = styled(Thumbnail)`
  box-shadow: 2px 2px 5px black;
`;

const ClickedThumbnail = styled(Thumbnail)`
  box-shadow: 2px 2px 5px yellow;
`;

export default function ImageSelector({
  currentStyle, imageIndex, setImageIndex,
}) {
  if (Object.keys(currentStyle).length === 0) {
    return (<div>Loading Image</div>);
  }

  return (
    <>
      <Div>
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
                  <UnclickedThumbnail src={thumbnail} alt="" onClick={() => setImageIndex(index)} />
                </div>
              )
          );
        })}
      </Div>
    </>
  );
}
