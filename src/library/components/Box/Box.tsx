import { forwardRef } from "react";
import { cssMargin } from "@library/shared/margin";
import { cssPadding } from "@library/shared/padding";
import { _BoxStyled } from "./Box.styled";
import { BoxProps } from "./Box.types";

export const Box = forwardRef(
  (props: BoxProps, ref: React.Ref<HTMLDivElement>) => {
    const {
      // margin
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,

      // padding
      p = 2,
      px,
      py,
      pt,
      pr,
      pb,
      pl,

      // bgColor
      bgColor = "transparent",
      bgColorHover = null,

      // shape
      shape = "square",

      // defaults
      as = "div",
      css = {},

      // children
      children,

      // other
      ...otherProps
    } = props;

    return (
      <_BoxStyled
        as={as}
        ref={ref}
        // bgColor
        bgColor={bgColor}
        bgColorHover={bgColorHover || bgColor}
        // shape
        shape={shape}
        // css
        css={{
          // margin and padding
          ...cssMargin({ m, mx, my, mt, mr, mb, ml }),
          ...cssPadding({ p, px, py, pt, pr, pb, pl }),

          // fixes

          // other
          ...css,
        }}
        {...(otherProps as any)}
      >
        {children}
      </_BoxStyled>
    );
  }
);
