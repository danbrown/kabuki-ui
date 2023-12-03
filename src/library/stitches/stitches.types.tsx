import type { Stitches } from "./stitches.config";
import type { commonTheme } from "./common";
import type { CSS } from "@stitches/react";

// stitches types
export type StitchesConfig = typeof Stitches.config;
export type StitchesTheme = typeof Stitches.theme;

// Common types for components
export type ComponentCommonProps = {
  as?: keyof JSX.IntrinsicElements;
  css?: CSS<StitchesConfig>;
};

// Breakpoints types
export type BreakpointVariants = keyof typeof commonTheme.theme.breakpoints;
export type BreakpointCombo<T> = {
  [key in BreakpointVariants]?: T;
};

// Adornment types
export type AdornmentProps = {
  /**
   * Adornment to add on the left side of the component
   */
  startAdornment?: any | undefined;
  /**
   * Adornment to add on the right side of the component
   */
  endAdornment?: any | undefined;
};
