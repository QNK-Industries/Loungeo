/* eslint-disable object-curly-newline */
import React from 'react';
import { IndividualStarBar, TextSegment, BarDisplay, FilledBar } from '../ReviewsStyles.js';

const StarBar = ({ stars, amount, total, selected, toggleSelected }) => (
  <IndividualStarBar selected={selected} onClick={() => toggleSelected(stars)}>
    <TextSegment>
      {stars === 1 ? '1 star' : `${stars} stars`}
    </TextSegment>
    <BarDisplay>
      <FilledBar filled={Math.floor((amount / total) * 100)} />
    </BarDisplay>
    <TextSegment>
      {amount}
    </TextSegment>
  </IndividualStarBar>
);

export default StarBar;
