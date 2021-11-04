import React from 'react';

export default function Style({ style, currentStyle, setCurrentStyle }) {
  return (
    style.style_id === currentStyle.style_id
      ? (
        <span key={style.style_id} id={style.style_id} style={{ position: 'relative', display: 'inline-flex' }}>
          <img
            src={style.photos[0].thumbnail_url}
            alt=""
            style={{
              width: '50px', height: '50px', padding: '10px', position: 'relative',
            }}/>
            <div style={{
            position: 'absolute', left: '80%', top: '20%', transform: 'translate(-50%,-50%)', zIndex: 1, color: 'red',
          }}
          >&#10003;
          </div>
        </span>
      ) : (
        <span onClick={() => setCurrentStyle(style)} key={style.style_id} id={style.style_id}>
          <img src={style.photos[0].thumbnail_url} alt="" style={{ width: '50px', height: '50px', padding: '10px' }} />
        </span>
      )
  );
}
