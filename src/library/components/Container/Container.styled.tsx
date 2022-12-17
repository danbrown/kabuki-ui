import {
  getDefaultBgColor,
  getDefaultBgColorHover,
} from "@library/shared/bgColor";
import { getDefaultClickable } from "@library/shared/clickable";
import {
  getDefaultDisplay,
  getDefaultFlexAlign,
  getDefaultFlexDirection,
  getDefaultFlexJustify,
  getDefaultFlexWrap,
} from "@library/shared/flex";
import { getDefaultFullHeight } from "@library/shared/fullHeight";
import { getDefaultFullWidth } from "@library/shared/fullWidth";
import { getDefaultNoScroll } from "@library/shared/noScroll";
import { getDefaultShapes } from "@library/shared/shape";
import { getDefaultTextColor } from "@library/shared/textColor";
import { getDefaultTextVariants } from "@library/shared/textVariant";
import { getDefaultTransition } from "@library/shared/transition";
import { Stitches } from "@library/stitches/stitches.config";

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
