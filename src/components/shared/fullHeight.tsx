import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches.config";

// FullHeight
export type FullHeightVariants = VariantProps<typeof defaultFullHeight>;
export type FullHeightProperty = FullHeightVariants["fullHeight"];
export const getDefaultFullHeight = (defaultValue = false) =>
  Stitches.css({
    variants: {
      fullHeight: {
        true: { height: "100%" },
        false: {},
      },
    },
    defaultVariants: {
      fullHeight: defaultValue,
    },
  });

export const defaultFullHeight = getDefaultFullHeight();
