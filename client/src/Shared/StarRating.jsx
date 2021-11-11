/* eslint-disable object-curly-newline */
import React from 'react';
import styled from 'styled-components';

const starShapes = [
  '../../images/emptystar.svg',
  '../../images/quarterstar.svg',
  '../../images/halfstar.svg',
  '../../images/threequarterstar.svg',
  '../../images/fullstar.svg',
];

const StarImage = styled.img`
  width: 30px;
`;

const StarImageContainer = styled.div`
  display: inline-block;
  position: relative;
  ${(props) => (props.role === 'button' ? 'cursor: pointer;' : '')}
`;

export default function StarRating({ ratingObj, submissionNotSelected, changeHover, setStar }) {
  let rating = ratingObj.average;
  const stars = [];
  while (stars.length < 5) {
    switch (true) {
      case (rating >= 1):
        stars.push(starShapes[4]);
        break;
      case (rating === 0.75):
        stars.push(starShapes[3]);
        break;
      case (rating === 0.5):
        stars.push(starShapes[2]);
        break;
      case (rating === 0.25):
        stars.push(starShapes[1]);
        break;
      case (rating <= 0):
        stars.push(starShapes[0]);
        break;
      default:
        break;
    }
    rating -= 1;
  }

  function onEnter(event, index) {
    if (event.key === 'Enter') {
      setStar(index);
    }
  }

  if (submissionNotSelected) {
    return (
      <span className="star-rating">
        {stars.map((star, index) => (
          <StarImageContainer
            key={`star-${index + 1}`}
            className="star"
            onMouseEnter={() => changeHover(index + 1)}
            onMouseLeave={() => changeHover(0)}
            onClick={() => setStar(index + 1)}
            onKeyPress={(event) => onEnter(event, index + 1)}
            role="button"
            tabIndex={0}
          >
            <StarImage src={star} alt="filled star" />
          </StarImageContainer>
        ))}
      </span>
    );
  }
  return (
    <span className="star-rating">
      {stars.map((star, index) => (
        <StarImageContainer key={`star-${index + 1}`} className="star">
          <StarImage src={star} alt="filled star" />
        </StarImageContainer>
      ))}
    </span>
  );
}
