import { opacity } from "../utils/opacity";
import { contrast } from "../utils/contrast";
import { isThemePalette } from "../utils/isThemePalette";
import { ButtonProps } from "./Button.types";
import { Stitches } from "../stitches/stitches";

export const fixButtonBgColor = (props: ButtonProps) => {
  const { variant, bgColor, disabled } = props;

  return {};
};

export const fixButtonBgColorHover = (props: ButtonProps) => {
  const { variant, bgColor, bgColorHover, disabled } = props;

  if (!disabled && !bgColorHover && isThemePalette(bgColor)) {
    switch (variant) {
      case "contained":
        return {
          backgroundColor: Stitches.theme.colors[`${bgColor}300`].value,
        };
      case "outlined":
      case "ghost":
      case "toon":
      default:
        return {
          backgroundColor: opacity(
            Stitches.theme.colors[`${bgColor}`].value,
            8
          ),
        };
    }
  }

  return {};
};

export const fixButtonTextColor = (props: any) => {
  const { variant, bgColor, textColor, disabled }: any = props;

  if (!disabled && textColor === "contrast" && isThemePalette(bgColor)) {
    switch (variant) {
      case "contained":
        return { color: contrast(Stitches.theme.colors[`${bgColor}`].value) };
      case "outlined":
      case "ghost":
      case "toon":
      default:
        return { color: Stitches.theme.colors[`${bgColor}`].value };
    }
  }

  return {};
};

export const fixButtonBorderColor = (props: ButtonProps) => {
  const { variant, bgColor, disabled }: any = props;

  if (!disabled && isThemePalette(bgColor)) {
    switch (variant) {
      case "ghost":
        return { borderColor: "transparent" };
      case "contained":
      case "outlined":
      case "toon":
      default:
        return { borderColor: Stitches.theme.colors[`${bgColor}`].value };
    }
  }

  return {};
};

export const fixButtonBorderColorHover = (props: ButtonProps) => {
  const { variant, bgColor, bgColorHover, disabled }: any = props;

  if (!disabled && !bgColorHover && isThemePalette(bgColor)) {
    switch (variant) {
      case "contained":
        return { borderColor: Stitches.theme.colors[`${bgColor}300`].value };
      case "ghost":
        return { borderColor: "transparent" };
      case "outlined":
      default:
        return { borderColor: Stitches.theme.colors[`${bgColor}`].value };
    }
  }

  return {};
};

// Disabled fixes
export const fixButtonDisabled = (props: ButtonProps) => {
  const { disabled }: any = props;

  if (disabled) {
    return {
      cursor: "not-allowed",
      backgroundColor: opacity(Stitches.theme.colors.shade.value, 100),
      borderColor: opacity(Stitches.theme.colors.shade.value, 100),
      color: opacity(Stitches.theme.colors.text.value, 40),
    };
  }

  return {};
};

export const fixButtonDisabledHover = (props: ButtonProps) => {
  const { disabled }: any = props;

  if (disabled) {
    return {
      backgroundColor: opacity(Stitches.theme.colors.shade.value, 100),
      borderColor: opacity(Stitches.theme.colors.shade.value, 100),
      color: opacity(Stitches.theme.colors.text.value, 40),
    };
  }

  return {};
};
