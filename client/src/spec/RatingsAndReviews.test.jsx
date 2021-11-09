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

const staticItem = {
  id: 61575, campus: 'hr-sfo', name: 'Camo Onesie', slogan: 'Blend in to your crowd', description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.', category: 'Jackets', default_price: '140.00', created_at: '2021-10-28T19:58:54.904Z', updated_at: '2021-10-28T19:58:54.904Z', features: [{ feature: 'Fabric', value: 'Canvas' }, { feature: 'Buttons', value: 'Brass' }],
};

beforeAll(() => testServer.listen());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());
beforeAll(() => {
  act(() => {
    render(<RatingsAndReviewsModule mainProduct={staticItem} />);
  });
});

describe('Ratings and Reviews', () => {
  test('renders Review widget to DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('ratingstable'));
    expect(appContainer).toBeInTheDocument();
  });

  test('renders Product Breakdown to DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('ratingsslidebar'));
    expect(appContainer).toBeInTheDocument();
  });
});
