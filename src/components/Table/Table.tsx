import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border: none;
  ${(props) => props.disabled && `
    background-color: lightgrey;
    cursor: not-allowed;
    color: #darkgrey;
  `}
`;

const Table: React.FC<TableProps> = (props) => {
  return <StyledTable {...props}>{props.children}</StyledTable>;
};


export default Table;
