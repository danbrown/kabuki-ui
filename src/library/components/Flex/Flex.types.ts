import { VariantProps } from "@stitches/react";
import { AllowedCssMargin } from "@library/shared/margin";
import { AllowedCssPadding } from "@library/shared/padding";
import { ComponentCommonProps } from "@library/stitches/stitches.types";
import { Modify } from "@library/types/modify";
import { _FlexStyled } from "./Flex.styled";

export type DefaultFlexProps = VariantProps<typeof _FlexStyled>;

export type FlexProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  ComponentCommonProps &
    AllowedCssPadding &
    AllowedCssMargin &
    DefaultFlexProps & {
      /**
       * Flex contents
       * @default null
       * */
      children?: React.ReactNode;
    }
>;
