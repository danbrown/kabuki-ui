import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches.config";

// BUTTON SIZES

export type ButtonSizeProperty = ButtonSizeVariants["size"];
export const getButtonSizes = (defaultValue = "medium") =>
  Stitches.css({
    variants: {
      size: {
        micro: { padding: "2px 4px", fontSize: "0.5rem" },
        mini: { padding: "4px 6px", fontSize: "0.625em" },
        small: { padding: "6px 8px", fontSize: "0.75rem" },
        medium: { padding: "8px 10px", fontSize: "0.875rem" },
        large: { padding: "10px 14px", fontSize: "1rem" },
        huge: { padding: "12px 16px", fontSize: "1.1rem" },
        colossal: { padding: "14px 18px", fontSize: "1.25rem" },
      },
    },
    defaultVariants: {
      size: defaultValue,
    },
  });

export const defaultButtonSizes = getButtonSizes();
export type ButtonSizeVariants = VariantProps<typeof defaultButtonSizes>;
