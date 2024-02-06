import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Img from './Img';

describe('Img', () => {
  it('renders the component', () => {
    const { getByAltText } = render(<Img src="test.jpg" alt="Test" />);
    expect(getByAltText('Test')).toBeVisible();
  });

  it('changes opacity when disabled', () => {
    const { getByAltText } = render(<Img src="test.jpg" alt="Test" disabled />);
    expect(getByAltText('Test')).toHaveStyle('opacity: 0.5');
  });
});
