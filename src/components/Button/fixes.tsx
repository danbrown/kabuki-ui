import { contrast, opacity } from "@wipsie/ui";
import { isThemePalette } from "../utils/isThemePalette";
import { ButtonProps } from "./Button.types";

export const fixBtnBgColor = (props: ButtonProps, theme: any) => {
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

export const fixBtnBgColorHover = (props: ButtonProps, theme: any) => {
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

export const fixBtnTextColor = (props: any, theme: any) => {
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

export const fixBtnBorderColor = (props: ButtonProps, theme: any) => {
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

export const fixBtnBorderColorHover = (props: ButtonProps, theme: any) => {
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
