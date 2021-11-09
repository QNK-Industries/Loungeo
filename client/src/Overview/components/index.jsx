import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductInfo from './ProductInfo.jsx';
import ImageSelector from './ImageSelector.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import ZoomedView from './ZoomedView.jsx';

const { GH_TOKEN } = require('../../../../tokens.js');

const productUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/61575';
const styleUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/61575/styles';
const ratingUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=61575';

const Section = styled.section`
  margin: 30px 30px 30px 30px;
  height: 90vh;
  width: 80vw;
  position: relative;
  display: flex;
`;

const Div = styled.div`
  margin: 10px 10px 10px 100px;
  height: 100vh;
  width: 40vw;
  position: relative;
  justify-content: right;
  float: right;
`;

export default function Overview() {
  const [item, setItem] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [rating, setRating] = useState({});
  const [imageClick, setImageClick] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [mouseLocation, setMouseLocation] = useState([0, 0]);

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
  }, []);

  if (imageClick === 0) {
    return (
      <Section>
        <ImageSelector
          currentStyle={currentStyle}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
        <DefaultView
          currentStyle={currentStyle}
          setImageClick={setImageClick}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
        <Div>
          <ProductInfo item={item} style={currentStyle} rating={rating} />
          <StyleSelector
            item={item}
            styles={styles}
            currentStyle={currentStyle}
            rating={rating}
            setCurrentStyle={setCurrentStyle}
          />
          <AddToCart item={item} currentStyle={currentStyle} />
        </Div>
      </Section>
    );
  } if (imageClick === 1) {
    return (
      <Section>
        <ExpandedView
          currentStyle={currentStyle}
          setImageClick={setImageClick}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          setMouseLocation={setMouseLocation}
        />
      </Section>
    );
  }
  return (
    <Section>
      <ZoomedView
        currentStyle={currentStyle}
        setImageClick={setImageClick}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        mouseLocation={mouseLocation}
      />
    </Section>
  );
}
