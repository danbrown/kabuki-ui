import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches.config";

// No Scroll
export type ClickableVariants = VariantProps<typeof defaultClickable>;
export type ClickableProperty = ClickableVariants["clickable"];
export const getDefaultClickable = (defaultValue = false) =>
  Stitches.css({
    variants: {
      clickable: {
        true: { cursor: "pointer" },
        false: {},
      },
    },
    defaultVariants: {
      clickable: defaultValue,
    },
  });
export const defaultClickable = getDefaultClickable();
