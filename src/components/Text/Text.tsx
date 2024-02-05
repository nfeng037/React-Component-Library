import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";
import { typeScale } from "../../utils";

const StyledText = styled.span<TextProps>`
  font-family: "Playfair Display", serif;
  font-size: ${(props) =>
    props.types === "header"
      ? typeScale.header3
      : props.types === "paragraph"
      ? typeScale.paragraph
      : typeScale.copyrightText};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-style: ${(props) => (props.italic ? "italic" : "normal")};
`;

const Text: React.FC<TextProps> = ({
  types = "paragraph",
  bold,
  italic,
  text,
  ...props
}) => {
  return (
    <StyledText types={types} bold={bold} italic={italic} {...props}>
      {text}
    </StyledText>
  );
};

export default Text;
