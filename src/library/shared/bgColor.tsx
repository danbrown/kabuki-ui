import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches.config";
import { themeColorset } from "../utils/themeColorset";

// BG COLOR
export type BgColorProperty = BgColorVariants["bgColor"];
export const getDefaultBgColor = (defaultValue = "primary") =>
  Stitches.css({
    variants: {
      bgColor: {
        ...themeColorset("$$bgColor"),
        "*": {},
      },
    },
    defaultVariants: {
      bgColor: defaultValue,
    },
  });
export const defaultBgColor = getDefaultBgColor();
export type BgColorVariants = VariantProps<typeof defaultBgColor>;

// BG COLOR Hover
export type BgColorHoverProperty = BgColorHoverVariants["bgColorHover"];
export const getDefaultBgColorHover = (defaultValue = "unset") =>
  Stitches.css({
    variants: {
      bgColorHover: themeColorset("$$bgColorHover"),
    },
    defaultVariants: {
      bgColorHover: defaultValue,
    },
  });
export const defaultBgColorHover = getDefaultBgColorHover();
export type BgColorHoverVariants = VariantProps<typeof defaultBgColorHover>;
