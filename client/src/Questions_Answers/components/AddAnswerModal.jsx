import React, { useState } from 'react';
// import axios from 'axios';
import ReactDOM from 'react-dom';
import utils from '../../Shared/serverUtils.js';

const GH_TOKEN = require('../../../../tokens.js');

const overlay = {
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '10',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000',
  overflowX: 'hidden',
  overflowY: 'hidden',
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
  overflowY: 'hidden',
  outline: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalDiv = {
  zIndex: '1055',
  overflowY: 'hidden',
  backgroundColor: 'white',
  width: '60%',
  height: '350px',
  border: '3px solid black',
};

const formStyle = {
  position: 'relative',
  textAlign: 'center',
  zIndex: '3000',
};

const Modal = ({
  modal, showModal, qBody, questionID, getQuestions, questionNumber
}) => {
  const [answerBody, setAnswerBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const formCheck = () => {
    if (!answerBody) {
      alert('Please Provide Your Answer');
      return false;
    } else if (!nickname) {
      alert('Please Provide Your Nickname');
      return false;
    } else if (!email) {
      alert('Please Provide Your Email');
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formCheck()) {
      const newAnswer = {
        body: answerBody,
        name: nickname,
        email: email,
      };

      // axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${questionID}/answers`, newAnswer, {
      //   headers: {
      //     Authorization: GH_TOKEN.GH_TOKEN,
      //   },
      // })
      utils.addAnswer(questionID, newAnswer)
        .then((res) => {
          console.log('You did it dawg:', res.data);
        })
        .then(() => getQuestions(61575, questionNumber))
        .then(() => showModal())
        .catch(console.log);
    }
  };

  return (
    modal ? ReactDOM.createPortal(
      <>
        <div
          style={overlay}
        />
        <div
          role="button"
          tabIndex="0"
          style={modalWrapper}
          onClick={showModal}
          onKeyDown={(e) => console.log(e)}
        >
          <div
            style={modalDiv}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => console.log(e)}
            onClick={(e) => {
              // Need to use this to be able to click on things inside Modal without closing
              e.stopPropagation();
            }}
          >
            <div style={formStyle}>
              <h1>Submit Your Answer</h1>
              <h2>{qBody}</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Nickname:
                  <br />
                  <input
                    placeholder="Example: jack543!"
                    onChange={(e) => setNickname(e.target.value)}
                  />
                  <br />
                  “For privacy reasons, do not use your full name or email address"
                </label>
                <br />
                <label>
                  Email:
                  <br />
                  <input
                    placeholder="Example: jack543!@noev.cam"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  “For authentication reasons, you will not be emailed”
                </label>
                <br />
                <label>
                  Answer Body
                  <br />
                  <textarea
                    onChange={(e) => setAnswerBody(e.target.value)}
                    width='200px' />
                </label>
                <br />
                <button>Upload Photos</button> {' '}<button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </>, document.body,
    ) : null);
};
export default Modal;
