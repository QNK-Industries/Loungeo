import React from 'react';
import styled from 'styled-components';
import Overview from './Overview/index.jsx';
import QuestionsAnswers from './Questions_Answers/index.jsx';
import RelatedItemsModule from './Related_Items/components/RelatedItemsModule.jsx';
import RatingsAndReviewsModule from './Ratings_Reviews/RatingsAndReviewsModule.jsx';

// add global styles here
const Body = styled.div`

`;

const App = ({ mainProduct }) => {
  if (mainProduct.id) {
    return (
      <Body data-testid="app">
        <Overview />
        <RelatedItemsModule mainProduct={mainProduct} />
        <RatingsAndReviewsModule mainProduct={mainProduct} />
        <QuestionsAnswers mainProduct={mainProduct} />
      </Body>
    );
  }
  return 'Loading image placeholder';
};

export default App;
