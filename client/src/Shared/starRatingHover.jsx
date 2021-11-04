import React, { useState } from 'react';
import styled from 'styled-components';

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          // <button
          //   type="button"
          //   key={index}
          //   className={index <= (hover || rating) ? 'on' : 'off'}
          //   onClick={() => setRating(index)}
          //   onMouseEnter={() => setHover(index)}
          //   onMouseLeave={() => setHover(rating)}
          // >
          <>
            <div style={{display: 'inline-block'}} className="star">
              <img src="https://img.icons8.com/ios-filled/50/000000/star--v1.png" alt="star" />
            </div>
            <div style={{ position: 'relative', display: 'inline-block', width: '0px' }} className="star">
            <img src="https://img.icons8.com/ios/50/000000/star--v1.png" alt="filled star" />
            </div>
          </>
          // </button>
        );
      })}
    </div>
  );
}
