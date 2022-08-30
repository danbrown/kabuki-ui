import { CSS } from "@stitches/react";
import { Stitches } from "./stitches.config";

// Common types for components
export type ComponentCommonProps = {
  as?: keyof JSX.IntrinsicElements;
  css?: CSS<typeof Stitches.config>;
};

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

// export type OldButtonProps = {
//   /**
//    * If buttom component will be a chip
//    */
//   chip?: boolean;
//   /**
//    * What background color to use
//    */
//   bgColor?: BgColorVariants;
//   /**
//    * What background color to use on hover
//    */
//   hoverBackgroundColor?: any | string | null;
//   /**
//    * What text color to use
//    */
//   color?: any | string | null;
//   /**
//    * What text color to use on hover
//    */
//   hoverColor?: any | string | null;
//   /**
//    * How large should the button be
//    */
//   size?: any;
//   /**
//    * Button variant
//    */
//   variant?: "contained" | "outlined" | "ghost";
//   /**
//    * Button group variant if inside a button group
//    */
//   groupVariant?: "contained" | "outlined" | "ghost";
//   /**
//    * Button shape if inside a button group
//    */
//   groupShape?: "round" | "rounded" | "square" | undefined;
//   /**
//    * What background color to use if inside a button group
//    */
//   groupBackgroundColor?: any | string;
//   /**
//    * What background color to use on hover if inside a button group
//    */
//   groupHoverBackgroundColor?: any | string | null;
//   /**
//    * What text color to use if inside a button group
//    */
//   groupColor?: any | string | null;
//   /**
//    * What text color to use if inside a button group on hover
//    */
//   groupHoverColor?: any | string | null;
//   /**
//    * How large should the button be if inside a button group
//    */
//   groupSize?: any;

//   /**
//    * Button type
//    */
//   type?: "button" | "submit" | "reset" | undefined;
//   /**
//    * Button shape
//    */
//   shape?: "round" | "rounded" | "square" | undefined;
//   /**
//    * If the button should max the container width
//    */
//   fullWidth?: boolean;
//   /**
//    * The content alignment
//    */
//   align?: "left" | "center" | "right" | "spaced";
//   /**
//    * If the button should be disabled
//    */
//   active?: boolean;
// };
