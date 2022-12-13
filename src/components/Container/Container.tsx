import { forwardRef } from "react";
import { cssMargin } from "../shared/margin";
import { cssPadding } from "../shared/padding";
import { _ContainerStyled } from "./Container.styled";
import { ContainerProps } from "./Container.types";

export const Container = forwardRef(
  (props: ContainerProps, ref: React.Ref<HTMLDivElement>) => {
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
      bgColor = "background",
      bgColorHover = null,

      // shape
      shape = "rounded",

      // defaults
      as = "div",
      css = {},

      // children
      children,

      // other
      ...otherProps
    } = props;

    return (
      <_ContainerStyled
        as={as}
        ref={ref}
        // bgColor
        bgColor={bgColor}
        bgColorHover={bgColorHover}
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
      </_ContainerStyled>
    );
  }
);
