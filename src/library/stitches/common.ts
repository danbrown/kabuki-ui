import { lightTheme } from "../theme/light";
import { htmlColors } from "../utils/htmlColors";
import { passProp } from "../utils/passProp";

// TOKENS
export const commonTokens = {
  fonts: {
    default:
      '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },

  breakpoints: {
    "@initial": 0,
    "@sm": 650,
    "@md": 960,
    "@lg": 1280,
    "@xl": 1400,
    "@xxl": 1920,
  },
};

// COLORS
export const commonColors = {
  // HTML COLORS
  ...htmlColors,

  // THEME COLORS
  background: lightTheme.palette.background,
  highlight: lightTheme.palette.highlight,
  shade: lightTheme.palette.shade,
  text: lightTheme.palette.text,
  subtext: lightTheme.palette.subtext,
  shadow: lightTheme.palette.basic.shadow,

  primaryLighter: lightTheme.palette.primary[100],
  primaryLight: lightTheme.palette.primary[300],
  primary: lightTheme.palette.primary[500],
  primaryDark: lightTheme.palette.primary[700],
  primaryDarker: lightTheme.palette.primary[900],
  primaryShadow: lightTheme.palette.primary.shadow,

  secondaryLighter: lightTheme.palette.secondary[100],
  secondaryLight: lightTheme.palette.secondary[300],
  secondary: lightTheme.palette.secondary[500],
  secondaryDark: lightTheme.palette.secondary[700],
  secondaryDarker: lightTheme.palette.secondary[900],
  secondaryShadow: lightTheme.palette.secondary.shadow,

  dangerLighter: lightTheme.palette.danger[100],
  dangerLight: lightTheme.palette.danger[300],
  danger: lightTheme.palette.danger[500],
  dangerDark: lightTheme.palette.danger[700],
  dangerDarker: lightTheme.palette.danger[900],
  dangerShadow: lightTheme.palette.danger.shadow,

  warningLighter: lightTheme.palette.warning[100],
  warningLight: lightTheme.palette.warning[300],
  warning: lightTheme.palette.warning[500],
  warningDark: lightTheme.palette.warning[700],
  warningDarker: lightTheme.palette.warning[900],
  warningShadow: lightTheme.palette.warning.shadow,

  successLighter: lightTheme.palette.success[100],
  successLight: lightTheme.palette.success[300],
  success: lightTheme.palette.success[500],
  successDark: lightTheme.palette.success[700],
  successDarker: lightTheme.palette.success[900],
  successShadow: lightTheme.palette.success.shadow,

  infoLighter: lightTheme.palette.info[100],
  infoLight: lightTheme.palette.info[300],
  info: lightTheme.palette.info[500],
  infoDark: lightTheme.palette.info[700],
  infoDarker: lightTheme.palette.info[900],
  infoShadow: lightTheme.palette.info.shadow,

  basicLighter: lightTheme.palette.basic[100],
  basicLight: lightTheme.palette.basic[300],
  basic: lightTheme.palette.basic[500],
  basicDark: lightTheme.palette.basic[700],
  basicDarker: lightTheme.palette.basic[900],
  basicShadow: lightTheme.palette.basic.shadow,
};

// SPACE
export const commonSpace = {
  none: 0,
  unit: 8,
  border: 1,
  roundRadius: "1.5em",
  roundedRadius: "0.7em",
  squareRadius: "0em",
};

// SHAPES
export const commonShapes = {
  // SQUARE VARIANTS
  square: commonSpace.squareRadius,

  // ROUND VARIANTS
  round: commonSpace.roundRadius,
  roundTop: `${commonSpace.roundRadius} ${commonSpace.roundRadius} 0 0`,
  roundBottom: `0 0 ${commonSpace.roundRadius} ${commonSpace.roundRadius}`,
  roundRight: `0 ${commonSpace.roundRadius} ${commonSpace.roundRadius} 0`,
  roundLeft: `${commonSpace.roundRadius} 0 0 ${commonSpace.roundRadius}`,
  roundTopRight: `0 ${commonSpace.roundRadius} 0 0`,
  roundTopLeft: `${commonSpace.roundRadius} 0 0 0`,
  roundBottomLeft: `0 0 0 ${commonSpace.roundRadius}`,
  roundBottomRight: `0 0 ${commonSpace.roundRadius} 0`,
  roundBottomRightDrop: `${commonSpace.roundRadius} ${commonSpace.roundRadius} 0 ${commonSpace.roundRadius}`,
  roundBottomLeftDrop: `${commonSpace.roundRadius} ${commonSpace.roundRadius} ${commonSpace.roundRadius} 0`,
  roundTopRightDrop: `${commonSpace.roundRadius} 0 ${commonSpace.roundRadius} ${commonSpace.roundRadius}`,
  roundTopLeftDrop: `0 ${commonSpace.roundRadius} ${commonSpace.roundRadius} ${commonSpace.roundRadius}`,
  roundOpposite1: `${commonSpace.roundRadius} 0 ${commonSpace.roundRadius} 0`,
  roundOpposite2: `0 ${commonSpace.roundRadius} 0 ${commonSpace.roundRadius}`,

  // ROUNDED VARIANTS
  rounded: commonSpace.roundedRadius,
  roundedTop: `${commonSpace.roundedRadius} ${commonSpace.roundedRadius} 0 0`,
  roundedBottom: `0 0 ${commonSpace.roundedRadius} ${commonSpace.roundedRadius}`,
  roundedRight: `0 ${commonSpace.roundedRadius} ${commonSpace.roundedRadius} 0`,
  roundedLeft: `${commonSpace.roundedRadius} 0 0 ${commonSpace.roundedRadius}`,
  roundedTopRight: `0 ${commonSpace.roundedRadius} 0 0`,
  roundedTopLeft: `${commonSpace.roundedRadius} 0 0 0`,
  roundedBottomRight: `0 0 0 ${commonSpace.roundedRadius}`,
  roundedBottomLeft: `0 0 ${commonSpace.roundedRadius} 0`,
  roundedTopRightBottom: `${commonSpace.roundedRadius} ${commonSpace.roundedRadius} 0 ${commonSpace.roundedRadius}`,
  roundedTopLeftBottom: `${commonSpace.roundedRadius} ${commonSpace.roundedRadius} ${commonSpace.roundedRadius} 0`,
  roundedBottomRightTop: `${commonSpace.roundedRadius} 0 ${commonSpace.roundedRadius} ${commonSpace.roundedRadius}`,
  roundedBottomLeftTop: `0 ${commonSpace.roundedRadius} ${commonSpace.roundedRadius} ${commonSpace.roundedRadius}`,
  roundedOpposite1: `${commonSpace.roundedRadius} 0 ${commonSpace.roundedRadius} 0`,
  roundedOpposite2: `0 ${commonSpace.roundedRadius} 0 ${commonSpace.roundedRadius}`,
};

// TRANSITIONS
export const commonTransitions = {
  none: "none",
  faster: "50ms ease-in-out",
  fast: "100ms ease-in-out",
  normal: "200ms ease-in-out",
  slow: "400ms ease-in-out",
  slower: "600ms ease-in-out",
};

// UTILS
export const commonUtils = {
  // margin utils
  m: passProp("margin"),
  mt: passProp("marginTop"),
  mr: passProp("marginRight"),
  mb: passProp("marginBottom"),
  ml: passProp("marginLeft"),
  mx: passProp("marginLeft", "marginRight"),
  my: passProp("marginTop", "marginBottom"),

  // padding utils
  p: passProp("padding"),
  pt: passProp("paddingTop"),
  pr: passProp("paddingRight"),
  pb: passProp("paddingBottom"),
  pl: passProp("paddingLeft"),
  px: passProp("paddingLeft", "paddingRight"),
  py: passProp("paddingTop", "paddingBottom"),

  // no scroll (disable scrollbars)
  noScroll: (value: boolean) =>
    value
      ? {
          /* Firefox */
          scrollbarWidth: "none",

          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Chrome, Safari, Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }
      : {},
};

// MEDIA BREAKPOINTS
export const commonMedia = {
  sm: `(min-width: ${commonTokens.breakpoints["@sm"]}px)`,
  md: `(min-width: ${commonTokens.breakpoints["@md"]}px)`,
  lg: `(min-width: ${commonTokens.breakpoints["@lg"]}px)`,
  xl: `(min-width: ${commonTokens.breakpoints["@xl"]}px)`,
  xxl: `(min-width: ${commonTokens.breakpoints["@xxl"]}px)`,
};

// THEME COMPILATION
export const commonTheme = {
  prefix: "kbk",
  theme: {
    ...commonTokens,
    shapes: { ...commonShapes },
    colors: { ...commonColors },
    transitions: { ...commonTransitions },
    space: { ...commonSpace },
  },
  media: { ...commonMedia },
  utils: { ...commonUtils },
};
