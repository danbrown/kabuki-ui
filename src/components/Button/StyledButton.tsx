import { getDefaultBgColor, getDefaultBgColorHover } from "../shared/bgColor";
import { getDefaultNoScroll } from "../shared/noScroll";
import { getDefaultShapes } from "../shared/shape";
import { getDefaultTextColor } from "../shared/textColor";
import { getDefaultTextVariants } from "../shared/textVariant";
import { getDefaultTransition } from "../shared/transition";
import { Stitches } from "../stitches.config";
import { getButtonAlign } from "./buttonAlign";
import { getButtonSizes } from "./buttonSize";

export const StyledButton = Stitches.styled(
  "button",
  getDefaultBgColor(),
  getDefaultBgColorHover(),
  getDefaultTextColor("contrast"),
  getDefaultShapes(),
  getButtonSizes(),
  getButtonAlign(),
  getDefaultTextVariants("label"),
  getDefaultTransition(),
  getDefaultNoScroll(),
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
