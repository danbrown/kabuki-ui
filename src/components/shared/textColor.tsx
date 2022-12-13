import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches.config";
import { themeColorset } from "../utils/themeColorset";

// TEXT COLOR
export type TextColorVariants = VariantProps<typeof defaultTextColor>;
export type TextColorProperty = TextColorVariants["textColor"];
export const getDefaultTextColor = (defaultValue = "text") =>
  Stitches.css({
    variants: {
      textColor: {
        ...themeColorset("$$textColor"),
        inherit: { color: "inherit" },
        contrast: {},
      },
    },
    defaultVariants: {
      textColor: defaultValue,
    },
  });
export const defaultTextColor = getDefaultTextColor();
