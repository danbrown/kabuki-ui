import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches.config";

// TRANSITIONS
export type TransitionVariants = VariantProps<typeof defaultTransition>;
export type TransitionProperty = TransitionVariants["transition"];
export const getDefaultTransition = (defaultValue = "normal") =>
  Stitches.css({
    variants: {
      transition: {
        none: { transition: "$transitions$none" },
        faster: { transition: "$transitions$faster" },
        fast: { transition: "$transitions$fast" },
        normal: { transition: "$transitions$normal" },
        slow: { transition: "$transitions$slow" },
        slower: { transition: "$transitions$slower" },
      },
    },
    defaultVariants: {
      transition: defaultValue,
    },
  });

export const defaultTransition = getDefaultTransition();
