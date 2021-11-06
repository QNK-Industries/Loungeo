/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
// import Overview from './Overview/components/index.jsx';
// import RelatedItemsModule from './Related_Items/components/RelatedItemsModule.jsx';
import RatingsAndReviewsModule from './Ratings_Reviews/components/RatingsAndReviewsModule.jsx';
// import QuestionsAnswers from './Questions_Answers/index.jsx';

// Khai testing
// ReactDOM.render(<QuestionsAnswers />, document.getElementById('root'));

// Noah Testing
// ReactDOM.render(<Overview />, document.getElementById('root'));

// Quinton Testing

/* const staticItem = {
  id: 61579,
  campus: 'hr-sfo',
  name: 'Heir Force Ones',
  slogan: 'A sneaker dynasty',
  description: 'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
  category: 'Kicks',
  default_price: '99.00',
  created_at: '2021-10-28T19:58:54.904Z',
  updated_at: '2021-10-28T19:58:54.904Z',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
    {
      feature: 'Mid-Sole',
      value: 'ControlSupport Arch Bridge',
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch',
    },
  ],
}; */

const staticItem2 = {
  id: 61618,
  campus: 'hr-sfo',
  name: 'Gerson Slacks',
  slogan: 'Sequi consequatur consequatur assumenda.',
  description: 'Facilis dolor eaque esse voluptatem eum mollitia voluptatibus harum non. Aut illo quo est. Excepturi quia blanditiis blanditiis quia aut quis.',
  category: 'Slacks',
  default_price: '286.00',
  created_at: '2021-10-28T19:58:55.070Z',
  updated_at: '2021-10-28T19:58:55.070Z',
  features: [
    {
      feature: 'Non-GMO',
      value: null,
    },
  ],
};
// ReactDOM.render(<RelatedItemsModule mainProduct={staticItem} />,document.getElementById('root'));

ReactDOM.render(<RatingsAndReviewsModule mainProduct={staticItem2} />, document.getElementById('root'));
