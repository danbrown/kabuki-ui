import { VariantProps } from "@stitches/react";
import { Stitches } from "@library/stitches/stitches.config";

// Container Variant
export type ContainerVariantProperty = ContainerVariantVariants["variant"];
export const getContainerVariant = (defaultValue = "medium") =>
  Stitches.css({
    variants: {
      variant: {},
    },
    defaultVariants: {
      variant: defaultValue,
    },
  });

export const defaultContainerVariant = getContainerVariant();
export type ContainerVariantVariants = VariantProps<
  typeof defaultContainerVariant
>;
