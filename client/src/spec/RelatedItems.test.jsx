import React from 'react';
import {
  render,
  screen,
  act,
  waitFor,
} from '@testing-library/react';
import { test, expect } from '@jest/globals';
import RelatedItemsModule from '../Related_Items/components/RelatedItemsModule.jsx';
import testServer from './testServer.js';
import '@testing-library/jest-dom';

const { mainProduct } = require('./JSONdata/allData.js');

beforeAll(() => testServer.listen());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());
beforeEach(() => {
  act(() => {
    render(<RelatedItemsModule mainProduct={mainProduct} />);
  });
});

describe('Related Items', () => {
  test('renders Related Items module to DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('relateditems'));
    expect(appContainer).toBeInTheDocument();
  });
});
