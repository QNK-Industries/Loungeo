import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import DefaultView from './DefaultView.jsx';

const GH_TOKEN = require('../../../../tokens.js');

const productUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/61575';
const styleUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/61575/styles';
const ratingUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=61575';

export default function Overview() {
  const [item, setItem] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [rating, setRating] = useState({});
  const [isLoading, setLoading] = useState(true);

  function getItem() {
    axios.get(productUrl, { headers: { Authorization: GH_TOKEN } })
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getStyle() {
    axios.get(styleUrl, { headers: { Authorization: GH_TOKEN } })
      .then((res) => {
        setStyles(res.data.results);
        setCurrentStyle(res.data.results[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getRating() {
    axios.get(ratingUrl, { headers: { Authorization: GH_TOKEN } })
      .then((res) => {
        // setStyle(res.data.results);
        setRating(res.data.ratings);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getItem();
    getStyle();
    getRating();
    setLoading(false);
  }, []);

  return (
    isLoading ? <div>Loading</div>
      : (
        <div>
          <DefaultView currentStyle={currentStyle} />
          <ProductInfo item={item} style={currentStyle} rating={rating} />
          <StyleSelector
            item={item}
            styles={styles}
            currentStyle={currentStyle}
            rating={rating}
            setCurrentStyle={setCurrentStyle}
          />
          {/* <div>Select Size:</div> */}
          <AddToCart item={item} currentStyle={currentStyle} />
        </div>
      )
  );
}
