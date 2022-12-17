import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches.config";

// FullWidth
export type FullWidthVariants = VariantProps<typeof defaultFullWidth>;
export type FullWidthProperty = FullWidthVariants["fullWidth"];
export const getDefaultFullWidth = (defaultValue = false) =>
  Stitches.css({
    variants: {
      fullWidth: {
        true: { width: "100%" },
        false: {},
      },
    },
    defaultVariants: {
      fullWidth: defaultValue,
    },
  });

export const defaultFullWidth = getDefaultFullWidth();
