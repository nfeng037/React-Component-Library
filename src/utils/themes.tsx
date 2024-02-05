import { primaryColor, successColor, errorColor, warningColor, neutral} from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: primaryColor[100],
  primaryHoverColor: primaryColor[200],
  primaryActiveColor: primaryColor[300],
  primaryFocusColor: primaryColor[300],
  secondaryColor: neutral[500],
  secondaryHoverColor: neutral[400],
  secondaryActiveColor: neutral[600],
  textColorOnPrimary: neutral[100],
  textColorOnSecondary: neutral[100],
  textColor: neutral[500],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[300],
  textOnDisabled: neutral[100],
  status: {
    warningColor: warningColor[100],
    warningHoverColor: warningColor[200],
    wariningActiveColor: warningColor[300],
    errorColor: errorColor[100],
    errorHoverColor: errorColor[200],
    errorActiveColor: errorColor[300],
    successColor: successColor[100],
    successHoverColor:successColor[200],
    successActiveColor: successColor[300]
  }
}


export const darkTheme = {
  primaryColor: neutral[300],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  primaryFocusColor: neutral[300],
  textColorOnPrimary: neutral[100],
  textColorOnSecondary: neutral[100],
  textColor: neutral[300],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[100],
  status: {
    warningColor: warningColor[100],
    warningHoverColor: warningColor[200],
    wariningActiveColor: warningColor[300],
    errorColor: errorColor[100],
    errorHoverColor: errorColor[200],
    errorActiveColor: errorColor[300],
    successColor: successColor[100],
    successHoverColor:successColor[200],
    successActiveColor: successColor[300]
  }
}