import { Modify } from "../types/modify";
import { VariantProps } from "@stitches/react";
import { AllowedCssMargin, cssMargin } from "../shared/margin";
import { AllowedCssPadding, cssPadding } from "../shared/padding";
import {
  AdornmentProps,
  ComponentCommonProps,
} from "../stitches/stitches.types";
import { _ButtonStyled } from "./Button.styled";

export type DefaultButtonProps = VariantProps<typeof _ButtonStyled>;

export type ButtonProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  ComponentCommonProps &
    AdornmentProps &
    AllowedCssPadding &
    AllowedCssMargin &
    DefaultButtonProps & {
      /**
       * Button contents
       */
      label?: string | React.ElementType;
    }
>;
