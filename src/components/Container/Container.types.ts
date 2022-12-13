import { VariantProps } from "@stitches/react";
import { AllowedCssMargin } from "../shared/margin";
import { AllowedCssPadding } from "../shared/padding";
import { ComponentCommonProps } from "../stitches/stitches.types";
import { Modify } from "../types/modify";
import { _ContainerStyled } from "./Container.styled";

export type DefaultContainerProps = VariantProps<typeof _ContainerStyled>;

export type ContainerProps = Modify<
  React.HTMLProps<HTMLDivElement>,
  ComponentCommonProps &
    AllowedCssPadding &
    AllowedCssMargin &
    DefaultContainerProps & {
      /**
       * Container contents
       * @default null
       * */
      children?: React.ReactNode;
    }
>;
