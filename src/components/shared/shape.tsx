import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches";

// SHAPES
export type ShapeVariants = VariantProps<typeof defaultShapes>;
export type ShapeProperty = ShapeVariants["shape"];
export const getDefaultShapes = (defaultValue = "round") =>
  Stitches.css({
    variants: {
      shape: {
        round: { $$shape: "$shapes$round" },
        roundTop: { $$shape: "$shapes$roundTop" },
        roundBottom: { $$shape: "$shapes$roundBottom" },
        roundLeft: { $$shape: "$shapes$roundLeft" },
        roundRight: { $$shape: "$shapes$roundRight" },
        roundTopLeft: { $$shape: "$shapes$roundTopLeft" },
        roundTopRight: { $$shape: "$shapes$roundTopRight" },
        roundBottomRight: { $$shape: "$shapes$roundBottomRight" },
        roundBottomLeft: { $$shape: "$shapes$roundBottomLeft" },
        roundBottomLeftDrop: { $$shape: "$shapes$roundBottomLeftDrop" },
        roundBottomRightDrop: { $$shape: "$shapes$roundBottomRightDrop" },
        roundTopLeftDrop: { $$shape: "$shapes$roundTopLeftDrop" },
        roundTopRightDrop: { $$shape: "$shapes$roundTopRightDrop" },
        roundOpposite1: { $$shape: "$shapes$roundOpposite1" },
        roundOpposite2: { $$shape: "$shapes$roundOpposite2" },

        rounded: { $$shape: "$shapes$rounded" },
        roundedTop: { $$shape: "$shapes$roundedTop" },
        roundedBottom: { $$shape: "$shapes$roundedBottom" },
        roundedLeft: { $$shape: "$shapes$roundedLeft" },
        roundedRight: { $$shape: "$shapes$roundedRight" },
        roundedTopLeft: { $$shape: "$shapes$roundedTopLeft" },
        roundedTopRight: { $$shape: "$shapes$roundedTopRight" },
        roundedBottomLeft: { $$shape: "$shapes$roundedBottomLeft" },
        roundedBottomRight: { $$shape: "$shapes$roundedBottomRight" },
        roundedTopLeftBottom: { $$shape: "$shapes$roundedTopLeftBottom" },
        roundedTopRightBottom: { $$shape: "$shapes$roundedTopRightBottom" },
        roundedBottomLeftTop: { $$shape: "$shapes$roundedBottomLeftTop" },
        roundedBottomRightTop: { $$shape: "$shapes$roundedBottomRightTop" },
        roundedOpposite1: { $$shape: "$shapes$roundedOpposite1" },
        roundedOpposite2: { $$shape: "$shapes$roundedOpposite2" },

        square: { $$shape: "$shapes$square" },
      },
    },

    defaultVariants: {
      shape: defaultValue,
    },
  });
export const defaultShapes = getDefaultShapes();
