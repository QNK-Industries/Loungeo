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
// import AddAnswerModal from '../Questions_Answers/AnswerSearch.jsx';

beforeAll(() => testServer.listen());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());
beforeEach(() => {
  act(() => {
    render(<AnswerSearch />);
  });
});

describe('Search', () => {
  test('Should render Search', () => {
    render(<AnswerSearch />);
  });
});

test('Renders question search input', async () => {
  const searchContainer = await waitFor(() => screen.getByTestId('question-search-input'));
  expect(searchContainer).toBeInTheDocument();
});

// test('displays the modal on button click', async () => {
//   const button = await waitFor(() => screen.getByText(/add a review/i));
//   fireEvent.click(button);
//   const modal = await waitFor(() => screen.getByText(/write your review/i));
//   expect(modal).toBeVisible();
// });

// test('form modal contains summary forms', async () => {
//   const button = await waitFor(() => screen.getByText(/add a review/i));
//   fireEvent.click(button);
//   const summary = await waitFor(() => screen.getByPlaceholderText(/best purchase/i));
//   expect(summary).toBeVisible();
// });

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
