import React from 'react';
import axios from 'axios';
import AnswerSearch from './components/AnswerSearch.jsx';
import Questions from './components/Questions.jsx';
import QuestionModal from './components/QuestionModal.jsx';
import Modal from './components/AddAnswerModal.jsx';

const GH_TOKEN = require('../../../tokens.js');

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      product_id: '',
      showModal: false,
      showQuestion: false,
      questionNumber: 5,
      query: '',
    };

    this.showModal = this.showModal.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addQuestionCount = this.addQuestionCount.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const { questionNumber } = this.state;
    this.getQuestions(questionNumber);
  }

  handleSearch(e) {
    this.setState({
      query: e,
    });
    // console.log(e)
  }

  getQuestions(qNum) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=61575&count=${qNum}`, {
      headers: {
        Authorization: GH_TOKEN.GH_TOKEN,
      },
    })
      .then((response) => {
        this.setState({
          questions: response.data.results,
          product_id: parseInt(response.data.product_id, 10),
        });
      })
      .catch((error) => { console.log(error); });
  }

  showModal(id, qBody) {
    const { showModal } = this.state;
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      questionID: id,
      questionBody: qBody,
    }));
    if (showModal === true) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  addQuestion() {
    const { showQuestion } = this.state;
    this.setState((prevState) => ({
      showQuestion: !prevState.showQuestion,
    }));
    if (showQuestion === true) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  addQuestionCount() {
    const { questionNumber } = this.state;
    this.setState((prevState) => ({
      questionNumber: prevState.questionNumber + 2,
    }));
    this.getQuestions(questionNumber);
  }

  render() {
    const {
      product_id, showModal, questionBody, questionID,
      showQuestion, questions, query, questionNumber,
    } = this.state;
    return (
      <section style={{ alignItems: 'center' }}>
        <div style={{ display: 'block', margin: '0 auto', width: '70vw' }}>
          <h1>{product_id
            ? 'Product something'
            : 'Hello World'}
          </h1>
          <AnswerSearch search={this.handleSearch} />

          <div style={{ overflowY: 'auto', height: '500px' }}>
            {console.log(this.state)}

            {showModal
              ? (
                <Modal
                  qBody={questionBody}
                  questionID={questionID}
                  modal={showModal}
                  showModal={this.showModal}
                  getQuestions={this.getQuestions}
                />
              )
              : null}
            {showQuestion
              ? (
                <QuestionModal
                  question={showQuestion}
                  showQuestion={this.addQuestion}
                  getQuestions={this.getQuestions}
                  productId={product_id}
                />
              )
              : null}
            {/* <Questions showModal={this.showModal} state={this.state} /> */}
            {questions.filter((question, { question_body }) => {
              if (query === '') {
                return question;
              } else if (question_body.toLowerCase().includes(query.toLowerCase())) {
                return question;
              }
            }).map(({
              question_id, question_body, answers, question_helpfulness
            }) => (
              <Questions
                key={question_id}
                id={question_id}
                questionBody={question_body}
                answers={answers}
                modal={showModal}
                showModal={this.showModal}
                helpful={question_helpfulness}
                getQuestions={this.getQuestions}
                count={questionNumber}
              />
            ))}
          </div>
          <div>
            <button type="button" onClick={this.addQuestionCount}>  Load more questions </button>
            {' '}
            {' '}
            <button type="button" onClick={this.addQuestion}> Add a question + </button>
          </div>
        </div>
      </section>
    );
  }
}

export default QuestionsAnswers;
