import React from 'react';
import { render } from '@testing-library/react';
import Overview from './components/index.jsx';

test('renders correctly', () => {
  const {getByText} = render(<Overview />)
  expect(getByText())
})