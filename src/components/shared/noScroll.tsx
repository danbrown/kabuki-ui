import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches";

// No Scroll
export type NoScrollVariants = VariantProps<typeof defaultNoScroll>;
export type NoScrollProperty = NoScrollVariants["noScroll"];
export const getDefaultNoScroll = (defaultValue = false) =>
  Stitches.css({
    variants: {
      noScroll: {
        true: { noScroll: true },
        false: { noScroll: false },
      },
    },
    defaultVariants: {
      noScroll: defaultValue,
    },
  });
export const defaultNoScroll = getDefaultNoScroll();
