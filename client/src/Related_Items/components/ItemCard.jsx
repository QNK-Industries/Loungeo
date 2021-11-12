import React, { useEffect, useState } from 'react';
import { StyledItemCard } from '../RelatedItemsStyles.js';
import utils from '../../Shared/serverUtils.js';
import ActionButton from './ActionButton.jsx';
import StarRating from '../../Shared/StarRating.jsx';
import StarAverage from '../../Shared/StarAverage.jsx';

const ItemCard = ({ type, item, action }) => {
  const [product, setProduct] = useState(type === 'RELATED' ? {} : item);
  const [rating, setRating] = useState(type === 'RELATED' ? {} : StarAverage(item.ratings));

  useEffect(() => {
    if (type === 'RELATED') {
      utils.getItemDetails(item)
        .then(({ data }) => setProduct(data))
        .catch((err) => console.log(err));

      utils.getRating(item)
        .then(({ data }) => setRating(StarAverage(data.ratings)))
        .catch((err) => console.log(err));
    }
  }, []);

  function getDefaultImageUrl() {
    let defaultUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
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

  if (product.id && rating) {
    return (
      <StyledItemCard>
        {console.log(product)}
        <div className="card-image-container">
          <img alt="product" src={getDefaultImageUrl()} className="card-image" />
        </div>

        <div className="card-text">

          <div className="card-category">
            <span>{product.category}</span>
          </div>

          <div className="card-title">
            <h3>{product.name}</h3>
          </div>

          <div className="card-rating">
            <StarRating ratingObj={rating} />
          </div>

          <div className="card-footer">
            <div className="card-left">
              <span className="card-price">${product.default_price}</span>
            </div>

            <div className="card-right">
              <ActionButton type={type} product={product} actionFunc={action} />
            </div>
          </div>
        </div>
      </StyledItemCard>
    );
  }
  return (
    <StyledItemCard url="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47d23nnjrd24i8d7pt8wtvxse5rkasd8v30moj9rv1&rid=giphy.gif&ct=g">
      <div className="card-image-container">
        <img alt="product" src={getDefaultImageUrl()} className="card-image" />
      </div>
    </StyledItemCard>
  );
};

export default ItemCard;
