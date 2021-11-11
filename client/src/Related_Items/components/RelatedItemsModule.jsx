/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { CarousolHeader, CarousolText } from '../RelatedItemsStyles.js';
import utils from '../../Shared/serverUtils.js';
import Carousel from './Carousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';

// const testOutfit = [61578, 61592, 61595, 'ADD TO OUTFIT'];

const RelatedItems = ({ mainProduct }) => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentCompare, setCurrentCompare] = useState(null);
  const [outfit, setOutfit] = useState(['ADD TO OUTFIT']);
  // const [outfit, setOutfit] = useState(testOutfit);

  useEffect(() => utils.getRelatedProducts(mainProduct.id).then((newData) => setData(newData.data)), []);

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

  return (
    <section id="related_products_and_comparison_module" data-testid="relateditems">
      <section>
        <CarousolHeader>
          <CarousolText>
            YOUR OUTFIT
          </CarousolText>
        </CarousolHeader>
        <Carousel type="OUTFIT" key="OUTFIT" action={(selectedProduct) => removeOutfit(selectedProduct)} outfit={outfit} mainProduct={mainProduct} addOutfit={(addToOutfit) => addOutfit(addToOutfit)} />
      </section>
      <section>
        {displayModal()}
        <CarousolHeader>
          <CarousolText>
            WEAR IT WITH
          </CarousolText>
        </CarousolHeader>
        <Carousel type="RELATED" key="RELATED" action={(selectedProduct) => turnOnModal(selectedProduct)} data={data} />
      </section>
    </section>
  );
};

export default RelatedItems;
