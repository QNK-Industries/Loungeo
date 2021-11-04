/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import utils from '../utils.js';
import Carousel from './Carousel.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedItems = ({ mainProduct }) => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentCompare, setCurrentCompare] = useState(null);
  const [outfit, setOutfit] = useState([]);

  useEffect(() => utils.getRelatedProducts(mainProduct.id, (newData) => setData(newData)), []);

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
        {displayModal()}
        <h4>RELATED PRODUCTS</h4>
        <Carousel type="RELATED" key="RELATED" action={(selectedProduct) => turnOnModal(selectedProduct)} data={data} />
      </section>
      <section>
        <h4>YOUR OUTFIT</h4>
        <Carousel type="OUTFIT" key="OUTFIT" action={(selectedProduct) => removeOutfit(selectedProduct)} outfit={outfit} mainProduct={mainProduct} addOutfit={(addToOutfit) => addOutfit(addToOutfit)} />
      </section>
    </section>
  );
};

export default RelatedItems;
