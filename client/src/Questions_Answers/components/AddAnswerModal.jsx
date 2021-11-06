import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const overlay = {
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '10',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000',
  opacity: '.5',
};

const modalWrapper = {
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '10',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  outline: '0',
};

const modalDiv = {
  zIndex: '1055',
};

const formStyle = {
  position: 'relative',
  textAlign: 'center',
  border: '1px solid green',
  zIndex: '3000',
};

const Modal = ({ modal, showModal }) =>
modal ? ReactDOM.createPortal(
  <React.Fragment>
    <div style={overlay} />
    <div style={modalWrapper} onClick={showModal}>
      <div style={modalDiv}  onClick={e => {
          // Need to use this to be able to click on things inside Modal without closing
          e.stopPropagation();
        }}>
        <div style={formStyle}>
       <form>
       <label>
         Your Answer
         <input placeholder="Your Answer"></input>
       </label>
       </form>
       </div>
      </div>
   </ div>
  </React.Fragment>, document.body
) : null;

export default Modal;
