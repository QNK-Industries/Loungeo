import React from 'react';
import Search from './components/Search.jsx';
import Questions from './components/Questions.jsx';
import axios from 'axios'

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: []
    }

    this.showModal = this.showModal.bind(this)
    this.getQuestions = this.getQuestions.bind(this)

  }

  showModal() {
    console.log('This is clicking')
  }

  getQuestions() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions?product_id=61575', {
      headers: {
        'Authorization': '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'
      }
    })
    .then(response => {this.setState({
      questions: response.data.results,
      product_id: response.data.product_id
    })})
    .catch(error => {console.log(error)})
  }

  componentDidMount() {
    this.getQuestions()
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <button onClick = {this.getQuestions}>Click Me</button>
        <h1>Hello World</h1>
        <Search />
        <Questions showModal = {this.showModal}/>
      </div>
    )
  }
}


export default QuestionsAnswers;