import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import Button from "./Button";

describe("Running Test for Button", () => {

  test('renders the Button component', () => {
    render(<Button text='Click me'/>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  test("Check Button Disabled", () => {
    render(<Button text="Button" disabled/>)
    expect(screen.getByRole('button',{name:"Button"})).toBeDisabled();
  });
});
