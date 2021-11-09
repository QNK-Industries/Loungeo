/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import utils from '../../Shared/serverUtils.js';
import Carousel from './Carousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const CarousolHeader = styled.h2`
  position: relative;
  text-align: center;
  padding: .2rem 0;
  overflow: hidden;
`;

const CarousolText = styled.span`
  display: inline-block;
  position: relative;
  padding: 0 0.5em;

  &:before, &:after {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    width: 70em;
    border-top: 1px solid #ccc;
  }

  &:before {
    right: 100%;
  }

  &:after {
    left: 100%;
  }
`;

const RelatedItems = ({ mainProduct }) => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentCompare, setCurrentCompare] = useState(null);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => utils.getRelatedProducts(mainProduct.id).then((newData) => setData(newData.data)), []);

  function addOutfit(outfitId) {
    if (outfit.indexOf(outfitId) === -1) {
      setOutfit([...outfit, outfitId]);
    }
  }

  function removeOutfit({ id }) {
    const stateCopy = [...outfit];
    stateCopy.splice(stateCopy.indexOf(id), 1);
    setOutfit(stateCopy);
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
    <section id="related_products_and_comparison_module">
      <section>
        <CarousolHeader>
          <CarousolText>
            Your Outfit
          </CarousolText>
        </CarousolHeader>
        <Carousel type="OUTFIT" key="OUTFIT" action={(selectedProduct) => removeOutfit(selectedProduct)} outfit={outfit} mainProduct={mainProduct} addOutfit={(addToOutfit) => addOutfit(addToOutfit)} />
      </section>
      <section>
        {displayModal()}
        <CarousolHeader>
          <CarousolText>
            Your Outfit
          </CarousolText>
        </CarousolHeader>
        <Carousel type="RELATED" key="RELATED" action={(selectedProduct) => turnOnModal(selectedProduct)} data={data} />
      </section>
    </section>
  );
};

export default RelatedItems;
