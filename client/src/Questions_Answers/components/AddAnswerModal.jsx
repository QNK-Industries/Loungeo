import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const overlay = {
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '1040',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000',
  opacity: '.5',
};

// .modal-wrapper {
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 1050;
//   width: 100%;
//   height: 100%;
//   overflow-x: hidden;
//   overflow-y: auto;
//   outline: 0;
// }

// const modal = {
//   zIndex: '100',
// };

// .modal-header {
//   display: flex;
//   justify-content: flex-end;
// }

// .modal-close-button {
//   font-size: 1.4rem;
//   font-weight: 700;
//   line-height: 1;
//   color: #000;
//   opacity: .3;
//   cursor: pointer;
//   border: none;
// }

// button {
//   font-size: .9rem;
//   font-weight: 700;
//   border: none;
//   border-radius: 3px;
//   padding: .3rem 1rem;
//   margin-left: .5rem;
// }

// .button-default {
//   background: #247BA0;
//   color: #fff;
// }

const Modal = ({ modal, showModal }) =>
// (
//   <div>
//     <h1>HELLO</h1>
//   </div>
// )
modal ? ReactDOM.createPortal(
  <React.Fragment>
    <div style={overlay} onClick={showModal}/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div>
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={showModal}>
            CLOSE
          </button>
       </div>
        <p>
          Hello, I'm a modal.
        </p>
      </div>
   </ div>
  </React.Fragment>, document.body
) : null;

export default Modal;
