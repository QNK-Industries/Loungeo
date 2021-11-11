import React from 'react';
import { OutfitDiv } from '../RelatedItemsStyles.js';

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
