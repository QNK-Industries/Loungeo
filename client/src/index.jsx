import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Overview from './Overview/components/index.jsx';
import QuestionsAnswers from './Questions_Answers/index.jsx';
import data from './testData.js';
import RelatedItemsModule from './Related_Items/components/RelatedItemsModule.jsx';
import RatingsAndReviewsModule from './Ratings_Reviews/RatingsAndReviewsModule.jsx';

// add global styles here
const Body = styled.div`

`;

const App = () => {
  const [mainProduct, setMainProduct] = useState({});

  useEffect(() => setMainProduct(data.replaceWithGetFirstProductApiCall()), []);

  if (mainProduct.id) {
    return (
      <Body>
        <Overview />
        <RatingsAndReviewsModule mainProduct={mainProduct} />
        <QuestionsAnswers />
        <RelatedItemsModule mainProduct={mainProduct} />
      </Body>
    );
  }
  return 'Loading image placeholder';
};

ReactDOM.render(<App />, document.getElementById('root'));
