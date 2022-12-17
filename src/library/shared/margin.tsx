import { PropertyValue, CSSProperties } from "@stitches/react";
import { Stitches } from "../stitches/stitches.config";
import { BreakpointCombo } from "../stitches/stitches.types";
import { deepMerge } from "../utils/deepMerge";
import { propertyBreakpointValue } from "../utils/propertyBreakpointValue";

// MARGIN
export type MarginPropertyType =
  | string
  | number
  | BreakpointCombo<string | number>;
export type AllowedCssMargin = Partial<{
  m?: MarginPropertyType;
  mx?: MarginPropertyType;
  my?: MarginPropertyType;
  mt?: MarginPropertyType;
  mb?: MarginPropertyType;
  ml?: MarginPropertyType;
  mr?: MarginPropertyType;
}>;

export const cssMargin = (props: AllowedCssMargin) => {
  const { m, mb, ml, mr, mt, mx, my } = props;

  let result = {};
  m && (result = deepMerge(result, propertyBreakpointValue("m", m)));
  mx && (result = deepMerge(result, propertyBreakpointValue("mx", mx)));
  my && (result = deepMerge(result, propertyBreakpointValue("my", my)));
  mt && (result = deepMerge(result, propertyBreakpointValue("mt", mt)));
  mr && (result = deepMerge(result, propertyBreakpointValue("mr", mr)));
  mb && (result = deepMerge(result, propertyBreakpointValue("mb", mb)));
  ml && (result = deepMerge(result, propertyBreakpointValue("ml", ml)));

  return result;
};
