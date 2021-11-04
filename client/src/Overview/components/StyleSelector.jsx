import React from 'react';
import Style from './Style.jsx';

// const GH_TOKEN = require('../../../tokens.js');

export default function StyleSelector({ styles, currentStyle, setCurrentStyle }) {
  return (
    <>
      <div>---------</div>
      <div id={currentStyle.style_id}>{currentStyle.name}</div>
      {styles.map((style, index) => (
        (index + 1) % 4 === 0
          ? (
            <>
              <Style style={style} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />
              <br />
            </>
          )
          : <Style style={style} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} />
      ))}
    </>
  );
}
