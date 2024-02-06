import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./Table.types";

const StyledTableHeader = styled.thead<TableHeaderProps>`
  font-weight: bold;
  color: ${(props) =>
    props.theme.textColor
  };
`

const TableHeader:React.FC<TableHeaderProps> =
({ children }) => {
  return <StyledTableHeader>{children}</StyledTableHeader>;
};

export default TableHeader;