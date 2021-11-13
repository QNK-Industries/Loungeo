import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import utils from './Shared/serverUtils.js';
import NavBar from './Nav_Bar/NavBar.jsx';
import Overview from './Overview/index.jsx';
import QuestionsAnswers from './Questions_Answers/index.jsx';
import RelatedItemsModule from './Related_Items/components/RelatedItemsModule.jsx';
import RatingsAndReviewsModule from './Ratings_Reviews/RatingsAndReviewsModule.jsx';
import Footer from './Nav_Bar/Footer.jsx';

// add global styles here
const Body = styled.div`
  margin: 0;
  padding: 0;
`;

const App = () => {
  const [id, setId] = useState(61575);
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [rating, setRating] = useState({});
  const [cart, setCart] = useState(0);

  useEffect(() => {
    utils.getItem(id)
      .then((res) => {
        setProduct(res.data);
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
  }, [id]);

  if (product.id) {
    return (
      <>
        <Body data-testid="app">
          <NavBar cart={cart} />
          <Overview
            key={`overview-module-${product.id}`}
            item={product}
            styles={styles}
            currentStyle={currentStyle}
            setCurrentStyle={setCurrentStyle}
            rating={rating}
            setCart={setCart}
            cart={cart}
          />
          <RelatedItemsModule
            key={`related-module-${product.id}`}
            setId={setId}
            mainProduct={product}
          />
          <RatingsAndReviewsModule key={`ratings-module-${product.id}`} mainProduct={product} />
          <QuestionsAnswers key={`questions-module-${product.id}`} mainProduct={product} />
        </Body>
        <Footer />
      </>
    );
  }
  return 'Loading image placeholder';
};

export default App;
