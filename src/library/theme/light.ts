import {
  defaultFont,
  defaultBreakpoints,
  commonPalette,
  defaultExpressiveness,
} from "./shared";

export const lightTheme = {
  type: "light",

  palette: {
    ...commonPalette,

    highlight: "#F7F9FC",
    background: "#FFFFFF",
    shade: "#EEF1F6",
    subtext: "#818B9F",
    text: "#000000",
    basic: {
      100: "#FFFFFF",
      300: "#F7F9FC",
      500: "#EEF1F6",
      700: "#C4CDD5",
      900: "#919EAB",
      shadow: "#818B9F3D",
    },
    primary: {
      100: "#FAC8E6",
      300: "#E15AC5",
      500: "#9C0097",
      700: "#600070",
      900: "#32004A",
      shadow: "#9C00973D",
    },
    secondary: {
      100: "#FFF9D4",
      300: "#FFE67E",
      500: "#FFCC29",
      700: "#B78814",
      900: "#7A5307",
      shadow: "#FFCC293D",
    },
    success: {
      100: "#DDF7ED",
      300: "#6ADFB0",
      500: "#04CB7B",
      700: "#027B4A",
      900: "#004E2F",
      shadow: "#04CB7B3D",
    },
    info: {
      100: "#D6E4FF",
      300: "#84A9FF",
      500: "#3366FF",
      700: "#1939B7",
      900: "#091A7A",
      shadow: "#3366FF3D",
    },
    warning: {
      100: "#FFF7CC",
      300: "#FFE266",
      500: "#FFC300",
      700: "#B78300",
      900: "#7A5100",
      shadow: "#FFC3003D",
    },
    danger: {
      100: "#FEE7DA",
      300: "#FCA491",
      500: "#F54949",
      700: "#B0243C",
      900: "#750E31",
      shadow: "#F549493D",
    },
  },

  font: defaultFont,

  breakpoints: defaultBreakpoints,

  expressiveness: defaultExpressiveness,
};
