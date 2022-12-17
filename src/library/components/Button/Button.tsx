import { VariantProps } from "@stitches/react";
import { forwardRef } from "react";
import { AllowedCssMargin, cssMargin } from "@library/shared/margin";
import { AllowedCssPadding, cssPadding } from "@library/shared/padding";
import { ButtonProps } from "./Button.types";
import {
  fixButtonBgColor,
  fixButtonBgColorHover,
  fixButtonBorderColor,
  fixButtonBorderColorHover,
  fixButtonTextColor,
  fixButtonDisabled,
  fixButtonDisabledHover,
} from "./Button.utils";
import { _ButtonStyled } from "./Button.styled";

export const Button = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      variant = "contained",
      chip = false,

      shape = "round",
      size = "medium",
      disabled = false,
      transition = "normal",

      // colors
      bgColor = "primary",
      bgColorHover = null,
      textColor = "contrast",
      shadowColor = "primary",
      shadowColorHover = null,

      // content
      children,
      label,
      startAdornment,
      endAdornment,

      // margin
      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,

      // padding
      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,

      // other
      as = null,
      css = {},
      ...otherProps
    } = props;

    return (
      <_ButtonStyled
        as={as}
        ref={ref}
        // button props
        variant={variant}
        chip={chip}
        shape={shape}
        disabled={disabled}
        size={size}
        transition={transition}
        // colors
        bgColor={bgColor}
        bgColorHover={bgColorHover}
        textColor={textColor}
        shadowColor={shadowColor}
        shadowColorHover={shadowColorHover || shadowColor}
        // custom css
        css={{
          ...cssMargin({ m, mx, my, mt, mr, mb, ml }),
          ...cssPadding({ p, px, py, pt, pr, pb, pl }),
          ...fixButtonBgColor({ variant, bgColor, disabled }),
          ...fixButtonTextColor({ variant, bgColor, textColor, disabled }),
          ...fixButtonBorderColor({ variant, bgColor, disabled }),

          // Disabled
          ...fixButtonDisabled({ variant, bgColor, disabled }),

          "&:hover": {
            ...fixButtonBgColorHover({
              variant,
              bgColor,
              bgColorHover,
              disabled,
            }),
            ...fixButtonBorderColorHover({
              variant,
              bgColor,
              bgColorHover,
              disabled,
            }),

            // Disabled
            ...fixButtonDisabledHover({ variant, bgColor, disabled }),
          },

          ...css,
        }}
        // other props
        {...(otherProps as any)}
      >
        <>
          {startAdornment && (
            <span style={{ paddingRight: 5 }}>{startAdornment}</span>
          )}

          {label}
          {children}

          {endAdornment && (
            <span style={{ paddingLeft: 5 }}>{endAdornment}</span>
          )}
        </>
      </_ButtonStyled>
    );
  }
);

Button.displayName = "Button";
