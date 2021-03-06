import React from 'react';
import styled from 'styled-components';

const StyleSpan = styled.span`
  margin: 3vh 3vh 0vh 0vh;
  position: relative;
  display: inline-flex;
`;

const Thumbnail = styled.img`
  position: relative;
  height: 10vh;
  width: 5vw;
  cursor: pointer;
  z-index: 10;
  object-fit: cover;
`;

const UnclickedThumbnail = styled(Thumbnail)`
  box-shadow: 2px 2px 5px darkgrey;
`;

const ClickedThumbnail = styled(Thumbnail)`
  box-shadow: 3px 3px 6px black;
  cursor: auto;
`;

export default function Style({
  style, currentStyle, setCurrentStyle, setImageIndex,
}) {
  return (
    style.style_id === currentStyle.style_id
      ? (
        <StyleSpan key={style.style_id} id={style.style_id}>
          <ClickedThumbnail src={style.photos[0].thumbnail_url} alt="" />
        </StyleSpan>
      ) : (
        <StyleSpan key={style.style_id} id={style.style_id}>
          <UnclickedThumbnail
            src={style.photos[0].thumbnail_url}
            alt=""
            onClick={() => { setCurrentStyle(style); setImageIndex(0); }}
            onKeyPress={() => { setCurrentStyle(style); setImageIndex(0); }}
          />
        </StyleSpan>
      )
  );
}
