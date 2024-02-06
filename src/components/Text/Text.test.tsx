import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Text from "./Text";

describe("Running Test for Text", () => {
  test("Check Text Front Size", () => {
    render(<Text types="paragraph" text="Text"/>)
    const TextElement = screen.getByText('Text');
    expect(TextElement).toBeInTheDocument();
  });

  test('has correct style when disabled', () => {
    render(<Text disabled text='Disabled Text'/>);
    const text = screen.getByText('Disabled Text');
    expect(text).toHaveStyle('background-color: grey');
  });
})