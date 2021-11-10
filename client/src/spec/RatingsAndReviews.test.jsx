import React from 'react';
import {
  render,
  screen,
  act,
  waitFor,
} from '@testing-library/react';
import { test, expect } from '@jest/globals';
import testServer from './testServer.js';
import RatingsAndReviewsModule from '../Ratings_Reviews/RatingsAndReviewsModule.jsx';
import '@testing-library/jest-dom';

const { mainProduct } = require('./JSONdata/allData.js');

beforeAll(() => testServer.listen());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());
beforeAll(() => {
  act(() => {
    render(<RatingsAndReviewsModule mainProduct={mainProduct} />);
  });
});

describe('Ratings and Reviews', () => {
  test('renders Review widget to DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('ratingstable'));
    expect(appContainer).toBeInTheDocument();
  });
});
