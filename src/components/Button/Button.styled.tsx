import { getDefaultBgColor, getDefaultBgColorHover } from "../shared/bgColor";
import { getDefaultFullHeight } from "../shared/fullHeight";
import { getDefaultFullWidth } from "../shared/fullWidth";
import { getDefaultNoScroll } from "../shared/noScroll";
import {
  getDefaultShadowColor,
  getDefaultShadowColorHover,
} from "../shared/shadowColor";
import { getDefaultShapes } from "../shared/shape";
import { getDefaultTextColor } from "../shared/textColor";
import { getDefaultTextVariants } from "../shared/textVariant";
import { getDefaultTransition } from "../shared/transition";
import { Stitches } from "../stitches/stitches.config";
import { opacity } from "../utils/opacity";
import { getButtonAlign } from "./properties/buttonAlign";
import { getButtonSizes } from "./properties/buttonSize";
import { getButtonVariant } from "./properties/buttonVariant";

export const _ButtonStyled = Stitches.styled(
  "button",

  // Defaults
  getDefaultShapes(),
  getDefaultBgColor(),
  getDefaultBgColorHover(),
  getDefaultShadowColor(),
  getDefaultShadowColorHover(),

  getDefaultTextColor("contrast"),
  getDefaultTextVariants("label"),

  getDefaultFullWidth(),
  getDefaultFullHeight(),

  getDefaultTransition(),
  getDefaultNoScroll(),

  // Button
  getButtonSizes(),
  getButtonAlign(),
  getButtonVariant(),

  {
    borderStyle: "solid",
    borderWidth: Stitches.theme.space.border.value,

    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",

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
