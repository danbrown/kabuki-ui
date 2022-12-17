import {
  getDefaultBgColor,
  getDefaultBgColorHover,
} from "@library/shared/bgColor";
import { getDefaultFullHeight } from "@library/shared/fullHeight";
import { getDefaultFullWidth } from "@library/shared/fullWidth";
import { getDefaultNoScroll } from "@library/shared/noScroll";
import {
  getDefaultShadowColor,
  getDefaultShadowColorHover,
} from "@library/shared/shadowColor";
import { getDefaultShapes } from "@library/shared/shape";
import { getDefaultTextColor } from "@library/shared/textColor";
import { getDefaultTextVariants } from "@library/shared/textVariant";
import { getDefaultTransition } from "@library/shared/transition";
import { Stitches } from "@library/stitches/stitches.config";
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
