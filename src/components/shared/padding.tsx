import { PropertyValue } from "@stitches/react";
import { Stitches } from "../stitches/stitches.config";
import { BreakpointCombo } from "../stitches/stitches.types";
import { deepMerge } from "../utils/deepMerge";
import { propertyBreakpointValue } from "../utils/propertyBreakpointValue";

// PADDINGS
export type PaddingPropertyType =
  | string
  | number
  | BreakpointCombo<string | number>;
export type AllowedCssPadding = Partial<{
  p?: PaddingPropertyType;
  px?: PaddingPropertyType;
  py?: PaddingPropertyType;
  pt?: PaddingPropertyType;
  pb?: PaddingPropertyType;
  pl?: PaddingPropertyType;
  pr?: PaddingPropertyType;
}>;

export const cssPadding = (props: AllowedCssPadding) => {
  const { p, pb, pl, pr, pt, px, py } = props;

  let result = {};
  p && (result = deepMerge(result, propertyBreakpointValue("p", p)));
  px && (result = deepMerge(result, propertyBreakpointValue("px", px)));
  py && (result = deepMerge(result, propertyBreakpointValue("py", py)));
  pt && (result = deepMerge(result, propertyBreakpointValue("pt", pt)));
  pr && (result = deepMerge(result, propertyBreakpointValue("pr", pr)));
  pb && (result = deepMerge(result, propertyBreakpointValue("pb", pb)));
  pl && (result = deepMerge(result, propertyBreakpointValue("pl", pl)));

  return result;
};
