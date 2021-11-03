import React from 'react';
import StarRating from '../../Shared/StarRating.jsx';
import starAverage from '../../Shared/StarAverage.jsx';

// const GH_TOKEN = require('../../../tokens.js');

export default function ProductInfo(props) {
  const currentStarAverage = starAverage(props.rating.ratings);
  const price = props.style.sale_price ? `red ${props.style.sale_price} strike ${props.style.original_price}` : props.style.original_price
  return (
    props.style.length === 0 ? <div />
      : (
        <>
          <div>{props.item.category}</div>
          <div>{props.item.name}</div>
          <div>${price}</div>
          <StarRating />
          <div>{currentStarAverage}</div>
          <div>{props.item.description}</div>
        </>
      )
  );
}
