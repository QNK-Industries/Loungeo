/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Answers from '../Questions_Answers/components/Answers.jsx';
import AnswerSearch from '../Questions_Answers/components/AnswerSearch.jsx';
import Questions from '../Questions_Answers/components/Questions.jsx';
import QuestionsAnswers from '../Questions_Answers/index.jsx';

describe('Questions', () => {
  test('renders module component', () => {
    render(<Answers />);
  });
});

describe('Questions', () => {
  test('Should render Questions', () => {
    render(<Questions />);
  });
});

describe('Index', () => {
  test('Should render index', () => {
    render(<QuestionsAnswers />);
  });
});

describe('Search', () => {
  test('Should render Search', () => {
    render(<AnswerSearch />);
  });
});
