import React, { useState } from 'react';
import styled from 'styled-components';
import ProductInfo from './components/ProductInfo.jsx';
import ImageSelector from './components/ImageSelector.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import DefaultView from './components/DefaultView.jsx';
import ExpandedView from './components/ExpandedView.jsx';
import ZoomedView from './components/ZoomedView.jsx';

const Section = styled.section`
  margin: 5vw 5vw 5vw 8vw;
  height: 90vh;
  width: 80vw;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Div = styled.div`
  height: 90vh;
  width: 35vw;
  position: relative;
`;

export default function Overview({
  item, styles, currentStyle, setCurrentStyle, rating, setCart, cart,
}) {
  const [imageClick, setImageClick] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [mouseLocation, setMouseLocation] = useState([0, 0]);

  if (!imageClick) {
    return (
      <Section>
        <ImageSelector
          currentStyle={currentStyle}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          data-testid="ImageSelector"
        />
        <DefaultView
          currentStyle={currentStyle}
          imageClick={imageClick}
          setImageClick={setImageClick}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          data-testid="DefaultView"
        />
        <Div>
          <ProductInfo item={item} style={currentStyle} rating={rating} data-testid="ProductInfo" />
          <StyleSelector
            item={item}
            styles={styles}
            currentStyle={currentStyle}
            rating={rating}
            setCurrentStyle={setCurrentStyle}
            setImageIndex={setImageIndex}
            data-testid="StyleSelector"
          />
          <AddToCart
            item={item}
            currentStyle={currentStyle}
            cart={cart}
            setCart={setCart}
            data-testid="AddToCart"
          />
        </Div>
      </Section>
    );
  } if (imageClick) {
    return (
      <Section>
        <ImageSelector
          currentStyle={currentStyle}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          data-testid="ImageSelector"
        />
        <ExpandedView
          currentStyle={currentStyle}
          imageClick={imageClick}
          setImageClick={setImageClick}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          data-testid="ExpandedView"
          mouseLocation={mouseLocation}
          setMouseLocation={setMouseLocation}
        />
        <ZoomedView
          currentStyle={currentStyle}
          imageClick={imageClick}
          setImageClick={setImageClick}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          data-testid="ExpandedView"
          mouseLocation={mouseLocation}
          setMouseLocation={setMouseLocation}
        />
      </Section>
    );
  }
}
