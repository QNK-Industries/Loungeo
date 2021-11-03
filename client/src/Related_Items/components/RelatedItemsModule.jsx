/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import utils from '../utils.js';
import ItemCard from './ItemCard.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const Carousel = styled.section`
  display: flex;
  width: 100%;
  height: 500px;
`;

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
        <Carousel>
          {data.map((product) => <ItemCard type="RELATED" key={product} item={product} action={(selectedProduct) => turnOnModal(selectedProduct)} />)}
        </Carousel>
      </section>
      <section>
        <h4>YOUR OUTFIT</h4>
        <Carousel>
          {outfit.map((product) => <ItemCard type="OUTFIT" key={product} item={product} action={(selectedProduct) => removeOutfit(selectedProduct)} />)}
          <AddToOutfitCard addOutfit={(addToOutfit) => addOutfit(addToOutfit)} product={mainProduct} />
        </Carousel>
      </section>
    </section>
  );
};

export default RelatedItems;
