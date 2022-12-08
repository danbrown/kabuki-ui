import { getDefaultBgColor, getDefaultBgColorHover } from "../shared/bgColor";
import { getDefaultShapes } from "../shared/shape";
import { getDefaultTextColor } from "../shared/textColor";
import { getDefaultTextVariants } from "../shared/textVariant";
import { Stitches } from "../stitches/stitches";

const StyledContainer = Stitches.styled(
  "div",
  getDefaultBgColor("background"),
  getDefaultBgColorHover(),
  getDefaultTextColor("contrast"),
  getDefaultShapes(),
  getDefaultTextVariants("body1"),
  {
    backgroundColor: "$$bgColor",
  }
);
