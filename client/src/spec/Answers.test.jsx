/**
 * @jest-environment jsdom
 */
import React from 'react';
import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import {
  test,
  expect,
  describe,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from '@jest/globals';
import '@testing-library/jest-dom';
import testServer from './testServer.js';
import Answers from '../Questions_Answers/components/Answers.jsx';
import AnswerSearch from '../Questions_Answers/components/AnswerSearch.jsx';
import Questions from '../Questions_Answers/components/Questions.jsx';
import QuestionsAnswers from '../Questions_Answers/index.jsx';

const { questions } = require('./JSONdata/allData.js');

const {
  question_id, question_body, answers, question_helpfulness
} = questions;
beforeAll(() => testServer.listen());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());
beforeEach(() => {
  act(() => {
    render(<QuestionsAnswers questions={questions} />);
  });
});
describe('Questions', () => {
  test('renders module component', () => {
    render(<Answers />);
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('AddAnswerButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByTestId('AnswerModal'));
    expect(modal).toBeVisible();
  });
});

describe('Questions', () => {
  test('Should render Questions', () => {
    render(<Questions questions={questions} />);
  });
});

describe('Questions', () => {
  test('renders module component', () => {
    render(<Answers />);
  });
});

describe('Search', () => {
  test('Should render Search', () => {
    render(<AnswerSearch />);
  });

  test('Renders question search input', async () => {
    const searchContainer = await waitFor(() => screen.getByTestId('QuestionInput'));
    expect(searchContainer).toBeInTheDocument();
  });

  test('search bar works', async () => {
    const search = await waitFor(() => screen.getByTestId('QuestionInput'));
    fireEvent.change(search, { target: { value: 'test test test nothing here' } });
    expect(search.value).toBe('test test test nothing here');
  });

  test('search bar works', async () => {
    const search = await waitFor(() => screen.getByTestId('QuestionInput'));
    fireEvent.change(search, { target: { value: 'another for good measure' } });
    expect(search.value).toBe('another for good measure');
  });
});

describe('Index', () => {
  test('Should render index', () => {
    render(<QuestionsAnswers />);
  });
  test('Renders question search input', async () => {
    const searchContainer = await waitFor(() => screen.getByTestId('OverallSection'));
    expect(searchContainer).toBeInTheDocument();
  });

  test('Renders question search input', async () => {
    const searchContainer = await waitFor(() => screen.getByTestId('BottomSection'));
    expect(searchContainer).toBeInTheDocument();
  });

  test('Renders question search input', async () => {
    const searchContainer = await waitFor(() => screen.getByTestId('QAHeading'));
    expect(searchContainer).toBeInTheDocument();
  });

  test('Renders question search input', async () => {
    const searchContainer = await waitFor(() => screen.getByTestId('LoadQuestions'));
    expect(searchContainer).toBeInTheDocument();
  });

  test('Renders question search input', async () => {
    const searchContainer = await waitFor(() => screen.getByTestId('QuestionSearch'));
    expect(searchContainer).toBeInTheDocument();
  });

  test('Renders question search input', async () => {
    const searchContainer = await waitFor(() => screen.getByTestId('QAStyleDiv'));
    expect(searchContainer).toBeInTheDocument();
  });

  test('Renders question search input', async () => {
    const searchContainer = await waitFor(() => screen.getByTestId('QuestionsDiv'));
    expect(searchContainer).toBeInTheDocument();
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('QuestionButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByTestId('QuestionModal'));
    expect(modal).toBeVisible();
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('QuestionButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByTestId('ModalWrapper'));
    expect(modal).toBeVisible();
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('QuestionButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByPlaceholderText('Example: jack543!'));
    expect(modal).toBeVisible();
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('QuestionButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByPlaceholderText('Example: jack543!'));
    fireEvent.change(modal, { target: { value: 'another for good measure' } });
    expect(modal.value).toBe('another for good measure');
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('QuestionButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByPlaceholderText('Example: jack543!@noev.cam'));
    expect(modal).toBeVisible();
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('QuestionButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByPlaceholderText('Example: jack543!@noev.cam'));
    fireEvent.change(modal, { target: { value: 'another for good measure' } });
    expect(modal.value).toBe('another for good measure');
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('QuestionButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByTestId('TextArea'));
    expect(modal).toBeVisible();
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('QuestionButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByTestId('TextArea'));
    fireEvent.change(modal, { target: { value: 'another for good measure' } });
    expect(modal.value).toBe('another for good measure');
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('QuestionButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByTestId('QuestionOverlay'));
    expect(modal).toBeVisible();
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('QuestionButton'));
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByTestId('FormSubmit'));
    expect(modal).toBeVisible();
  });
});

// test('form modal contains filled summary forms', async () => {
//   const button = await waitFor(() => screen.getByText(/add a review/i));
//   fireEvent.click(button);
//   const summary = await waitFor(() => screen.getByPlaceholderText(/best purchase/i));
//   fireEvent.change(summary, { target: { value: 'test' } });
//   expect(summary.value).toBe('test');
// });

// test('form modal contains body forms', async () => {
//   const button = await waitFor(() => screen.getByText(/add a review/i));
//   fireEvent.click(button);
//   const body = await waitFor(() => screen.getByPlaceholderText(/why did you like/i));
//   expect(body).toBeVisible();
// });

// test('form modal contains filled summary forms', async () => {
//   const button = await waitFor(() => screen.getByText(/add a review/i));
//   fireEvent.click(button);
//   const body = await waitFor(() => screen.getByPlaceholderText(/why did you like/i));
//   fireEvent.change(body, { target: { value: 'test' } });
//   expect(body.value).toBe('test');
// });

// test('displays more reviews on button click', async () => {
//   const button = await waitFor(() => screen.getByText(/more reviews/i));
//   fireEvent.click(button);
//   const modal = await waitFor(() => screen.getAllByText(/report/i)[3]);
//   expect(modal).toBeVisible();
// });

// test('search bar works', async () => {
//   const search = await waitFor(() => screen.getByPlaceholderText(/search reviews/i));
//   fireEvent.change(search, { target: { value: 'test test test nothing here' } });
//   expect(search.value).toBe('test test test nothing here');
// });
