// function to populate a property with all the colors in the theme
export const themeColorset = (colorset: string, property = null) => ({
  background: {
    [colorset]: "$colors$background",
    [property]: colorset,
  },
  highlight: {
    [colorset]: "$colors$highlight",
    [property]: colorset,
  },
  shade: {
    [colorset]: "$colors$shade",
    [property]: colorset,
  },
  text: {
    [colorset]: "$colors$text",
    [property]: colorset,
  },
  subtext: {
    [colorset]: "$colors$subtext",
    [property]: colorset,
  },

  primaryLighter: {
    [colorset]: "$colors$primaryLighter",
    [property]: colorset,
  },
  primaryLight: {
    [colorset]: "$colors$primaryLight",
    [property]: colorset,
  },
  primary: {
    [colorset]: "$colors$primary",
    [property]: colorset,
  },
  primaryDark: {
    [colorset]: "$colors$primaryDark",
    [property]: colorset,
  },
  primaryDarker: {
    [colorset]: "$colors$primaryDarker",
    [property]: colorset,
  },
  primaryShadow: {
    [colorset]: "$colors$primaryShadow",
    [property]: colorset,
  },

  secondaryLighter: {
    [colorset]: "$colors$secondaryLighter",
    [property]: colorset,
  },
  secondaryLight: {
    [colorset]: "$colors$secondaryLight",
    [property]: colorset,
  },
  secondary: {
    [colorset]: "$colors$secondary",
    [property]: colorset,
  },
  secondaryDark: {
    [colorset]: "$colors$secondaryDark",
    [property]: colorset,
  },
  secondaryDarker: {
    [colorset]: "$colors$secondaryDarker",
    [property]: colorset,
  },
  secondaryShadow: {
    [colorset]: "$colors$secondaryShadow",
    [property]: colorset,
  },

  successLighter: {
    [colorset]: "$colors$successLighter",
    [property]: colorset,
  },
  successLight: {
    [colorset]: "$colors$successLight",
    [property]: colorset,
  },
  success: {
    [colorset]: "$colors$success",
    [property]: colorset,
  },
  successDark: {
    [colorset]: "$colors$successDark",
    [property]: colorset,
  },
  successDarker: {
    [colorset]: "$colors$successDarker",
    [property]: colorset,
  },
  successShadow: {
    [colorset]: "$colors$successShadow",
    [property]: colorset,
  },

  warningLighter: {
    [colorset]: "$colors$warningLighter",
    [property]: colorset,
  },
  warningLight: {
    [colorset]: "$colors$warningLight",
    [property]: colorset,
  },
  warning: {
    [colorset]: "$colors$warning",
    [property]: colorset,
  },
  warningDark: {
    [colorset]: "$colors$warningDark",
    [property]: colorset,
  },
  warningDarker: {
    [colorset]: "$colors$warningDarker",
    [property]: colorset,
  },
  warningShadow: {
    [colorset]: "$colors$warningShadow",
    [property]: colorset,
  },

  dangerLighter: {
    [colorset]: "$colors$dangerLighter",
    [property]: colorset,
  },
  dangerLight: {
    [colorset]: "$colors$dangerLight",
    [property]: colorset,
  },
  danger: { [colorset]: "$colors$danger", [property]: colorset },
  dangerDark: { [colorset]: "$colors$dangerDark", [property]: colorset },
  dangerDarker: { [colorset]: "$colors$dangerDarker", [property]: colorset },
  dangerShadow: { [colorset]: "$colors$dangerShadow", [property]: colorset },

  infoLighter: { [colorset]: "$colors$infoLighter", [property]: colorset },
  infoLight: { [colorset]: "$colors$infoLight", [property]: colorset },
  info: { [colorset]: "$colors$info", [property]: colorset },
  infoDark: { [colorset]: "$colors$infoDark", [property]: colorset },
  infoDarker: { [colorset]: "$colors$infoDarker", [property]: colorset },
  infoShadow: { [colorset]: "$colors$infoShadow", [property]: colorset },

  basicLighter: { [colorset]: "$colors$basicLighter", [property]: colorset },
  basicLight: { [colorset]: "$colors$basicLight", [property]: colorset },
  basic: { [colorset]: "$colors$basic", [property]: colorset },
  basicDark: { [colorset]: "$colors$basicDark", [property]: colorset },
  basicDarker: { [colorset]: "$colors$basicDarker", [property]: colorset },
  basicShadow: { [colorset]: "$colors$basicShadow", [property]: colorset },

  unset: { [colorset]: "unset", [property]: colorset },

  // HTML Normal Colors
  red: { [colorset]: "$colors$red", [property]: colorset },
  orange: { [colorset]: "$colors$orange", [property]: colorset },
  yellow: { [colorset]: "$colors$yellow", [property]: colorset },
  green: { [colorset]: "$colors$green", [property]: colorset },
  teal: { [colorset]: "$colors$teal", [property]: colorset },
  blue: { [colorset]: "$colors$blue", [property]: colorset },
  indigo: { [colorset]: "$colors$indigo", [property]: colorset },
  purple: { [colorset]: "$colors$purple", [property]: colorset },
  pink: { [colorset]: "$colors$pink", [property]: colorset },
  brown: { [colorset]: "$colors$brown", [property]: colorset },
  gray: { [colorset]: "$colors$gray", [property]: colorset },
  black: { [colorset]: "$colors$black", [property]: colorset },
  white: { [colorset]: "$colors$white", [property]: colorset },
});
