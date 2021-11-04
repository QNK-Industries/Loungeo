/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';

const carouselItemLimit = 4;

const StyledCarousel = styled.section`
  display: flex;
  width: 100%;
  height: 500px;
`;

const Carousel = ({ type, data, outfit, addOutfit, action, mainProduct }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const bucketSize = type === 'RELATED' ? data.length : outfit.length + 1;

  function displayLeftArrow() {
    if (carouselIndex) {
      return (
        <div>
          <button type="button" onClick={() => setCarouselIndex(carouselIndex - 1)}>Left</button>
        </div>
      );
    }
    return null;
  }

  function displayRightArrow() {
    if (carouselIndex + carouselItemLimit < bucketSize) {
      return (
        <div>
          <button type="button" onClick={() => setCarouselIndex(carouselIndex + 1)}>Right</button>
        </div>
      );
    }
    return null;
  }

  if (type === 'RELATED') {
    return (
      <StyledCarousel>
        {displayLeftArrow()}
        {data.filter((id, index) => index >= carouselIndex && index < carouselIndex + carouselItemLimit).map((product) => <ItemCard type="RELATED" key={product} item={product} action={action} />)}
        {displayRightArrow()}
      </StyledCarousel>
    );
  }
  return (
    <StyledCarousel>
      {displayLeftArrow()}
      {outfit.filter((id, index) => index >= carouselIndex && index < carouselIndex + carouselItemLimit).map((product) => <ItemCard type="OUTFIT" key={product} item={product} action={action} />)}
      <AddToOutfitCard addOutfit={(addToOutfit) => addOutfit(addToOutfit)} product={mainProduct} />
      {displayRightArrow()}
    </StyledCarousel>
  );
};

export default Carousel;
