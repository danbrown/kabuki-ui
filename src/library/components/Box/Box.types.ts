import { VariantProps } from "@stitches/react";
import { AllowedCssMargin } from "@library/shared/margin";
import { AllowedCssPadding } from "@library/shared/padding";
import { ComponentCommonProps } from "@library/stitches/stitches.types";
import { Modify } from "@library/types/modify";
import { _BoxStyled } from "./Box.styled";

export type DefaultBoxProps = VariantProps<typeof _BoxStyled>;

export type BoxProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  ComponentCommonProps &
    AllowedCssPadding &
    AllowedCssMargin &
    DefaultBoxProps & {
      /**
       * Box contents
       * @default null
       * */
      children?: React.ReactNode;
    }
>;
