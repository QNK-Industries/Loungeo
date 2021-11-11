/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import ItemCarousel from 'react-items-carousel';
import ItemCard from './ItemCard.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import { StyledCarousel, CarousolButton, CardWrapper } from '../RelatedItemsStyles.js';

const Carousel = ({ type, data, outfit, outfitBucket, action, addOutfit }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const bucketSize = type === 'RELATED' ? data.length : outfit.length + 1;

  function displayLeftArrow() {
    return (
      <CarousolButton action="left">
        <button type="button" onClick={() => setCarouselIndex(carouselIndex - 1)}>
          <img src="../../images/right-chevron.svg" className="left-chev" alt="shift products left" />
        </button>
      </CarousolButton>
    );
  }

  function displayRightArrow() {
    return (
      <CarousolButton action="right">
        <button type="button" onClick={() => setCarouselIndex(carouselIndex + 1)}>
          <img src="../../images/right-chevron.svg" alt="shift products right" />
        </button>
      </CarousolButton>
    );
  }

  function getItems() {
    if (type === 'RELATED') {
      return data.map((product) => <CardWrapper key={product}><ItemCard type="RELATED" key={product} item={product} action={action} /></CardWrapper>);
    }
    return outfit
      .map((product, index) => {
        if (product === 'ADD TO OUTFIT') {
          return (
            <CardWrapper key={`wrapper-${product}`} className={index ? 'outfit-last' : 'outfit-first'}>
              <AddToOutfitCard
                addOutfit={(addToOutfit) => addOutfit(addToOutfit)}
              />
            </CardWrapper>
          );
        }
        if (outfitBucket[product]) {
          return <CardWrapper key={`wrapper-${product}`}><ItemCard type="OUTFIT" key={`card-${product}`} item={outfitBucket[product]} action={action} /></CardWrapper>;
        }
        return null;
      });
  }

  return (
    <StyledCarousel bucket={bucketSize <= 4}>
      <ItemCarousel
        key={type}
        activePosition="right"
        chevronWidth={60}
        numberOfCards={bucketSize.length < 4 ? bucketSize.length : 4}
        slidesToScroll={1}
        outsideChevron
        firstAndLastGutter
        activeItemIndex={carouselIndex}
        requestToChangeActive={setCarouselIndex}
        rightChevron={displayRightArrow()}
        leftChevron={displayLeftArrow()}
      >
        {getItems()}
      </ItemCarousel>
    </StyledCarousel>
  );
};

export default Carousel;
