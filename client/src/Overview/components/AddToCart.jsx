import React, { useState } from 'react';
import styled from 'styled-components';
import utils from '../../Shared/serverUtils.js';
// import Button from '../../Questions_Answers/stylings/Button.js';

const CartSpan = styled.span`
  height: 12vh;
  width: 35vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SizeSwitch = styled.button`
  font-size: 1.5rem;
  height: 10vh;
  width: 10vh;
  color: black;
  background-color: white;
  border-radius: 50%;
  border: none;

`;

const SizeSwitchEmpty = styled(SizeSwitch)`
  text-decoration: line-through;
`;

const SizeSwitchClicked = styled(SizeSwitch)`
  background-color: #262730;
  color: white;
`;

const CartButton = styled.button`
  font-size: 2rem;
  border: none;
  color: white;
  background: #262730;
  width: 25vw;
  height: 7vh;

  &:hover {
    background: #7D8491;
  }`;

const Select = styled.select`
font-size: 1.7rem;
width: 5vw;
height: 7vh;
text-align: center;
`;

export default function AddToCart({ currentStyle }) {
  if (Object.keys(currentStyle).length === 0) {
    return (
      <div>Loading Sizes</div>
    );
  }
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const [currentID, setCurrentID] = useState(null);
  const [currentSize, setCurrentSize] = useState('');

  const sizesNums = [];
  const skusKeys = Object.keys(currentStyle.skus);
  skusKeys.forEach((key) => {
    currentStyle.skus[key].id = key;
    sizesNums.push(currentStyle.skus[key]);
  });
  sizesNums[5].size = sizesNums[5].size === 'XL' ? 'XXL' : sizesNums[5].size;

  if (!currentSize) {
    setCurrentSize(sizesNums[0].size);
    setCurrentQuantity(sizesNums[0].quantity);
    setCurrentID(Number(sizesNums[0].id));
  }

  return (
    <>
      <div>
        <CartSpan>
          {sizesNums.map((sizeNum, index) => {
            if (sizeNum.quantity === 0) {
              return (
                <SizeSwitchEmpty
                  key={index.toString()}
                >{sizeNum.size}
                </SizeSwitchEmpty>
              );
            } if (currentSize === sizeNum.size) {
              return (
                <SizeSwitchClicked
                  key={index.toString()}
                >{sizeNum.size}
                </SizeSwitchClicked>
              );
            }
            return (
              <SizeSwitch
                key={index.toString()}
                onClick={() => {
                  setCurrentSize(sizeNum.size);
                  setCurrentQuantity(sizeNum.quantity);
                  setCurrentID(Number(sizeNum.id));
                }}
                onKeyPress={() => {
                  setCurrentSize(sizeNum.size);
                  setCurrentQuantity(sizeNum.quantity);
                  setCurrentID(Number(sizeNum.id));
                }}
              >{sizeNum.size}
              </SizeSwitch>
            );
          })}
        </CartSpan>
      </div>
      <div>
        <CartSpan>
          <Select>
            <option selected="selected">1 </option>
            {[...Array(currentQuantity).keys()].map((quantity) => (
              <option>{quantity + 2}</option>
            ))}
          </Select>
          <CartButton
            type="button"
            onClick={() => utils.postToCart({ count: currentQuantity, sku_id: currentID })}
          >Add to Cart
          </CartButton>
        </CartSpan>
      </div>
    </>
  );
}
