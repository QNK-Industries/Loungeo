/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { CarousolHeader, CarousolText } from '../RelatedItemsStyles.js';
import utils from '../../Shared/serverUtils.js';
import Carousel from './Carousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedItems = ({ mainProduct }) => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentCompare, setCurrentCompare] = useState(null);
  const [outfit, setOutfit] = useState(null);
  const [outfitBucket, setOutfitBucket] = useState({});

  useEffect(() => {
    utils.getRelatedProducts(mainProduct.id).then((newData) => setData(newData.data));
    utils.getCurrentOutfit().then((storedOutfit) => {
      setOutfitBucket(storedOutfit.data);
      if (storedOutfit.data[mainProduct.id]) {
        setOutfit(Object.keys(storedOutfit.data));
      } else {
        setOutfit([...Object.keys(storedOutfit.data), 'ADD TO OUTFIT']);
      }
    });
  }, []);

  function addOutfit(outfitId) {
    if (outfit.indexOf(outfitId) === -1) {
      setOutfit([outfitId, ...outfit.slice(0, -1)]);
    }
  }

  function removeOutfit({ id }) {
    const stateCopy = [...outfit];
    stateCopy.splice(stateCopy.indexOf(id), 1);
    setOutfit([...stateCopy, 'ADD TO OUTFIT']);
  }

  function turnOnModal(product) {
    setModal(true);
    setCurrentCompare(product);
  }

  function turnOffModal() {
    setModal(false);
  }

  function displayModal() {
    if (modal) {
      return <ComparisonModal product={mainProduct} compare={currentCompare} modalOff={() => turnOffModal()} />;
    }
    return undefined;
  }

  if (outfit) {
    return (
      <section id="related_products_and_comparison_module" data-testid="relateditems">
        <section>
          <CarousolHeader>
            <CarousolText>
              YOUR OUTFIT
            </CarousolText>
          </CarousolHeader>
          <Carousel
            type="OUTFIT"
            key="Carousel-OUTFIT"
            action={(selectedProduct) => removeOutfit(selectedProduct)}
            outfit={outfit}
            outfitBucket={outfitBucket}
            mainProduct={mainProduct}
            addOutfit={(addToOutfit) => addOutfit(addToOutfit)}
          />
        </section>
        <section>
          {displayModal()}
          <CarousolHeader>
            <CarousolText>
              WEAR IT WITH
            </CarousolText>
          </CarousolHeader>
          <Carousel
            type="RELATED"
            key="Carousel-RELATED"
            action={(selectedProduct) => turnOnModal(selectedProduct)}
            data={data}
          />
        </section>
      </section>
    );
  }
  return 'Loading...';
};

export default RelatedItems;
