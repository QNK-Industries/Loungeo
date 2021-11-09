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

const staticItem = {
  id: 61575, campus: 'hr-sfo', name: 'Camo Onesie', slogan: 'Blend in to your crowd', description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.', category: 'Jackets', default_price: '140.00', created_at: '2021-10-28T19:58:54.904Z', updated_at: '2021-10-28T19:58:54.904Z', features: [{ feature: 'Fabric', value: 'Canvas' }, { feature: 'Buttons', value: 'Brass' }],
};

beforeAll(() => testServer.listen());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());
beforeEach(() => {
  act(() => {
    render(<RelatedItemsModule mainProduct={staticItem} />);
  });
});

describe('Related Items', () => {
  test('renders Related Items module to DOM', async () => {
    const appContainer = await waitFor(() => screen.getByTestId('relateditems'));
    expect(appContainer).toBeInTheDocument();
  });
});
