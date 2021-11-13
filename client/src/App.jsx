import React, { useState } from 'react';
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

`;

const App = ({ mainProduct }) => {
  const [product, setProduct] = useState(mainProduct);
  const [cart, setCart] = useState(0);

  function changeProduct(id) {
    utils.getItem(id).then((result) => setProduct(result.data));
  }

  if (product.id) {
    return (
      <div>
        <Body data-testid="app">
          <NavBar cart={cart} />
          <Overview key={`overview-module-${product.id}`} setCart={setCart} cart={cart} />
          <RelatedItemsModule
            key={`related-module-${product.id}`}
            changeProduct={(id) => changeProduct(id)}
            mainProduct={product}
          />
          <RatingsAndReviewsModule key={`ratings-module-${product.id}`} mainProduct={product} />
          <QuestionsAnswers key={`questions-module-${product.id}`} mainProduct={product} />
        </Body>
        <Footer />
      </div>
    );
  }
  return 'Loading image placeholder';
};

export default App;
