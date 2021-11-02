import React from 'react';
import styled from 'styled-components';

const OutfitDiv = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  border: solid 1px black;
  text-align: center;
`;

const AddToOutfitCard = ({ addOutfit, product }) => (
  <OutfitDiv onClick={() => addOutfit(product.id)}>
    <p>
      +
    </p>
    <p>
      Add to Outfit
    </p>
  </OutfitDiv>
);

export default AddToOutfitCard;
