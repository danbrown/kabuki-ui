import { VariantProps } from "@stitches/react";
import { Modify, useTheme } from "@wipsie/ui";
import { forwardRef } from "react";
import { AllowedCssMargin, cssMargin } from "../shared/margin";
import { AllowedCssPadding, cssPadding } from "../shared/padding";
import { AdornmentProps, ComponentCommonProps } from "../stitches.types";
import { ButtonProps } from "./Button.types";
import {
  fixBtnBgColor,
  fixBtnBgColorHover,
  fixBtnBorderColor,
  fixBtnBorderColorHover,
  fixBtnTextColor,
} from "./fixes";
import { StyledButton } from "./StyledButton";

export const Button = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      variant = "contained",
      chip = false,
      bgColor = "primary",
      bgColorHover = null,
      textColor = "contrast",
      shape = "round",
      size = "medium",
      disabled = false,
      transition = "normal",

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
    const theme = useTheme();

    return (
      <StyledButton
        variant={variant}
        chip={chip}
        bgColor={bgColor}
        bgColorHover={bgColorHover}
        shape={shape}
        disabled={disabled}
        size={size}
        transition={transition}
        as={as}
        ref={ref}
        css={{
          ...cssMargin({ m, mx, my, mt, mr, mb, ml }),
          ...cssPadding({ p, px, py, pt, pr, pb, pl }),
          ...fixBtnBgColor({ variant, bgColor, disabled }, theme),
          ...fixBtnTextColor({ variant, bgColor, textColor, disabled }, theme),
          ...fixBtnBorderColor({ variant, bgColor, disabled }, theme),

          "&:hover": {
            ...fixBtnBgColorHover(
              { variant, bgColor, bgColorHover, disabled },
              theme
            ),
            ...fixBtnBorderColorHover(
              { variant, bgColor, bgColorHover, disabled },
              theme
            ),
          },

          ...css,
        }}
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
      </StyledButton>
    );
  }
);
