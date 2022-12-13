import { getDefaultBgColor, getDefaultBgColorHover } from "../shared/bgColor";
import { getDefaultClickable } from "../shared/clickable";
import {
  getDefaultDisplay,
  getDefaultFlexAlign,
  getDefaultFlexDirection,
  getDefaultFlexJustify,
  getDefaultFlexWrap,
} from "../shared/flex";
import { getDefaultFullHeight } from "../shared/fullHeight";
import { getDefaultFullWidth } from "../shared/fullWidth";
import { getDefaultNoScroll } from "../shared/noScroll";
import { getDefaultShapes } from "../shared/shape";
import { getDefaultTextColor } from "../shared/textColor";
import { getDefaultTextVariants } from "../shared/textVariant";
import { getDefaultTransition } from "../shared/transition";
import { Stitches } from "../stitches/stitches.config";

export const _ContainerStyled = Stitches.styled(
  "div",

  // Defaults
  getDefaultShapes("rounded"),
  getDefaultBgColor("background"),
  getDefaultBgColorHover(),

  getDefaultTextColor("contrast"),
  getDefaultTextVariants("body1"),

  getDefaultFullWidth(),
  getDefaultFullHeight(),

  getDefaultTransition(),
  getDefaultNoScroll(),
  getDefaultClickable(),

  // Flex Props
  getDefaultDisplay("block"),
  getDefaultFlexDirection("column"),
  getDefaultFlexAlign("start"),
  getDefaultFlexJustify("start"),
  getDefaultFlexWrap("wrap"),

  // Container Props

  {
    backgroundColor: "$$bgColor",
    color: "$$textColor",
    "&:hover": {
      backgroundColor: "$$bgColorHover",
    },
  }
);
