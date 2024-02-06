import React from "react";
import { styled } from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:disabled {
    background-color: #f3f3f3;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  id,
  name,
  value,
  onChange,
  options,
  disabled = false,
}) => {
  return (
    <Select id={id} name={name} value={value} onChange={onChange} disabled={disabled}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;