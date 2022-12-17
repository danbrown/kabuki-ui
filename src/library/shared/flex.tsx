import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches/stitches.config";

// Display
export type DisplayVariants = VariantProps<typeof defaultDisplay>;
export type DisplayProperty = DisplayVariants["display"];
export const getDefaultDisplay = (defaultValue = "block") =>
  Stitches.css({
    variants: {
      display: {
        flex: { display: "flex" },
        block: { display: "block" },
        inline: { display: "inline" },
        inlineBlock: { display: "inline-block" },
        grid: { display: "grid" },
        initial: { display: "initial" },
        inherit: { display: "inherit" },
      },
    },
    defaultVariants: {
      display: defaultValue,
    },
  });
export const defaultDisplay = getDefaultDisplay();

// Direction
export type FlexDirectionVariants = VariantProps<typeof defaultFlexDirection>;
export type FlexDirectionProperty = FlexDirectionVariants["direction"];
export const getDefaultFlexDirection = (defaultValue = "row") =>
  Stitches.css({
    variants: {
      direction: {
        row: { flexDirection: "row" },
        rowReverse: { flexDirection: "row-reverse" },
        column: { flexDirection: "column" },
        columnReverse: { flexDirection: "column-reverse" },
        initial: { flexDirection: "initial" },
        inherit: { flexDirection: "inherit" },
      },
    },
    defaultVariants: {
      direction: defaultValue,
    },
  });
export const defaultFlexDirection = getDefaultFlexDirection();

// Align
export type FlexAlignVariants = VariantProps<typeof defaultFlexAlign>;
export type FlexAlignProperty = FlexAlignVariants["align"];
export const getDefaultFlexAlign = (defaultValue = "start") =>
  Stitches.css({
    variants: {
      align: {
        start: { alignItems: "flex-start" },
        end: { alignItems: "flex-end" },
        center: { alignItems: "center" },
        baseline: { alignItems: "baseline" },
        stretch: { alignItems: "stretch" },
        initial: { alignItems: "initial" },
        inherit: { alignItems: "inherit" },
      },
    },
    defaultVariants: {
      align: defaultValue,
    },
  });
export const defaultFlexAlign = getDefaultFlexAlign();

// Justify
export type FlexJustifyVariants = VariantProps<typeof defaultFlexJustify>;
export type FlexJustifyProperty = FlexJustifyVariants["justify"];
export const getDefaultFlexJustify = (defaultValue = "start") =>
  Stitches.css({
    variants: {
      justify: {
        start: { justifyContent: "flex-start" },
        end: { justifyContent: "flex-end" },
        center: { justifyContent: "center" },
        between: { justifyContent: "space-between" },
        around: { justifyContent: "space-around" },
        evenly: { justifyContent: "space-evenly" },
        initial: { justifyContent: "initial" },
        inherit: { justifyContent: "inherit" },
      },
    },
    defaultVariants: {
      justify: defaultValue,
    },
  });
export const defaultFlexJustify = getDefaultFlexJustify();

// Wrap
export type FlexWrapVariants = VariantProps<typeof defaultFlexWrap>;
export type FlexWrapProperty = FlexWrapVariants["wrap"];
export const getDefaultFlexWrap = (defaultValue = "wrap") =>
  Stitches.css({
    variants: {
      wrap: {
        nowrap: { flexWrap: "nowrap" },
        wrap: { flexWrap: "wrap" },
        wrapReverse: { flexWrap: "wrap-reverse" },
        initial: { flexWrap: "initial" },
        inherit: { flexWrap: "inherit" },
      },
    },
    defaultVariants: {
      wrap: defaultValue,
    },
  });
export const defaultFlexWrap = getDefaultFlexWrap();
