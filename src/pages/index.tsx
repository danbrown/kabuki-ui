import Head from "next/head";
import Image from "next/image";
import {
  contrast,
  opacity,
  brightness,
  Page,
  ThemeProvider,
  useTheme,
  lightTheme,
  Button as WipsieButton,
  Modify,
  CssBaseline,
  Spacing,
} from "@wipsie/ui";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  CSS,
  createStitches,
  VariantProps,
  $$ThemeValue,
} from "@stitches/react";

type CommonProps = {
  as?: keyof JSX.IntrinsicElements;
  css?: CSS;
};

// get to know if is a theme palette color
function isThemePalette(type: any) {
  if (typeof type !== "string") return;
  switch (type) {
    case "primary":
    case "secondary":
    case "success":
    case "info":
    case "warning":
    case "danger":
    case "basic":
      return true;
    default:
      return false;
  }
}

// get to know if is a theme palette color including the backgrounds
function isThemePaletteFull(type: string) {
  if (typeof type !== "string") return;
  switch (type) {
    case "primary":
    case "secondary":
    case "success":
    case "info":
    case "warning":
    case "danger":
    case "basic":
    case "background":
    case "shade":
    case "highlight":
    case "text":
    case "subtext":
      return true;
    default:
      return false;
  }
}

type OldButtonProps = {
  /**
   * If buttom component will be a chip
   */
  chip?: boolean;
  /**
   * What background color to use
   */
  bgColor?: BgColorVariants;
  /**
   * What background color to use on hover
   */
  hoverBackgroundColor?: any | string | null;
  /**
   * What text color to use
   */
  color?: any | string | null;
  /**
   * What text color to use on hover
   */
  hoverColor?: any | string | null;
  /**
   * How large should the button be
   */
  size?: any;
  /**
   * Button variant
   */
  variant?: "contained" | "outlined" | "ghost";
  /**
   * Button group variant if inside a button group
   */
  groupVariant?: "contained" | "outlined" | "ghost";
  /**
   * Button shape if inside a button group
   */
  groupShape?: "round" | "rounded" | "square" | undefined;
  /**
   * What background color to use if inside a button group
   */
  groupBackgroundColor?: any | string;
  /**
   * What background color to use on hover if inside a button group
   */
  groupHoverBackgroundColor?: any | string | null;
  /**
   * What text color to use if inside a button group
   */
  groupColor?: any | string | null;
  /**
   * What text color to use if inside a button group on hover
   */
  groupHoverColor?: any | string | null;
  /**
   * How large should the button be if inside a button group
   */
  groupSize?: any;

  /**
   * Button type
   */
  type?: "button" | "submit" | "reset" | undefined;
  /**
   * Button shape
   */
  shape?: "round" | "rounded" | "square" | undefined;
  /**
   * If the button should max the container width
   */
  fullWidth?: boolean;
  /**
   * The content alignment
   */
  align?: "left" | "center" | "right" | "spaced";
  /**
   * If the button should be disabled
   */
  active?: boolean;
};

type ButtonProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  CommonProps &
    AdornmentProps &
    AllowedCssPadding &
    AllowedCssMargin &
    DefaultButtonProps & {
      /**
       * Button contents
       */
      label?: string | React.ElementType;
    }
>;

type AdornmentProps = {
  /**
   * Adornment to add on the left side of the component
   */
  startAdornment?: any | undefined;
  /**
   * Adornment to add on the right side of the component
   */
  endAdornment?: any | undefined;
};

const themeDefaultConfigs = {
  unit: 8,
  roundRadius: "1.5em",
  roundedRadius: "0.7em",
  squareRadius: "0em",
  transitions: {
    faster: {
      duration: "50ms",
      easing: "ease-in-out",
    },
    fast: {
      duration: "100ms",
      easing: "ease-in-out",
    },
    normal: {
      duration: "200ms",
      easing: "ease-in-out",
    },
    slow: {
      duration: "400ms",
      easing: "ease-in-out",
    },
    slower: {
      duration: "600ms",
      easing: "ease-in-out",
    },
  },
};

const themeColorset = (colorset: string) => ({
  background: { [colorset]: "$colors$background" },
  highlight: { [colorset]: "$colors$highlight" },
  shade: { [colorset]: "$colors$shade" },
  text: { [colorset]: "$colors$text" },
  subtext: { [colorset]: "$colors$subtext" },

  primary_lighter: { [colorset]: "$colors$primary100" },
  primary_light: { [colorset]: "$colors$primary300" },
  primary: { [colorset]: "$colors$primary" },
  primary_dark: { [colorset]: "$colors$primary700" },
  primary_darker: { [colorset]: "$colors$primary900" },

  secondary_lighter: { [colorset]: "$colors$secondary100" },
  secondary_light: { [colorset]: "$colors$secondary300" },
  secondary: { $$bgColor: "$colors$secondary" },
  secondary_dark: { [colorset]: "$colors$secondary700" },
  secondary_darker: { [colorset]: "$colors$secondary900" },

  success_lighter: { [colorset]: "$colors$success100" },
  success_light: { [colorset]: "$colors$success300" },
  success: { [colorset]: "$colors$success" },
  success_dark: { [colorset]: "$colors$success700" },
  success_darker: { [colorset]: "$colors$success900" },

  warning_lighter: { [colorset]: "$colors$warning100" },
  warning_light: { [colorset]: "$colors$warning300" },
  warning: { [colorset]: "$colors$warning" },
  warning_dark: { [colorset]: "$colors$warning700" },
  warning_darker: { [colorset]: "$colors$warning900" },

  danger_lighter: { [colorset]: "$colors$danger100" },
  danger_light: { [colorset]: "$colors$danger300" },
  danger: { [colorset]: "$colors$danger" },
  danger_dark: { [colorset]: "$colors$danger700" },
  danger_darker: { [colorset]: "$colors$danger900" },

  info_lighter: { [colorset]: "$colors$info100" },
  info_light: { [colorset]: "$colors$info300" },
  info: { [colorset]: "$colors$info" },
  info_dark: { [colorset]: "$colors$info700" },
  info_darker: { [colorset]: "$colors$info900" },

  basic_lighter: { [colorset]: "$colors$basic100" },
  basic_light: { [colorset]: "$colors$basic300" },
  basic: { [colorset]: "$colors$basic" },
  basic_dark: { [colorset]: "$colors$basic700" },
  basic_darker: { [colorset]: "$colors$basic900" },
});

const Stitches = createStitches({
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
    m: (value) => ({ margin: value }),
    mt: (value) => ({ marginTop: value }),
    mr: (value) => ({ marginRight: value }),
    mb: (value) => ({ marginBottom: value }),
    ml: (value) => ({ marginLeft: value }),
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    my: (value) => ({ marginTop: value, marginBottom: value }),

    // padding utils
    p: (value) => ({ padding: value }),
    pt: (value) => ({ paddingTop: value }),
    pr: (value) => ({ paddingRight: value }),
    pb: (value) => ({ paddingBottom: value }),
    pl: (value) => ({ paddingLeft: value }),
    px: (value) => ({ paddingLeft: value, paddingRight: value }),
    py: (value) => ({ paddingTop: value, paddingBottom: value }),
  },
});

// MARGINS
type AllowedCssMargin = Partial<{
  m?: number | string;
  mx?: number | string;
  my?: number | string;
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
}>;
const cssMargin = (props: AllowedCssMargin) => {
  const { m, mb, ml, mr, mt, mx, my } = props;
  return {
    mb: typeof mb === "number" ? `${mb * themeDefaultConfigs.unit}px` : mb,
    ml: typeof ml === "number" ? `${ml * themeDefaultConfigs.unit}px` : ml,
    mr: typeof mr === "number" ? `${mr * themeDefaultConfigs.unit}px` : mr,
    mt: typeof mt === "number" ? `${mt * themeDefaultConfigs.unit}px` : mt,
    mx: typeof mx === "number" ? `${mx * themeDefaultConfigs.unit}px` : mx,
    my: typeof my === "number" ? `${my * themeDefaultConfigs.unit}px` : my,
    m: typeof m === "number" ? `${m * themeDefaultConfigs.unit}px` : m,
  };
};

// PADDINGS
type AllowedCssPadding = Partial<{
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pb?: number | string;
  pl?: number | string;
  pr?: number | string;
}>;
const cssPadding = (props: AllowedCssPadding) => {
  const { p, pb, pl, pr, pt, px, py } = props;
  return {
    pb: typeof pb === "number" ? `${pb * themeDefaultConfigs.unit}px` : pb,
    pl: typeof pl === "number" ? `${pl * themeDefaultConfigs.unit}px` : pl,
    pr: typeof pr === "number" ? `${pr * themeDefaultConfigs.unit}px` : pr,
    pt: typeof pt === "number" ? `${pt * themeDefaultConfigs.unit}px` : pt,
    px: typeof px === "number" ? `${px * themeDefaultConfigs.unit}px` : px,
    py: typeof py === "number" ? `${py * themeDefaultConfigs.unit}px` : py,
    p: typeof p === "number" ? `${p * themeDefaultConfigs.unit}px` : p,
  };
};

// TRANSITIONS
type TransitionVariants = VariantProps<typeof defaultTransition>;
type TransitionProperty = TransitionVariants["transition"];
const getDefaultTransition = (defaultValue = "normal") =>
  Stitches.css({
    variants: {
      transition: {
        faster: { transition: "$transitions$faster" },
        fast: { transition: "$transitions$fast" },
        normal: { transition: "$transitions$normal" },
        slow: { transition: "$transitions$slow" },
        slower: { transition: "$transitions$slower" },
      },
    },
    defaultVariants: {
      transition: defaultValue,
    },
  });
const defaultTransition = getDefaultTransition();

// BG COLOR
type TextColorVariants = VariantProps<typeof defaultTextColor>;
type TextColorProperty = TextColorVariants["textColor"];
const getDefaultTextColor = (defaultValue = "text") =>
  Stitches.css({
    variants: {
      textColor: {
        ...themeColorset("$$textColor"),
        inherit: { color: "inherit" },
        contrast: {},
      },
    },
    defaultVariants: {
      textColor: defaultValue,
    },
  });
const defaultTextColor = getDefaultTextColor();

// BG COLOR
type BgColorVariants = VariantProps<typeof defaultBgColor>;
type BgColorProperty = BgColorVariants["bgColor"];
const getDefaultBgColor = (defaultValue = "primary") =>
  Stitches.css({
    variants: {
      bgColor: themeColorset("$$bgColor"),
    },
    defaultVariants: {
      bgColor: defaultValue,
    },
  });
const defaultBgColor = getDefaultBgColor();

// BG COLOR Hover
type BgColorHoverVariants = VariantProps<typeof defaultBgColorHover>;
type BgColorHoverProperty = BgColorHoverVariants["bgColorHover"];
const getDefaultBgColorHover = (defaultValue = "primary") =>
  Stitches.css({
    variants: {
      bgColorHover: themeColorset("$$bgColorHover"),
    },
    defaultVariants: {
      bgColorHover: defaultValue,
    },
  });
const defaultBgColorHover = getDefaultBgColorHover();

// SHAPES
type ShapeVariants = VariantProps<typeof defaultShapes>;
type ShapeProperty = ShapeVariants["shape"];
const getDefaultShapes = (defaultValue = "round") =>
  Stitches.css({
    variants: {
      shape: {
        round: { $$shape: "$shapes$round" },
        roundTop: { $$shape: "$shapes$roundTop" },
        roundBottom: { $$shape: "$shapes$roundBottom" },
        roundLeft: { $$shape: "$shapes$roundLeft" },
        roundRight: { $$shape: "$shapes$roundRight" },
        roundTopLeft: { $$shape: "$shapes$roundTopLeft" },
        roundTopRight: { $$shape: "$shapes$roundTopRight" },
        roundBottomRight: { $$shape: "$shapes$roundBottomRight" },
        roundBottomLeft: { $$shape: "$shapes$roundBottomLeft" },
        roundBottomLeftDrop: { $$shape: "$shapes$roundBottomLeftDrop" },
        roundBottomRightDrop: { $$shape: "$shapes$roundBottomRightDrop" },
        roundTopLeftDrop: { $$shape: "$shapes$roundTopLeftDrop" },
        roundTopRightDrop: { $$shape: "$shapes$roundTopRightDrop" },
        roundOpposite1: { $$shape: "$shapes$roundOpposite1" },
        roundOpposite2: { $$shape: "$shapes$roundOpposite2" },

        rounded: { $$shape: "$shapes$rounded" },
        roundedTop: { $$shape: "$shapes$roundedTop" },
        roundedBottom: { $$shape: "$shapes$roundedBottom" },
        roundedLeft: { $$shape: "$shapes$roundedLeft" },
        roundedRight: { $$shape: "$shapes$roundedRight" },
        roundedTopLeft: { $$shape: "$shapes$roundedTopLeft" },
        roundedTopRight: { $$shape: "$shapes$roundedTopRight" },
        roundedBottomLeft: { $$shape: "$shapes$roundedBottomLeft" },
        roundedBottomRight: { $$shape: "$shapes$roundedBottomRight" },
        roundedTopLeftBottom: { $$shape: "$shapes$roundedTopLeftBottom" },
        roundedTopRightBottom: { $$shape: "$shapes$roundedTopRightBottom" },
        roundedBottomLeftTop: { $$shape: "$shapes$roundedBottomLeftTop" },
        roundedBottomRightTop: { $$shape: "$shapes$roundedBottomRightTop" },
        roundedOpposite1: { $$shape: "$shapes$roundedOpposite1" },
        roundedOpposite2: { $$shape: "$shapes$roundedOpposite2" },

        square: { $$shape: "$shapes$square" },
      },
    },

    defaultVariants: {
      shape: defaultValue,
    },
  });
const defaultShapes = getDefaultShapes();

// TEXT VARIANTS
type TextVariants = VariantProps<typeof defaultTextVariants>;
type TextProperty = TextVariants["textVariant"];
const getDefaultTextVariants = (defaultValue = "body1") =>
  Stitches.css({
    variants: {
      textVariant: {
        h1: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "2em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        h2: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1.5em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        h3: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1.17em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        h4: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        h5: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "0.85em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        h6: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "0.75em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        subtitle1: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        subtitle2: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 500,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        body1: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 500,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        body2: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 300,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        caption1: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 300,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        caption2: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 300,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        code: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 300,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        label: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "0.8em",
          fontWeight: 700,
          textTransform: "uppercase",
          lineHeight: 1,
          letterSpacing: "",
        },
      },
    },
    defaultVariants: {
      textVariant: defaultValue,
    },
  });
const defaultTextVariants = getDefaultTextVariants();

// BUTTON SIZES
type ButtonSizeVariants = VariantProps<typeof buttonSizes>;
type ButtonSizeProperty = ButtonSizeVariants["size"];
const getButtonSizes = (defaultValue = "medium") =>
  Stitches.css({
    variants: {
      size: {
        micro: { padding: "2px 4px", fontSize: "0.5rem" },
        mini: { padding: "4px 6px", fontSize: "0.625em" },
        small: { padding: "6px 8px", fontSize: "0.75rem" },
        medium: { padding: "8px 10px", fontSize: "0.875rem" },
        large: { padding: "10px 14px", fontSize: "1rem" },
        huge: { padding: "12px 16px", fontSize: "1.1rem" },
        colossal: { padding: "14px 18px", fontSize: "1.25rem" },
      },
    },
    defaultVariants: {
      size: defaultValue,
    },
  });
const buttonSizes = getButtonSizes();

// BUTTON ALIGN
type ButtonAlignVariants = VariantProps<typeof buttonAlign>;
type ButtonAlignProperty = ButtonAlignVariants["align"];
const getButtonAlign = (defaultValue = "medium") =>
  Stitches.css({
    variants: {
      align: {
        left: {
          justifyContent: "flex-start",
          alignItems: "left",
        },
        center: {
          justifyContent: "center",
          textAlign: "center",
        },
        right: {
          justifyContent: "flex-end",
          textAlign: "right",
        },
        justify: {
          justifyContent: "space-between",
          textAlign: "center",
        },
      },
    },
    defaultVariants: {
      align: defaultValue,
    },
  });
const buttonAlign = getButtonAlign();

type DefaultButtonProps = VariantProps<typeof StyledButton>;
const StyledButton = Stitches.styled(
  "button",
  getDefaultBgColor(),
  getDefaultBgColorHover(),
  getDefaultTextColor("contrast"),
  getDefaultShapes(),
  getButtonSizes(),
  getButtonAlign(),
  getDefaultTextVariants("label"),
  getDefaultTransition(),
  {
    borderStyle: "solid",
    borderWidth: "1px",

    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",

    borderRadius: "$$shape",

    variants: {
      // button variants
      variant: {
        contained: {
          backgroundColor: "$$bgColor",
          borderColor: "$$bgColor",
          "&:hover": {
            backgroundColor: "$$bgColorHover",
            borderColor: "$$bgColorHover",
          },
        },
        outlined: {
          backgroundColor: "transparent",
          borderColor: "$$bgColor",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "$$bgColorHover",
          },
        },
        ghost: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        },
      },

      // Chip
      chip: {
        true: {},
        false: {
          cursor: "pointer",
        },
      },

      // Disabled
      disabled: {
        true: {
          cursor: "not-allowed",
          "&:hover": {},
        },
        false: {},
      },
    },

    defaultVariants: {
      variant: "contained",
      chip: false,
    },
  }
);

const fixBtnBgColor = (props: ButtonProps, theme: any) => {
  const { variant, bgColor, disabled }: any = props;

  if (disabled) {
    return {
      backgroundColor: opacity(theme.palette.shade, 100),
    };
  }

  if (isThemePalette(bgColor)) {
    switch (variant) {
      case "outlined":
        return {
          backgroundColor: "transparent",
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
        };
      default:
      case "contained":
        return {
          backgroundColor: theme.palette[bgColor][500],
        };
    }
  }

  return {};
};

const fixBtnBgColorHover = (props: ButtonProps, theme: any) => {
  const { variant, bgColor, bgColorHover, disabled }: any = props;

  if (disabled) {
    return {
      backgroundColor: opacity(theme.palette.shade, 100),
    };
  }
  if (!bgColorHover && isThemePalette(bgColor)) {
    switch (variant) {
      case "outlined":
        return {
          backgroundColor: opacity(theme.palette[bgColor][500], 8),
        };
      case "ghost":
        return {
          backgroundColor: opacity(theme.palette[bgColor][500], 8),
        };
      case "contained":
      default:
        return {
          backgroundColor: theme.palette[bgColor][300],
        };
    }
  }

  return {};
};

const fixBtnTextColor = (props: any, theme: any) => {
  const { variant, bgColor, textColor, disabled }: any = props;

  if (disabled) {
    return { color: opacity(theme.palette.text, 40) };
  }

  if (textColor === "contrast" && isThemePalette(bgColor)) {
    switch (variant) {
      case "outlined":
      case "ghost":
        return {
          color: theme.palette[bgColor][500],
        };
      case "contained":
      default:
        return {
          color: contrast(theme.palette[bgColor][500]),
        };
    }
  }

  return {};
};

const fixBtnBorderColor = (props: ButtonProps, theme: any) => {
  const { variant, bgColor, disabled }: any = props;

  if (disabled) {
    return {
      borderColor: opacity(theme.palette.shade, 100),
    };
  }

  if (isThemePalette(bgColor)) {
    switch (variant) {
      case "ghost":
        return {
          borderColor: "transparent",
        };
      case "outlined":
      case "contained":
      default:
        return {
          borderColor: theme.palette[bgColor][500],
        };
    }
  }

  return {};
};

const fixBtnBorderColorHover = (props: ButtonProps, theme: any) => {
  const { variant, bgColor, bgColorHover, disabled }: any = props;

  if (disabled) {
    return {
      borderColor: opacity(theme.palette.shade, 100),
    };
  }

  if (!bgColorHover && isThemePalette(bgColor)) {
    switch (variant) {
      case "ghost":
        return {
          borderColor: "transparent",
        };
      case "outlined":
        return {
          borderColor: theme.palette[bgColor][500],
        };
      case "contained":
      default:
        return {
          borderColor: theme.palette[bgColor][300],
        };
    }
  }

  return {};
};

const ButtonNew = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      variant = "contained",
      chip = false,
      bgColor = "primary",
      bgColorHover = null,
      textColor = "contrast",
      shape = "round",
      size = "medium",
      disabled = false,
      transition = "normal",

      // content
      children,
      label,
      startAdornment,
      endAdornment,

      // margin
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,

      // padding
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,

      // other
      as = null,
      css = {},
      ...otherProps
    } = props;
    const theme = useTheme();

    return (
      <StyledButton
        variant={variant}
        chip={chip}
        bgColor={bgColor}
        bgColorHover={bgColorHover}
        shape={shape}
        disabled={disabled}
        size={size}
        transition={transition}
        as={as}
        ref={ref}
        css={{
          ...cssMargin({ m, mx, my, mt, mr, mb, ml }),
          ...cssPadding({ p, px, py, pt, pr, pb, pl }),
          ...fixBtnBgColor({ variant, bgColor, disabled }, theme),
          ...fixBtnTextColor({ variant, bgColor, textColor, disabled }, theme),
          ...fixBtnBorderColor({ variant, bgColor, disabled }, theme),

          "&:hover": {
            ...fixBtnBgColorHover(
              { variant, bgColor, bgColorHover, disabled },
              theme
            ),
            ...fixBtnBorderColorHover(
              { variant, bgColor, bgColorHover, disabled },
              theme
            ),
          },

          ...css,
        }}
        {...(otherProps as any)}
      >
        <>
          {startAdornment && (
            <span style={{ paddingRight: 5 }}>{startAdornment}</span>
          )}

          {label}
          {children}

          {endAdornment && (
            <span style={{ paddingLeft: 5 }}>{endAdornment}</span>
          )}
        </>
      </StyledButton>
    );
  }
);

export default function Home() {
  return (
    <ThemeProvider theme="light">
      <CssBaseline />
      <Page>
        <Spacing height={2} />
        <ButtonNew
          size="large"
          m={1}
          shape="round"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="large"
          m={1}
          shape="roundTop"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="large"
          m={1}
          shape="roundBottom"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="large"
          m={1}
          shape="roundLeft"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="large"
          m={1}
          shape="roundRight"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="large"
          m={1}
          shape="roundTopLeft"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="large"
          m={1}
          shape="roundTopRight"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="large"
          m={1}
          shape="roundBottomRight"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="large"
          m={1}
          shape="roundBottomLeft"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="large"
          m={1}
          shape="roundTopLeftDrop"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="large"
          m={1}
          shape="roundBottomLeftDrop"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          m={1}
          shape="roundTopRightDrop"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="huge"
          m={1}
          shape="roundBottomRightDrop"
          label="Hello"
          variant="outlined"
        />
        <ButtonNew
          size="colossal"
          m={1}
          shape="roundOpposite1"
          label="Hello"
          variant="outlined"
        />
        <Spacing height={2} />
        <WipsieButton variant="ghost" size="large">
          Hello2
        </WipsieButton>
      </Page>
    </ThemeProvider>
  );
}
