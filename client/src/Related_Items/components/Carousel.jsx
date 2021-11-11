/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import ItemCard from './ItemCard.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import { StyledCarousel, CarousolButton } from '../RelatedItemsStyles.js';

const carouselItemLimit = 4;

const Carousel = ({ type, data, outfit, action, mainProduct, addOutfit }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const bucketSize = type === 'RELATED' ? data.length : outfit.length;

  function displayLeftArrow() {
    if (carouselIndex) {
      return (
        <CarousolButton action="left">
          <button type="button" onClick={() => setCarouselIndex(carouselIndex - 1)}>
            <img src="../../images/right-chevron.svg" className="left-chev" alt="shift products left" />
          </button>
        </CarousolButton>
      );
    }
    return null;
  }

  function displayRightArrow() {
    if (carouselIndex + carouselItemLimit < bucketSize) {
      return (
        <CarousolButton action="right">
          <button type="button" onClick={() => setCarouselIndex(carouselIndex + 1)}>
            <img src="../../images/right-chevron.svg" alt="shift products right" />
          </button>
        </CarousolButton>
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
      {outfit
        .filter((id, index) => index >= carouselIndex && index < carouselIndex + carouselItemLimit)
        .map((product) => {
          if (product === 'ADD TO OUTFIT') {
            return (
              <AddToOutfitCard
                addOutfit={(addToOutfit) => addOutfit(addToOutfit)}
                product={mainProduct}
              />
            );
          }
          return <ItemCard type="OUTFIT" key={product} item={product} action={action} />;
        })}
      {displayRightArrow()}
    </StyledCarousel>
  );
};

export default Carousel;
