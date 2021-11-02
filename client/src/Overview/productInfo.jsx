import React from 'react';
import StarRating from '../Shared/StarRating.jsx';
import starAverage from '../Shared/StarAverage.jsx';

// const GH_TOKEN = require('../../../tokens.js');

export default function ProductInfo({ item, style, rating }) {
  const currentStarAverage = starAverage(rating.ratings);
  const price = style.sale_price ? `red ${style.sale_price} strike ${style.original_price}` : style.original_price;
  return (
    style.length === 0 ? <div />
      : (
        <>
          <div>{item.category}</div>
          <div>{item.name}</div>
          <div>${price}</div>
          <StarRating />
          <div>{currentStarAverage}</div>
          <div>{item.description}</div>
        </>
      )
  );
}
