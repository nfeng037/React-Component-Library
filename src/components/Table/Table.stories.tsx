// Table.stories.tsx

import React from "react";
import { Meta, Story } from '@storybook/react';
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";
import { TableProps } from "./Table.types";

const meta: Meta<TableProps> = {
  title: "Components/Table",
  component: Table,
};

export default meta;

const Template: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>Row 1, Cell 1</TableCell>
        <TableCell>Row 1, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 2, Cell 1</TableCell>
        <TableCell>Row 2, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 3, Cell 1</TableCell>
        <TableCell>Row 3, Cell 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row 4, Cell 1</TableCell>
        <TableCell>Row 4, Cell 2</TableCell>
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

// Default Table
export const Default = Template.bind({});
Default.args = {
};

export const DisabledTable = Template.bind({});
DisabledTable.args = {
  disabled: true,
};
