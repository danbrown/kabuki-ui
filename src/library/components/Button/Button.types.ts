import { Modify } from "@library/types/modify";
import { VariantProps } from "@stitches/react";
import { AllowedCssMargin, cssMargin } from "@library/shared/margin";
import { AllowedCssPadding, cssPadding } from "@library/shared/padding";
import {
  AdornmentProps,
  ComponentCommonProps,
} from "@library/stitches/stitches.types";
import { _ButtonStyled } from "./Button.styled";

export type DefaultButtonProps = VariantProps<typeof _ButtonStyled>;

export type ButtonProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  ComponentCommonProps &
    AllowedCssPadding &
    AllowedCssMargin &
    // AllowedCssMargin &
    AdornmentProps &
    DefaultButtonProps & {
      /**
       * Button contents
       */
      label?: string | React.ElementType;
    }
>;
