import { VariantProps } from "@stitches/react";
import { Modify, useTheme } from "@wipsie/ui";
import { AllowedCssMargin, cssMargin } from "../shared/margin";
import { AllowedCssPadding, cssPadding } from "../shared/padding";
import { AdornmentProps, ComponentCommonProps } from "../stitches.types";
import { StyledButton } from "./StyledButton";

export type DefaultButtonProps = VariantProps<typeof StyledButton>;

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
