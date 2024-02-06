import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";

describe("Running Test for Table", () => {
  test("Check Text Front Size", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell>Footer 2</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Cell 2')).toBeInTheDocument();
  });

  test("has correct style when disabled", () => {
    render(
      <Table disabled>
        <TableHeader>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell>Footer 2</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    const table = screen.getByRole('table');
    expect(table).toHaveStyle('background-color: lightgrey');
    expect(table).toHaveStyle('cursor: not-allowed');
    expect(table).toHaveStyle('color: #darkgrey');
  });
});