import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches";
import { themeColorset } from "../stitches/utils/themeColorset";

// BG COLOR
export type ShadowColorProperty = ShadowColorVariants["shadowColor"];
export const getDefaultShadowColor = (defaultValue = "primary") =>
  Stitches.css({
    variants: {
      shadowColor: {
        ...themeColorset("$$shadowColor"),
        "*": {},
      },
    },
    defaultVariants: {
      shadowColor: defaultValue,
    },
  });
export const defaultShadowColor = getDefaultShadowColor();
export type ShadowColorVariants = VariantProps<typeof defaultShadowColor>;

// BG COLOR Hover
export type ShadowColorHoverProperty =
  ShadowColorHoverVariants["shadowColorHover"];
export const getDefaultShadowColorHover = (defaultValue = "primary") =>
  Stitches.css({
    variants: {
      shadowColorHover: themeColorset("$$shadowColorHover"),
    },
    defaultVariants: {
      shadowColorHover: defaultValue,
    },
  });
export const defaultShadowColorHover = getDefaultShadowColorHover();
export type ShadowColorHoverVariants = VariantProps<
  typeof defaultShadowColorHover
>;
