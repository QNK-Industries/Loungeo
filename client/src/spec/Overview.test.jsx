import React from 'react';
import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import { test, expect } from '@jest/globals';
import testServer from './testServer.js';
import Overview from '../Overview/index.jsx';
import '@testing-library/jest-dom';

beforeAll(() => testServer.listen());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());
beforeAll(() => {
  act(() => {
    render(<Overview />);
  });
});

describe('Overview', () => {
  test('renders image selector to the DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('ImageSelector'));
    expect(appContainer).toBeInTheDocument();
  });

  test('renders primary image to the DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('DefaultView'));
    expect(appContainer).toBeInTheDocument();
  });

  test('renders expanded view to the DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('ExpandedView'));
    expect(appContainer).toBeInTheDocument();
  });

  test('renders product info to the DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('ProductInfo'));
    expect(appContainer).toBeInTheDocument();
  });

  test('renders style selector to the DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('StyleSelector'));
    expect(appContainer).toBeInTheDocument();
  });

  test('renders default image div to the dom', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('DefaultImageDiv'));
    expect(appContainer).toBeInTheDocument();
  });
  test('renders default image img to the dom', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('DefaultImageImg'));
    expect(appContainer).toBeInTheDocument();
  });
  test('renders expanded image div to the dom', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('ExpandedImageDiv'));
    expect(appContainer).toBeInTheDocument();
  });
  test('renders expanded image img to the dom', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('ExpandedImageImg'));
    expect(appContainer).toBeInTheDocument();
  });
  test('renders expanded image img to the dom', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('ExpandedImageBox'));
    expect(appContainer).toBeInTheDocument();
  });
  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getByAltText(''));
    fireEvent.click(button);
    const img = await waitFor(() => screen.getByAltText(''));
    expect(img).toBeVisible();
  });
  test('displays the modal on button click', async () => {
    const button = await waitFor(() => screen.getAllByRole('button'));
    fireEvent.click(button);
    const img = await waitFor(() => screen.getByRole('button'));
    expect(img).toBeVisible();
  });
  test('displays expanded on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('ExpandedImageImg'));
    fireEvent.click(button);
    const img = await waitFor(() => screen.getByTestId('DefaultImageImg'));
    expect(img).toBeVisible();
  });
  test('displays default on button click', async () => {
    const button = await waitFor(() => screen.getByTestId('DefaultImageImg'));
    fireEvent.click(button);
    const img = await waitFor(() => screen.getByTestId('ExpandedImageImg'));
    expect(img).toBeVisible();
  });
});
