import React from 'react';
import { OutfitDiv } from '../RelatedItemsStyles.js';

const AddToOutfitCard = ({ addOutfit }) => (
  <OutfitDiv onClick={() => addOutfit()}>
    <div className="outfit-card">
      <h1>
        Add
        <span className="enclosed">to</span>
        <span className="enclosed">outfit</span>
        <img alt="shopping bag" src="../../images/shoppingbag.svg" className="shopping" />
      </h1>
    </div>
  </OutfitDiv>
);

export default AddToOutfitCard;
