/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import ReviewForm from './ReviewForm.jsx';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const ReviewModal = ({ product, modalOff, characteristicList, characteristics }) => (
  <div>
    <ModalBackground onClick={modalOff} />
    <ReviewForm product={product} modalOff={modalOff} characteristics={characteristics} characteristicList={characteristicList} />
  </div>
);

export default ReviewModal;
