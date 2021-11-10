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
import RelatedItemsModule from '../Related_Items/components/RelatedItemsModule.jsx';
import testServer from './testServer.js';
import '@testing-library/jest-dom';

const { mainProduct } = require('./JSONdata/allData.js');

describe('Related Items', () => {
  beforeAll(() => testServer.listen());
  afterEach(() => testServer.resetHandlers());
  afterAll(() => testServer.close());
  beforeEach(() => {
    act(() => {
      render(<RelatedItemsModule mainProduct={mainProduct} />);
    });
  });

  test('renders Related Items module to DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('relateditems'));
    expect(appContainer).toBeInTheDocument();
  });

  test('displays carousol text', async () => {
    const carousol = await waitFor(() => screen.getByText(/add to outfit/i));
    expect(carousol).toBeVisible();
  });

  test('displays individual cards', async () => {
    const card = await waitFor(() => screen.getByText(/yeasy/i));
    expect(card).toBeVisible();
  });

  test('displays the card action button', async () => {
    const action = await waitFor(() => screen.getAllByAltText(/action/i)[0]);
    expect(action).toBeVisible();
  });

  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getAllByAltText(/action/i)[0]);
    fireEvent.click(button);
    const modal = await waitFor(() => screen.getByText(/comparing/i));
    expect(modal).toBeVisible();
  });
});
