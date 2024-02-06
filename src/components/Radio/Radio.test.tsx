import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { Radio } from './Radio';

test('radio is visible', () => {
  render(<Radio id="radio1" name="radio" value="value1" />);
  const radioElement = screen.getByRole('radio');
  expect(radioElement).toBeVisible();
});

test('radio is disabled', () => {
  render(<Radio id="radio2" name="radio" value="value2" disabled />);
  const radioElement = screen.getByRole('radio');
  expect(radioElement).toBeDisabled();
});
