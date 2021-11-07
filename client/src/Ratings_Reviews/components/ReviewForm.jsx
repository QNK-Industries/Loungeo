/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React from 'react';
import styled from 'styled-components';
import CharacteristicSelection from './CharacteristicSelection.jsx';

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #fefefe;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid yellow;
  width: 70vw;
  max-width: 1200px;
  height: 60vh;
  z-index: 2;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const Title = styled.div`
  text-align: center;
`;

const RatingAndRecommend = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CharacteristicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ReviewForm = ({ product, modalOff, characteristics, characteristicList }) => (
  <ModalContent>
    <CloseButton onClick={modalOff}>Close</CloseButton>
    <Title>
      <h1>Write Your Review</h1>
      <p>About the {product.name}</p>
    </Title>
    <form>
      <RatingAndRecommend>
        <div>
          <span>*Overall Rating: *****</span>
        </div>
        <div>
          <span>*Do you recommend this product?</span>
          <label htmlFor="recommend-yes">
            <input id="recommend-yes" type="radio" name="recommend-product" />
            Yes
          </label>
          <label htmlFor="recommend-no">
            <input id="recommend-no" type="radio" name="recommend-product" />
            No
          </label>
        </div>
      </RatingAndRecommend>
      <CharacteristicsContainer>
        {Object.keys(characteristics).map((characteristic) => <CharacteristicSelection type={characteristic} details={characteristicList[characteristic]} />)}
      </CharacteristicsContainer>
    </form>
  </ModalContent>
);

export default ReviewForm;
