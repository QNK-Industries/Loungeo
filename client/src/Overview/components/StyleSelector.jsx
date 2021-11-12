import React from 'react';
import styled from 'styled-components';
import Style from './Style.jsx';

const StyleDiv = styled.div`
  height: 40vh;
  width: 35vw;
  position: relative;
  border-top: 2px solid #8D0801;
  border-bottom: 2px solid #8D0801;
`;

const StyleType = styled.div`
  position: relative;
  color: #262730;
  font-size: 1.2rem;
  display: flex;
  align-items: flex-end;
  height: 6vh;
`;

export default function StyleSelector({
  styles, currentStyle, setCurrentStyle, setImageIndex,
}) {
  return (
    <StyleDiv>
      <StyleType id={currentStyle.style_id}>
        <strong>Style:</strong> &nbsp; {currentStyle.name}
      </StyleType>
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
    </StyleDiv>
  );
}
