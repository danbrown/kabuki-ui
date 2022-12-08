import { createStitches } from "@stitches/react";
import { lightTheme } from "../themes/light";
import { themeDefaultConfigs } from "./stitches.config";
import { htmlColors } from "./utils/htmlColors";

// returns a function that takes a value and returns an object with the prop and value, used in margin and padding utils
const passProp =
  (...props: string[]) =>
  (value: string | number) =>
    value && props.reduce((acc, prop) => ({ ...acc, [prop]: value }), {});

// The Main Stitches object
export const Stitches = createStitches({
  prefix: "kbk",
  theme: {
    shapes: {
      round: themeDefaultConfigs.roundRadius,
      roundTop: `${themeDefaultConfigs.roundRadius} ${themeDefaultConfigs.roundRadius} 0 0`,
      roundBottom: `0 0 ${themeDefaultConfigs.roundRadius} ${themeDefaultConfigs.roundRadius}`,
      roundRight: `0 ${themeDefaultConfigs.roundRadius} ${themeDefaultConfigs.roundRadius} 0`,
      roundLeft: `${themeDefaultConfigs.roundRadius} 0 0 ${themeDefaultConfigs.roundRadius}`,
      roundTopRight: `0 ${themeDefaultConfigs.roundRadius} 0 0`,
      roundTopLeft: `${themeDefaultConfigs.roundRadius} 0 0 0`,
      roundBottomLeft: `0 0 0 ${themeDefaultConfigs.roundRadius}`,
      roundBottomRight: `0 0 ${themeDefaultConfigs.roundRadius} 0`,
      roundBottomRightDrop: `${themeDefaultConfigs.roundRadius} ${themeDefaultConfigs.roundRadius} 0 ${themeDefaultConfigs.roundRadius}`,
      roundBottomLeftDrop: `${themeDefaultConfigs.roundRadius} ${themeDefaultConfigs.roundRadius} ${themeDefaultConfigs.roundRadius} 0`,
      roundTopRightDrop: `${themeDefaultConfigs.roundRadius} 0 ${themeDefaultConfigs.roundRadius} ${themeDefaultConfigs.roundRadius}`,
      roundTopLeftDrop: `0 ${themeDefaultConfigs.roundRadius} ${themeDefaultConfigs.roundRadius} ${themeDefaultConfigs.roundRadius}`,
      roundOpposite1: `${themeDefaultConfigs.roundRadius} 0 ${themeDefaultConfigs.roundRadius} 0`,
      roundOpposite2: `0 ${themeDefaultConfigs.roundRadius} 0 ${themeDefaultConfigs.roundRadius}`,

      rounded: themeDefaultConfigs.roundedRadius,
      roundedTop: `${themeDefaultConfigs.roundedRadius} ${themeDefaultConfigs.roundedRadius} 0 0`,
      roundedBottom: `0 0 ${themeDefaultConfigs.roundedRadius} ${themeDefaultConfigs.roundedRadius}`,
      roundedRight: `0 ${themeDefaultConfigs.roundedRadius} ${themeDefaultConfigs.roundedRadius} 0`,
      roundedLeft: `${themeDefaultConfigs.roundedRadius} 0 0 ${themeDefaultConfigs.roundedRadius}`,
      roundedTopRight: `0 ${themeDefaultConfigs.roundedRadius} 0 0`,
      roundedTopLeft: `${themeDefaultConfigs.roundedRadius} 0 0 0`,
      roundedBottomRight: `0 0 0 ${themeDefaultConfigs.roundedRadius}`,
      roundedBottomLeft: `0 0 ${themeDefaultConfigs.roundedRadius} 0`,
      roundedTopRightBottom: `${themeDefaultConfigs.roundedRadius} ${themeDefaultConfigs.roundedRadius} 0 ${themeDefaultConfigs.roundedRadius}`,
      roundedTopLeftBottom: `${themeDefaultConfigs.roundedRadius} ${themeDefaultConfigs.roundedRadius} ${themeDefaultConfigs.roundedRadius} 0`,
      roundedBottomRightTop: `${themeDefaultConfigs.roundedRadius} 0 ${themeDefaultConfigs.roundedRadius} ${themeDefaultConfigs.roundedRadius}`,
      roundedBottomLeftTop: `0 ${themeDefaultConfigs.roundedRadius} ${themeDefaultConfigs.roundedRadius} ${themeDefaultConfigs.roundedRadius}`,
      roundedOpposite1: `${themeDefaultConfigs.roundedRadius} 0 ${themeDefaultConfigs.roundedRadius} 0`,
      roundedOpposite2: `0 ${themeDefaultConfigs.roundedRadius} 0 ${themeDefaultConfigs.roundedRadius}`,

      square: themeDefaultConfigs.squareRadius,
    },
    colors: {
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

      ...htmlColors,
    },
    transitions: {
      none: "none",
      faster: `${themeDefaultConfigs.timings.faster.duration} ${themeDefaultConfigs.timings.faster.easing}`,
      fast: `${themeDefaultConfigs.timings.fast.duration} ${themeDefaultConfigs.timings.fast.easing}`,
      normal: `${themeDefaultConfigs.timings.normal.duration} ${themeDefaultConfigs.timings.normal.easing}`,
      slow: `${themeDefaultConfigs.timings.slow.duration} ${themeDefaultConfigs.timings.slow.easing}`,
      slower: `${themeDefaultConfigs.timings.slower.duration} ${themeDefaultConfigs.timings.slower.easing}`,
    },
    space: {
      none: 0,
      unit: themeDefaultConfigs.unit,
      border: themeDefaultConfigs.border,
    },
  },

  media: {
    bp1: "(min-width: 480px)",
  },

  utils: {
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
  },
});
