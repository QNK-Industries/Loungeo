import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import utils from '../../Shared/serverUtils.js';
import ActionButton from './ActionButton.jsx';

const $cardHeight = '475px';
const $cardWidth = '280px';

const StyledItemCard = styled.div`
  width: ${$cardWidth};
  height: ${$cardHeight};
  margin: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, .5);
  position: relative;
`;

const ItemCardBackground = styled.div`
  width: 100%;
  height: 65%;
  background: url(${(props) => props.url || 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}) no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;
`;

const ItemCardInfo = styled.div`
  width: 100%;
  height: 35%;

  & * {
    margin: 0;
  }

  & span {
    text-transform: uppercase;
  }
`;

const ItemCard = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => utils.getItemDetails(props.item).then((newData) => setProduct(newData.data)), []);

  function getDefaultImageUrl() {
    let defaultUrl = null;
    try {
      for (let i = 0; i < product.results.length; i += 1) {
        if (product.results[i]['default?']) {
          defaultUrl = product.results[i].photos[i].url;
          break;
        }
      }
      if (!defaultUrl) defaultUrl = product.results[0].photos[0].url;
      return defaultUrl;
    } catch (error) {
      return defaultUrl;
    }
  }

  if (product.id) {
    return (
      <StyledItemCard>
        <ActionButton type={props.type} product={product} actionFunc={props.action} />
        <ItemCardBackground url={getDefaultImageUrl()} />
        <ItemCardInfo>
          <span>{product.category}</span>
          <h3>{product.name}</h3>
          <p>${product.default_price}</p>
          <p>STARS PLACEHOLDER</p>
        </ItemCardInfo>
      </StyledItemCard>
    );
  }
  return (
    <StyledItemCard url="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47d23nnjrd24i8d7pt8wtvxse5rkasd8v30moj9rv1&rid=giphy.gif&ct=g" />
  );
};

export default ItemCard;
