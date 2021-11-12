import React from 'react';
import Style from './Style.jsx';

// const GH_TOKEN = require('../../../tokens.js');

export default function StyleSelector({
  styles, currentStyle, setCurrentStyle, setImageIndex,
}) {
  return (
    <>
      <div>---------</div>
      <div id={currentStyle.style_id}>{currentStyle.name}</div>
      {styles.map((style, index) => (
        (index + 1) % 4 === 0
          ? (
            <span key={index.toString()}>
              <Style
                style={style}
                currentStyle={currentStyle}
                setCurrentStyle={setCurrentStyle}
                setImageIndex={setImageIndex}
                key={index.toString()}
              />
              <br />
            </span>
          )
          : (
            <Style
              style={style}
              currentStyle={currentStyle}
              setCurrentStyle={setCurrentStyle}
              setImageIndex={setImageIndex}
              key={index.toString()}
            />
          )
      ))}
    </>
  );
}
