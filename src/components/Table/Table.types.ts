import React from "react";

export interface TableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableHeaderProps {
  children: React.ReactNode;
}

export interface TableRowProps {
  children: React.ReactNode;
}

export interface TableCellProps {
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
}

export interface TableFooterProps {
  children: React.ReactNode;
}