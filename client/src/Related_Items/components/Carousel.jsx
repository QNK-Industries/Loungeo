/* eslint-disable object-curly-newline */
import React, { useState, useEffect } from 'react';
import ItemCarousel from 'react-items-carousel';
import ItemCard from './ItemCard.jsx';
import useWindowDimensions from '../../Shared/customHooks.js';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import { StyledCarousel, CarousolButton, CardWrapper } from '../RelatedItemsStyles.js';

function determineSize(height, width) {
  if (width < 900) {
    return 1;
  }
  if (width < 1200) {
    return 2;
  }
  if (width < 1500) {
    return 3;
  }
  return 4;
}

const Carousel = ({ type, data, outfit, outfitBucket, action, addOutfit }) => {
  const { height, width } = useWindowDimensions();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselLimit, setCarouselLimit] = useState(determineSize(height, width));
  const bucketSize = type === 'RELATED' ? data.length : outfit.length + 1;

  useEffect(() => setCarouselLimit(determineSize(height, width)), [width]);

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
      return data.map((product) => <CardWrapper key={`cardWrapper-${product}`}><ItemCard type="RELATED" item={product} action={action} /></CardWrapper>);
    }
    return outfit
      .map((product, index) => {
        if (product === 'ADD TO OUTFIT') {
          return (
            <CardWrapper key={`cardWrapper-${product}`} className={index ? 'outfit-last' : 'outfit-first'}>
              <AddToOutfitCard
                addOutfit={(addToOutfit) => addOutfit(addToOutfit)}
              />
            </CardWrapper>
          );
        }
        if (outfitBucket[product]) {
          return <CardWrapper key={`cardWrapper-${product}`}><ItemCard type="OUTFIT" item={outfitBucket[product]} action={action} /></CardWrapper>;
        }
        return null;
      });
  }

  return (
    <StyledCarousel bucket={bucketSize <= carouselLimit}>
      <ItemCarousel
        key={type}
        activePosition="right"
        chevronWidth={60}
        numberOfCards={bucketSize.length < carouselLimit ? bucketSize.length : carouselLimit}
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
