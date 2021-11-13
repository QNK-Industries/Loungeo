import React from 'react';
import styled from 'styled-components';
import StarRating from '../../Shared/StarRating.jsx';
import starAverage from '../../Shared/StarAverage.jsx';

const ProductDiv = styled.div`
  height: 30vh;
  width: 35vw;
  position: relative;
`;

const PriceSpan = styled.span`
font-size: 2.2rem;
font-weight: bold;
color: black;
height: 7vh;
width: 33.5vw;
position: relative;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`;

const ReviewDiv = styled.div`
  font-size: .8rem;
  height: 6vh;
  width: 16vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #7D8491;
`;

// const CategoryDiv = styled.div`
//   color: #7D8491;
// `;

const NameDiv = styled.div`
  color: #262730;
  font-size: 2.2rem;
  height: 8vh;
`;

const DescriptionDiv = styled.div`
  color: #7D8491;
  height: 10vh;
  display: flex;
  align-items: flex-end;
`;

export default function ProductInfo({ item, style, rating }) {
  const ratingObj = starAverage(rating);
  return (
    style.length === 0 ? <div />
      : (
        <ProductDiv>
          <NameDiv>{item.name}</NameDiv>
          {/* <CategoryDiv>{item.category}</CategoryDiv> */}
          <PriceSpan>
            {style.sale_price ? (
              <>
                <span style={{ textDecoration: 'line-through' }}>${style.original_price}</span>
                <span style={{ color: '#8D0801' }}>${style.sale_price}</span>
              </>
            )
              : <PriceSpan>${style.original_price}</PriceSpan>}
            <ReviewDiv>
              <StarRating ratingObj={ratingObj} />
              {ratingObj.total} Reviews
            </ReviewDiv>
          </PriceSpan>
          <DescriptionDiv>{item.description}</DescriptionDiv>
        </ProductDiv>
      )
  );
}
