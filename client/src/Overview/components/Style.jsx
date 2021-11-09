import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  margin: 5px 5px 10px 10px;
  position: relative;
  height: 7vh;
  width: 3vw;
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

export default function Style({ style, currentStyle, setCurrentStyle }) {
  return (
    style.style_id === currentStyle.style_id
      ? (
        <span key={style.style_id} id={style.style_id} style={{ position: 'relative', display: 'inline-flex' }}>
          <ClickedThumbnail src={style.photos[0].thumbnail_url} alt="" />
        </span>
      ) : (
        <span onClick={() => setCurrentStyle(style)} key={style.style_id} id={style.style_id} style={{ position: 'relative', display: 'inline-flex' }}>
          <UnclickedThumbnail src={style.photos[0].thumbnail_url} alt="" />
        </span>
      )
  );
}
