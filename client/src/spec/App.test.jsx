import React from 'react';
import '@testing-library/jest-dom';
import { describe, test, expect } from '@jest/globals';
import {
  render,
  screen,
  act,
  waitFor,
} from '@testing-library/react';
import testServer from './testServer.js';
import App from '../App.jsx';

const { mainProduct } = require('./JSONdata/allData.js');

beforeAll(() => testServer.listen());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());
beforeAll(() => {
  act(() => {
    render(<App mainProduct={mainProduct} />);
  });
});

describe('App', () => {
  test('renders to the DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('app'));
    expect(appContainer).toBeInTheDocument();
  });
});
