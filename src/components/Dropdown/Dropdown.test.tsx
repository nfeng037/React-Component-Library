import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('renders the Dropdown component', () => {
    render(
      <Dropdown
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
        value="option1"
        onChange={() => {}}
      />
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('disabled state changes background color', () => {
    render(
      <Dropdown
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
        ]}
        value="option1"
        onChange={() => {}}
        disabled
      />
    );

    expect(screen.getByRole('combobox')).toHaveStyle('background-color: #f3f3f3');
  });
});
