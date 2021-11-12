import React, { useState } from 'react';
// import axios from 'axios';
import ReactDOM from 'react-dom';
import utils from '../../Shared/serverUtils.js';

// const GH_TOKEN = require('../../../../tokens.js');

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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalDiv = {
  zIndex: '1055',
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

const QuestionModal = ({ question, showQuestion, productId }) => {
  const [questionBody, setQuestionBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [eMail, setEmail] = useState('');

  const formCheck = () => {
    if (!questionBody) {
      alert('Please Provide Your Question');
      return false;
    } else if (!nickname) {
      alert('Please Provide Your Nickname')
      return false;
    } else if (!eMail) {
      alert('Please Provide Your Email')
      return false
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formCheck()) {
      const newQuestion = {
        body: questionBody,
        name: nickname,
        email: eMail,
        product_id: productId,
      };

      utils.postQuestion(newQuestion)
        .then((response) => console.log(response))
        .then(() => utils.getQuestions(61575))
        .then(() => showQuestion());

      //     axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions`, newQuestion, {
      //       headers: {
      //         Authorization: GH_TOKEN.GH_TOKEN,
      //       },
      //     })
      //       .then((res) => {
      //         console.log('You did it dawg:', res.data);
      //       })
      //       .then(() => getQuestions())
      //       .then(() => showQuestion())
      //       .catch((error) => {
      //         if (error.response) {
      //           console.log(error.response.data);
      //         }
      //       });
    }
  };

  return (
    question ? ReactDOM.createPortal(
      <>
        <div
          data-testid="QuestionOverlay"
          style={overlay}
        />
        <div
          data-testid="ModalWrapper"
          style={modalWrapper}
          onClick={showQuestion}
        >
          <div data-testid="QuestionModal" style={modalDiv} onClick={e => {
            // Need to use this to be able to click on things inside Modal without closing
            e.stopPropagation();
          }}>
            <div data-testid="FormStyle" style={formStyle}>
              <h1>Submit Your Question</h1>
              <form
                data-testid="FormSubmit"
                onSubmit={handleSubmit}
              >
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
                  Question Body
                  <br />
                  <textarea
                    style={{ resize: 'none' }}
                    data-testid="TextArea"
                    onChange={(e) => setQuestionBody(e.target.value)}
                    rows='5'
                    cols='50'
                  />
                </label>
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </>, document.body,
    ) : null);
};

export default QuestionModal;
