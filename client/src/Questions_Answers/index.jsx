import React from 'react';
import Search from './components/Search';
import Questions from './components/Questions';

class QuestionsAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: true;
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Search />
        <Questions />
      </div>
    );
  }
}

export default QuestionsAnswers;
