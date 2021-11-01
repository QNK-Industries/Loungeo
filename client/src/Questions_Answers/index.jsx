import React from 'react';
import Search from './components/Search.jsx';
import Questions from './components/Questions.jsx';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props)
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