import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from "./Table.types";


const StyledTableFooter = styled.tfoot<TableFooterProps>`
    width: 100%;
`;

const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <StyledTableFooter>{children}</StyledTableFooter>;
};

export default TableFooter;
