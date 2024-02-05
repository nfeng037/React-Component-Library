import React from "react";

export interface LabelProps {
  text?: String;
  size?: "small" | "medium" | "large";
  htmlFor: String;
  color?: String;
}