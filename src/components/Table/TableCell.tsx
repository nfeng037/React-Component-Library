import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from "./Table.types";


const StyledTableCell = styled.td<TableCellProps>`
  padding: 8px;
  text-align: ${props => props.align || 'center'};
`;

const TableCell: React.FC<TableCellProps> = ({
  children,
 align='center'
}) => {
  return (<StyledTableCell align={align}>{children}</StyledTableCell>);
};

export default TableCell;
