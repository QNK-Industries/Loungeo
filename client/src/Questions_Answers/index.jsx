import React from 'react';
import Search from './components/Search.jsx';
import Questions from './components/Questions.jsx';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: true;
    }
    this.showModal = this.showModal.bind(this)
  }

  showModal() {
    console.log('This is clicking')
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Search />
        <Questions />
      </div>
    )
  }
}


export default QuestionsAnswers;