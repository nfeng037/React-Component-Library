import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";
import { typeScale } from "../../utils";

const StyledButton = styled.button<ButtonProps>`
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "8px"
      : props.size === "medium"
      ? "12px 25px"
      : "18px 32px"};
  border: none;
  font-size: ${typeScale.paragraph};
  border-radius: 1rem;
  min-width: 80px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  transition: background-color 0.3s linear, color 0.3s linear;

  background-color: ${(props) =>
    props.primary ? props.theme.primaryColor : props.theme.secondaryColor};
  color: ${(props) =>
    props.primary
      ? props.theme.textColorOnPrimary
      : props.theme.textColorOnSecondary};

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? props.theme.primaryHoverColor
        : props.theme.secondaryHoverColor};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.primaryColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) =>
      props.primary
        ? props.theme.primaryActiveColor
        : props.theme.secondaryActiveColor};
  }

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${(props) =>
    props.isSuccess &&
    `
    background-color: ${props.theme.status.successColor};
    &:hover {
      background-color: ${props.theme.status.successHoverColor};
    }
    &:focus {
      outline: 2px solid ${props.theme.status.successColor};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${props.theme.status.successActiveColor};
    }
  `}

  ${(props) =>
    props.isError &&
    `
    background-color: ${props.theme.status.errorColor};
    &:hover {
      background-color: ${props.theme.status.errorHoverColor};
    }
    &:focus {
      outline: 2px solid ${props.theme.status.errorColor};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${props.theme.status.errorActiveColor};
    }
  `}

  ${(props) =>
    props.isWarning &&
    `
    background-color: ${props.theme.status.warningColor};
    &:hover {
      background-color: ${props.theme.status.warningHoverColor};
    }
    &:focus {
      outline: 2px solid ${props.theme.status.warningColor};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${props.theme.status.warningActiveColor};
    }
  `}
`;

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  disabled = false,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      size={size}
      {...props}
      aria-disabled={disabled ? true : undefined}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
