/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
import { ModalBackground } from '../ReviewsStyles.js';
import ReviewForm from './ReviewForm.jsx';

const ReviewModal = ({ product, modalOff, characteristicList, characteristics }) => (
  <div>
    <ModalBackground onClick={modalOff} />
    <ReviewForm
      product={product}
      modalOff={modalOff}
      characteristics={characteristics}
      characteristicList={characteristicList}
    />
  </div>
);

export default ReviewModal;
