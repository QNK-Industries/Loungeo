import React, { useState } from 'react';
// import axios from 'axios';
import Answers from './Answers.jsx';
import utils from '../../Shared/serverUtils.js';
import AddAnswerButtonStyling from '../stylings/AddAnswerButtonStyling.js';
import AddHelpful from '../stylings/AddHelpful.js';

// const GH_TOKEN = require('../../../../tokens.js');

const RightBar = {
  float: 'right',
  fontFamily: 'Hind sans-serif',
};

const Questions = ({
  id, questionBody, answers, showModal, helpful, getQuestions, count,
}) => {
  const [answerCount, setAnswerCount] = useState(2);
  const putRequest = 'questions';
  const [markedHelpful, setMarkedHelpful] = useState(false);
  const addHelpful = (questionId, endPoint) => {
    // axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/${endPoint}/${questionId}/helpful`, {}, {
    //   headers: {
    //     Authorization: GH_TOKEN.GH_TOKEN,
    //   },
    // })
    utils.addHelpfulQuestion(questionId, endPoint)
      .then((response) => console.log('You did it dawg ', response.data))
      .then(() => getQuestions(61575, count))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div style={RightBar}>
        Helpful? {markedHelpful
        ? <span style={{ color: 'green', fontFamily: 'Hind sans-serif' }}> Yes ({helpful})</span>
        : <AddHelpful role="button" tabIndex={0} onKeyDown={(e) => console.log(e)} onClick={() => { addHelpful(id, putRequest); setMarkedHelpful(true); }}>Yes ({helpful})</AddHelpful>} |{' '}
        <AddHelpful type="button" onClick={() => showModal(id, questionBody)}>Add Answer</AddHelpful>
      </div>
      <h2>Q. {questionBody}</h2>
      {/* <Answers showModal={props.showModal} /> */}
      <div>
        {Object.keys(answers).slice(0, answerCount).map((answer) => (
          <Answers
            showModal={showModal}
            body={answers[answer].body}
            asker={answers[answer].answerer_name}
            date={answers[answer].date}
            helpful={answers[answer].helpfulness}
            key={answers[answer].id}
            id={answers[answer].id}
            addHelpful={addHelpful}
          />
        )).sort((a, b) => (b.helpfulness - a.helpfulness))}
      </div>
      <br />
      {Object.keys(answers).length
        ? (
          <AddAnswerButtonStyling
            data-testid="AddAnswerButton"
            type="button"
            onClick={() => setAnswerCount(answerCount + 2)}
          >MORE ANSWERS
          </AddAnswerButtonStyling>
        )
        : <div> Be The First To Add A Question!</div>}
    </div>
  );
};

export default Questions;
