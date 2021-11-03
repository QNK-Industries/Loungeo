import React from 'react';
// import styled from 'styled-components';

const starShapes = [
  "./images/empty star.png",
  "./images/quarter star.png",
  "./images/half star.png",
  "./images/three quarter star.png",
  "./images/filled star.png",
]

export default function StarRating({ratingObj}) {
  var rating = ratingObj.average;
  const stars = [];
  while(stars.length < 5) {
    switch(true) {
      case (rating >= 1):
        stars.push(starShapes[4]);
        break;
      case (rating === .75):
        stars.push(starShapes[3]);
        break;
      case (rating === .5):
        stars.push(starShapes[2]);
        break;
      case (rating === .25):
        stars.push(starShapes[1]);
        break;
      case (rating <= 0):
        stars.push(starShapes[0]);
        break;
    }
    rating -= 1;
  }
  return (
    <span className="star-rating">
      {stars.map((star) => {
        return (
            <div style={{display: 'inline-block', position: 'relative' }} className="star">
              <img src={star} alt="filled star" style={{width: '15px'}} />
            </div>
        );
      })}
    </span>
  );
}

