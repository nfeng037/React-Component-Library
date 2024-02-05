import { MouseEventHandler } from "react";

export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isSuccess?: boolean;
  isError?: boolean;
  isWarning?: boolean;
}
