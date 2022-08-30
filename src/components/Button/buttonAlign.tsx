import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches.config";

// BUTTON ALIGN
export type ButtonAlignProperty = ButtonAlignVariants["align"];
export const getButtonAlign = (defaultValue = "medium") =>
  Stitches.css({
    variants: {
      align: {
        left: {
          justifyContent: "flex-start",
          alignItems: "left",
        },
        center: {
          justifyContent: "center",
          textAlign: "center",
        },
        right: {
          justifyContent: "flex-end",
          textAlign: "right",
        },
        justify: {
          justifyContent: "space-between",
          textAlign: "center",
        },
      },
    },
    defaultVariants: {
      align: defaultValue,
    },
  });

export const defaultButtonAlign = getButtonAlign();
export type ButtonAlignVariants = VariantProps<typeof defaultButtonAlign>;
