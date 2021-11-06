/* eslint-disable object-curly-newline */
import React from 'react';
import styled from 'styled-components';

const $highlightColor = 'lightgrey';

const IndividualStarBar = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 400px;
  height: 20px;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? 'yellow' : 'white')};

  & :hover {
    background-color: ${(props) => (props.selected ? 'darkgrey' : `${$highlightColor}`)};
  }
`;

const BarDisplay = styled.div`
  width: 200px;
  height: 10px;
  background-color: grey;
`;

const FilledBar = styled.div`
  height: 100%;
  width: ${(props) => props.filled}%;
  background-color: green;
`;

const TextSegment = styled.span`
width: 50px;
margin 0 auto;
`;

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
