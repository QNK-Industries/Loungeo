import React from 'react';
import StarRating from '../../Shared/StarRating.jsx';
import starAverage from '../../Shared/StarAverage.jsx';

export default function ProductInfo({ item, style, rating }) {
  const ratingObj = starAverage(rating);
  return (
    style.length === 0 ? <div />
      : (
        <>
          <div>{item.category}</div>
          <div>{item.name}</div>
          {style.sale_price ? (
            <div>
              <span style={{ textDecoration: 'line-through' }}>${style.original_price}</span>
              <span style={{ color: 'red' }}>${style.sale_price}</span>
            </div>
          )
            : <div>${style.original_price}</div>}
          <StarRating ratingObj={ratingObj} />
          <div>{ratingObj.total} Reviews</div>
          <div>{item.name}</div>
          <div>{item.description}</div>
        </>
      )
  );
}
