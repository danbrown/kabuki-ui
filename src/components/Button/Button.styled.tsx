import { getDefaultBgColor, getDefaultBgColorHover } from "../shared/bgColor";
import { getDefaultNoScroll } from "../shared/noScroll";
import {
  getDefaultShadowColor,
  getDefaultShadowColorHover,
} from "../shared/shadowColor";
import { getDefaultShapes } from "../shared/shape";
import { getDefaultTextColor } from "../shared/textColor";
import { getDefaultTextVariants } from "../shared/textVariant";
import { getDefaultTransition } from "../shared/transition";
import { Stitches } from "../stitches/stitches";
import { opacity } from "../utils/opacity";
import { getButtonAlign } from "./properties/buttonAlign";
import { getButtonSizes } from "./properties/buttonSize";
import { getButtonVariant } from "./properties/buttonVariant";

export const _ButtonStyled = Stitches.styled(
  "button",

  // Defaults
  getDefaultBgColor(),
  getDefaultBgColorHover(),
  getDefaultShadowColor(),
  getDefaultShadowColorHover(),
  getDefaultTextColor("contrast"),
  getDefaultShapes(),
  getDefaultTextVariants("label"),
  getDefaultTransition(),
  getDefaultNoScroll(),

  // Button
  getButtonSizes(),
  getButtonAlign(),
  getButtonVariant(),

  {
    borderStyle: "solid",
    borderWidth: "1px",

    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",

    borderRadius: "$$shape",

    variants: {
      // Chip
      chip: {
        true: {},
        false: {
          cursor: "pointer",
        },
      },
    },

    defaultVariants: {
      chip: false,
    },
  }
);
