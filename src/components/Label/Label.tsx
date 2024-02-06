import React from "react";
import styled from "styled-components";
import { typeScale } from "../../utils";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  font-size: ${(props) =>
    props.size === "small"
    ? typeScale.helperText
    : props.size === "medium"
    ? typeScale.paragraph
    : typeScale.header5
  };
  font-family: "Playfair Display", serif;
  cursor: pointer;
  color: ${(props) =>
    props.theme.textColor
  };
  ${(props) => props.disabled && `
    background-color: grey;
    cursor: not-allowed;
    color: #ccc;
  `}
`;

const Label: React.FC<LabelProps> = ({
  size = "medium",
  htmlFor,
  text,
  disabled = false,
  ...props
}) => {
  return (
    <StyledLabel
      size={size}
      htmlFor={htmlFor}
      disabled={disabled}
      {...props}
    >
      {text}
    </StyledLabel>
  );
}

export default Label;
