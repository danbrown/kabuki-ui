import { lightTheme } from "@wipsie/ui";
import { createStitches } from "@stitches/react";
import { themeDefaultConfigs } from "./theme.config";

export const Stitches = createStitches({
  prefix: "wps",
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

      primary100: lightTheme.palette.primary[100],
      primary300: lightTheme.palette.primary[300],
      primary: lightTheme.palette.primary[500],
      primary700: lightTheme.palette.primary[700],
      primary900: lightTheme.palette.primary[900],
      primaryShadow: lightTheme.palette.primary.shadow,

      secondary100: lightTheme.palette.secondary[100],
      secondary300: lightTheme.palette.secondary[300],
      secondary: lightTheme.palette.secondary[500],
      secondary700: lightTheme.palette.secondary[700],
      secondary900: lightTheme.palette.secondary[900],
      secondaryShadow: lightTheme.palette.secondary.shadow,

      danger100: lightTheme.palette.danger[100],
      danger300: lightTheme.palette.danger[300],
      danger: lightTheme.palette.danger[500],
      danger700: lightTheme.palette.danger[700],
      danger900: lightTheme.palette.danger[900],
      dangerShadow: lightTheme.palette.danger.shadow,

      warning100: lightTheme.palette.warning[100],
      warning300: lightTheme.palette.warning[300],
      warning: lightTheme.palette.warning[500],
      warning700: lightTheme.palette.warning[700],
      warning900: lightTheme.palette.warning[900],
      warningShadow: lightTheme.palette.warning.shadow,

      success100: lightTheme.palette.success[100],
      success300: lightTheme.palette.success[300],
      success: lightTheme.palette.success[500],
      success700: lightTheme.palette.success[700],
      success900: lightTheme.palette.success[900],
      successShadow: lightTheme.palette.success.shadow,

      info100: lightTheme.palette.info[100],
      info300: lightTheme.palette.info[300],
      info: lightTheme.palette.info[500],
      info700: lightTheme.palette.info[700],
      info900: lightTheme.palette.info[900],
      infoShadow: lightTheme.palette.info.shadow,

      basic100: lightTheme.palette.basic[100],
      basic300: lightTheme.palette.basic[300],
      basic: lightTheme.palette.basic[500],
      basic700: lightTheme.palette.basic[700],
      basic900: lightTheme.palette.basic[900],
      basicShadow: lightTheme.palette.basic.shadow,
    },
    transitions: {
      none: "none",
      faster: `${themeDefaultConfigs.transitions.faster.duration} ${themeDefaultConfigs.transitions.faster.easing}`,
      fast: `${themeDefaultConfigs.transitions.fast.duration} ${themeDefaultConfigs.transitions.fast.easing}`,
      normal: `${themeDefaultConfigs.transitions.normal.duration} ${themeDefaultConfigs.transitions.normal.easing}`,
      slow: `${themeDefaultConfigs.transitions.slow.duration} ${themeDefaultConfigs.transitions.slow.easing}`,
      slower: `${themeDefaultConfigs.transitions.slower.duration} ${themeDefaultConfigs.transitions.slower.easing}`,
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    // margin utils
    m: (value: string | number) => ({ margin: value }),
    mt: (value: string | number) => ({ marginTop: value }),
    mr: (value: string | number) => ({ marginRight: value }),
    mb: (value: string | number) => ({ marginBottom: value }),
    ml: (value: string | number) => ({ marginLeft: value }),
    mx: (value: string | number) => ({ marginLeft: value, marginRight: value }),
    my: (value: string | number) => ({ marginTop: value, marginBottom: value }),

    // padding utils
    p: (value: string | number) => ({ padding: value }),
    pt: (value: string | number) => ({ paddingTop: value }),
    pr: (value: string | number) => ({ paddingRight: value }),
    pb: (value: string | number) => ({ paddingBottom: value }),
    pl: (value: string | number) => ({ paddingLeft: value }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    noScroll: (value: boolean) =>
      value
        ? {
            scrollbarWidth: "none" /* Firefox */,
            "-ms-overflow-style": "none" /* IE and Edge */,

            "&::-webkit-scrollbar": {
              display: "none",
            } /* Chrome, Safari, Opera */,
          }
        : {},
  },
});
