import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Label from "./Label";

describe("Running Test for Label", () => {
  test("Check Label Front Size", () => {
    render(<Label htmlFor="username" size="large" text="Label"/>)
    const labelElement = screen.getByText('Label');
    expect(labelElement).toBeInTheDocument();
  });

  test('has correct style when disabled', () => {
    render(<Label htmlFor="username" disabled text='Disabled Label'/>);
    const label = screen.getByText('Disabled Label');
    expect(label).toHaveStyle('background-color: grey');
  });

})
