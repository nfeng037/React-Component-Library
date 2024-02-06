import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from "./Table.types";


const StyledTableRow = styled.tr<TableRowProps>`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export default TableRow;
