import { htmlColors } from "./htmlColors";

// function to populate a property with all the colors in the theme
export const themeColorset = (colorset: string) => ({
  background: { [colorset]: "$colors$background" },
  highlight: { [colorset]: "$colors$highlight" },
  shade: { [colorset]: "$colors$shade" },
  text: { [colorset]: "$colors$text" },
  subtext: { [colorset]: "$colors$subtext" },

  primaryLighter: { [colorset]: "$colors$primaryLighter" },
  primaryLight: { [colorset]: "$colors$primaryLight" },
  primary: { [colorset]: "$colors$primary" },
  primaryDark: { [colorset]: "$colors$primaryDark" },
  primaryDarker: { [colorset]: "$colors$primaryDarker" },
  primaryShadow: { [colorset]: "$colors$primaryShadow" },

  secondaryLighter: { [colorset]: "$colors$secondaryLighter" },
  secondaryLight: { [colorset]: "$colors$secondaryLight" },
  secondary: { $$bgColor: "$colors$secondary" },
  secondaryDark: { [colorset]: "$colors$secondaryDark" },
  secondaryDarker: { [colorset]: "$colors$secondaryDarker" },
  secondaryShadow: { [colorset]: "$colors$secondaryShadow" },

  successLighter: { [colorset]: "$colors$successLighter" },
  successLight: { [colorset]: "$colors$successLight" },
  success: { [colorset]: "$colors$success" },
  successDark: { [colorset]: "$colors$successDark" },
  successDarker: { [colorset]: "$colors$successDarker" },
  successShadow: { [colorset]: "$colors$successShadow" },

  warningLighter: { [colorset]: "$colors$warningLighter" },
  warningLight: { [colorset]: "$colors$warningLight" },
  warning: { [colorset]: "$colors$warning" },
  warningDark: { [colorset]: "$colors$warningDark" },
  warningDarker: { [colorset]: "$colors$warningDarker" },
  warningShadow: { [colorset]: "$colors$warningShadow" },

  dangerLighter: { [colorset]: "$colors$dangerLighter" },
  dangerLight: { [colorset]: "$colors$dangerLight" },
  danger: { [colorset]: "$colors$danger" },
  dangerDark: { [colorset]: "$colors$dangerDark" },
  dangerDarker: { [colorset]: "$colors$dangerDarker" },
  dangerShadow: { [colorset]: "$colors$dangerShadow" },

  infoLighter: { [colorset]: "$colors$infoLighter" },
  infoLight: { [colorset]: "$colors$infoLight" },
  info: { [colorset]: "$colors$info" },
  infoDark: { [colorset]: "$colors$infoDark" },
  infoDarker: { [colorset]: "$colors$infoDarker" },
  infoShadow: { [colorset]: "$colors$infoShadow" },

  basicLighter: { [colorset]: "$colors$basicLighter" },
  basicLight: { [colorset]: "$colors$basicLight" },
  basic: { [colorset]: "$colors$basic" },
  basicDark: { [colorset]: "$colors$basicDark" },
  basicDarker: { [colorset]: "$colors$basicDarker" },
  basicShadow: { [colorset]: "$colors$basicShadow" },

  // HTML Normal Colors
  red: { [colorset]: "$colors$red" },
  orange: { [colorset]: "$colors$orange" },
  yellow: { [colorset]: "$colors$yellow" },
  green: { [colorset]: "$colors$green" },
  teal: { [colorset]: "$colors$teal" },
  blue: { [colorset]: "$colors$blue" },
  indigo: { [colorset]: "$colors$indigo" },
  purple: { [colorset]: "$colors$purple" },
  pink: { [colorset]: "$colors$pink" },
  brown: { [colorset]: "$colors$brown" },
  gray: { [colorset]: "$colors$gray" },
  black: { [colorset]: "$colors$black" },
  white: { [colorset]: "$colors$white" },
});
