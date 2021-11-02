import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import utils from '../utils.js';
import ItemCard from './ItemCard.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const Carousel = styled.section`
  display: flex;
  width: 100%;
  height: 500px;
`;

const RelatedItems = (props) => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentCompare, setCurrentCompare] = useState(null);
  const [outfit] = useState([]);

  useEffect(() => utils.getRelatedProducts(props.product.id, (newData) => setData(newData)), []);

  function turnOnModal(product) {
    setModal(true);
    setCurrentCompare(product);
  }

  function turnOffModal() {
    setModal(false);
  }

  function displayModal() {
    if (modal) {
      // eslint-disable-next-line max-len
      return <ComparisonModal product={props.product} compare={currentCompare} modalOff={() => turnOffModal()} />;
    }
    return undefined;
  }

  return (
    <section id="related_products_and_comparison_module">
      <section>
        {displayModal()}
        <h4>RELATED PRODUCTS</h4>
        <Carousel>
          {data.map((product) => <ItemCard type="RELATED" key={product} item={product} modalOn={(selectedProduct) => turnOnModal(selectedProduct)} />)}
        </Carousel>
      </section>
      <section>
        <h4>YOUR OUTFIT</h4>
        <Carousel>
          {outfit.map((product) => <ItemCard type="OUTFIT" key={product} item={product} />)}
        </Carousel>
      </section>
    </section>
  );
};

export default RelatedItems;
