/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Answers from '../Questions_Answers/components/Answers.jsx';

describe('Questions', () => {
  test('renders module component', () => {
    render(<Answers />);
  });
});
