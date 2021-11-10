import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductInfo from './components/ProductInfo.jsx';
import ImageSelector from './components/ImageSelector.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import DefaultView from './components/DefaultView.jsx';
import ExpandedView from './components/ExpandedView.jsx';
import ZoomedView from './components/ZoomedView.jsx';
import utils from '../Shared/serverUtils.js';

const id = 61575;

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

  useEffect(() => {
    utils.getItem(id)
      .then((res) => {
        setItem(res.data);
      });
    utils.getStyle(id)
      .then((res) => {
        setStyles(res.data.results);
        setCurrentStyle(res.data.results[0]);
      });
    utils.getRating(id)
      .then((res) => {
        setRating(res.data.ratings);
      });
  }, []);

  if (!imageClick) {
    return (
      <Section>
        <ImageSelector
          currentStyle={currentStyle}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
        <DefaultView
          currentStyle={currentStyle}
          imageClick={imageClick}
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
  } if (imageClick) {
    return (
      <Section>
        <ImageSelector
          currentStyle={currentStyle}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
        <ExpandedView
          currentStyle={currentStyle}
          imageClick={imageClick}
          setImageClick={setImageClick}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
          setMouseLocation={setMouseLocation}
          mouseLocation={mouseLocation}
        />
      </Section>
    );
  }
}
