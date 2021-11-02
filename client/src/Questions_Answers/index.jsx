import React from 'react';
import axios from 'axios';
import Search from './components/Search.jsx';
import Questions from './components/Questions.jsx';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
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
        Authorization: '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',
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

  showModal() {
    console.log(this, 'this is being clicked');
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <button type="button" onClick={this.getQuestions}>Click Me</button>
        <h1>Hello World</h1>
        <Search />
        {/* <Questions showModal={this.showModal} state={this.state} /> */}
        {this.state.questions.map((question) => {
          return (
            <Questions question_body={question.question_body} />
          );
        })}
      </div>
    );
  }
}

export default QuestionsAnswers;
