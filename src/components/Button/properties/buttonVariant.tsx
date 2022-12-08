import { VariantProps } from "@stitches/react";
import { Stitches } from "../../stitches/stitches";

// BUTTON VARIANT
export type ButtonVariantProperty = ButtonVariantVariants["variant"];
export const getButtonVariant = (defaultValue = "contained") =>
  Stitches.css({
    variants: {
      variant: {
        contained: {
          backgroundColor: "$$bgColor",
          borderColor: "$$bgColor",
          "&:hover": {
            backgroundColor: "$$bgColorHover",
            borderColor: "$$bgColorHover",
          },
        },

        toon: {
          backgroundColor: "transparent",
          borderColor: "$$bgColor",

          boxShadow: `${parseFloat(Stitches.theme.space.unit.value) / 2}px ${
            parseFloat(Stitches.theme.space.unit.value) / 2
          }px 0px 0px $$shadowColor`,

          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "$$bgColorHover",
            boxShadow: `${parseFloat(
              Stitches.theme.space.unit.value
            )}px ${parseFloat(
              Stitches.theme.space.unit.value
            )}px 0px 0px $$shadowColorHover`,
          },
        },

        outlined: {
          backgroundColor: "transparent",
          borderColor: "$$bgColor",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "$$bgColorHover",
          },
        },

        ghost: {
          backgroundColor: "transparent",
          borderColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "transparent",
          },
        },
      },
    },
    defaultVariants: {
      variant: defaultValue,
    },
  });

export const defaultButtonVariant = getButtonVariant();
export type ButtonVariantVariants = VariantProps<typeof defaultButtonVariant>;
