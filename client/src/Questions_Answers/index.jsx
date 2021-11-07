import React from 'react';
import axios from 'axios';
import Search from './components/Search.jsx';
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
    };

    this.showModal = this.showModal.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=61575&count=4', {
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
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      questionID: id,
      questionBody: qBody,
    }));
  }

  addQuestion() {
    this.setState((prevState) => ({
      showQuestion: !prevState.showQuestion,
    }));
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>{this.state.product_id
          ? 'Product something'
          : 'Hello World'}
        </h1>
        {this.state.showModal
          ? <Modal qBody={this.state.questionBody} questionID={this.state.questionID} modal={this.state.showModal} showModal={this.showModal} getQuestions={this.getQuestions} />
          : null}
        {this.state.showQuestion
         ? <QuestionModal question={this.state.showQuestion} showQuestion={this.addQuestion} getQuestions={this.getQuestions} productId={this.state.product_id}/>
         : null}
        <Search />
        {/* <Questions showModal={this.showModal} state={this.state} /> */}
        {this.state.questions.map((question) =>
          <Questions id={question.question_id} questionBody={question.question_body} answers={question.answers} modal={this.state.showModal} showModal={this.showModal} />
        )}
        <div>
          <button type="button">  Load more questions </button>
          {' '}
          {' '}
          <button type="button" onClick={this.addQuestion}> Add a question + </button>
        </div>
      </div>
    );
  }
}

export default QuestionsAnswers;
