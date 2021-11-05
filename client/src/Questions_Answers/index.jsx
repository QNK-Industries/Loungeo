import React from 'react';
import axios from 'axios';
import Search from './components/Search.jsx';
import Questions from './components/Questions.jsx';
import BottomSection from './components/BottomSection.jsx';

const GH_TOKEN = require('../../../tokens.js');

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      product_id: '',
      showModal: false,
    };

    this.showModal = this.showModal.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=61575', {
      headers: {
        Authorization: GH_TOKEN.GH_TOKEN,
      },
    })

      .then((response) => {
        this.setState({
          questions: response.data.results,
          product_id: response.data.product_id,
        });
      })
      .catch((error) => { console.log(error); });
  }

  showModal(e) {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
    console.log(e);
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <h1>{this.state.product_id
          ? 'Product something'
          : 'Hello World'}
        </h1>
        <Search />
        {/* <Questions showModal={this.showModal} state={this.state} /> */}
        {this.state.questions.map((question) =>
          <Questions id={question.question_id} questionBody={question.question_body} answers={question.answers} modal={this.state.showModal} showModal={this.showModal}/>
        )}
        <BottomSection />
      </div>
    );
  }
}

export default QuestionsAnswers;
