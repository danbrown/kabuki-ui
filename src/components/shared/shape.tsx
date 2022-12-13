import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches.config";

// SHAPES
export type ShapeVariants = VariantProps<typeof defaultShapes>;
export type ShapeProperty = ShapeVariants["shape"];
export const getDefaultShapes = (defaultValue = "round") =>
  Stitches.css({
    variants: {
      shape: {
        round: {
          $$shape: "$shapes$round",
          borderRadius: "$$shape",
        },
        roundTop: {
          $$shape: "$shapes$roundTop",
          borderRadius: "$$shape",
        },
        roundBottom: {
          $$shape: "$shapes$roundBottom",
          borderRadius: "$$shape",
        },
        roundLeft: {
          $$shape: "$shapes$roundLeft",
          borderRadius: "$$shape",
        },
        roundRight: {
          $$shape: "$shapes$roundRight",
          borderRadius: "$$shape",
        },
        roundTopLeft: {
          $$shape: "$shapes$roundTopLeft",
          borderRadius: "$$shape",
        },
        roundTopRight: {
          $$shape: "$shapes$roundTopRight",
          borderRadius: "$$shape",
        },
        roundBottomRight: {
          $$shape: "$shapes$roundBottomRight",
          borderRadius: "$$shape",
        },
        roundBottomLeft: {
          $$shape: "$shapes$roundBottomLeft",
          borderRadius: "$$shape",
        },
        roundBottomLeftDrop: {
          $$shape: "$shapes$roundBottomLeftDrop",
          borderRadius: "$$shape",
        },
        roundBottomRightDrop: {
          $$shape: "$shapes$roundBottomRightDrop",
          borderRadius: "$$shape",
        },
        roundTopLeftDrop: {
          $$shape: "$shapes$roundTopLeftDrop",
          borderRadius: "$$shape",
        },
        roundTopRightDrop: {
          $$shape: "$shapes$roundTopRightDrop",
          borderRadius: "$$shape",
        },
        roundOpposite1: {
          $$shape: "$shapes$roundOpposite1",
          borderRadius: "$$shape",
        },
        roundOpposite2: {
          $$shape: "$shapes$roundOpposite2",
          borderRadius: "$$shape",
        },
        rounded: {
          $$shape: "$shapes$rounded",
          borderRadius: "$$shape",
        },
        roundedTop: {
          $$shape: "$shapes$roundedTop",
          borderRadius: "$$shape",
        },
        roundedBottom: {
          $$shape: "$shapes$roundedBottom",
          borderRadius: "$$shape",
        },
        roundedLeft: {
          $$shape: "$shapes$roundedLeft",
          borderRadius: "$$shape",
        },
        roundedRight: {
          $$shape: "$shapes$roundedRight",
          borderRadius: "$$shape",
        },
        roundedTopLeft: {
          $$shape: "$shapes$roundedTopLeft",
          borderRadius: "$$shape",
        },
        roundedTopRight: {
          $$shape: "$shapes$roundedTopRight",
          borderRadius: "$$shape",
        },
        roundedBottomLeft: {
          $$shape: "$shapes$roundedBottomLeft",
          borderRadius: "$$shape",
        },
        roundedBottomRight: {
          $$shape: "$shapes$roundedBottomRight",
          borderRadius: "$$shape",
        },
        roundedTopLeftBottom: {
          $$shape: "$shapes$roundedTopLeftBottom",
          borderRadius: "$$shape",
        },
        roundedTopRightBottom: {
          $$shape: "$shapes$roundedTopRightBottom",
          borderRadius: "$$shape",
        },
        roundedBottomLeftTop: {
          $$shape: "$shapes$roundedBottomLeftTop",
          borderRadius: "$$shape",
        },
        roundedBottomRightTop: {
          $$shape: "$shapes$roundedBottomRightTop",
          borderRadius: "$$shape",
        },
        roundedOpposite1: {
          $$shape: "$shapes$roundedOpposite1",
          borderRadius: "$$shape",
        },
        roundedOpposite2: {
          $$shape: "$shapes$roundedOpposite2",
          borderRadius: "$$shape",
        },

        square: { $$shape: "$shapes$square" },
      },
    },

    defaultVariants: {
      shape: defaultValue,
    },
  });
export const defaultShapes = getDefaultShapes();
