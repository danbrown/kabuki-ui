import { Stitches } from "../stitches/stitches";

// PADDINGS
export type AllowedCssPadding = Partial<{
  p?: number | string;
  px?: number | string;
  py?: number | string;
  pt?: number | string;
  pb?: number | string;
  pl?: number | string;
  pr?: number | string;
}>;

export const cssPadding = (props: AllowedCssPadding) => {
  const { p, pb, pl, pr, pt, px, py } = props;

  function getPadding(padding: number | string) {
    return typeof padding === "number"
      ? `${padding * parseFloat(Stitches.theme.space.unit.value)}px`
      : padding;
  }

  let result = {};
  p && (result = { ...result, p: getPadding(p) });
  px && (result = { ...result, px: getPadding(px) });
  py && (result = { ...result, py: getPadding(py) });
  pt && (result = { ...result, pt: getPadding(pt) });
  pr && (result = { ...result, pr: getPadding(pr) });
  pb && (result = { ...result, pb: getPadding(pb) });
  pl && (result = { ...result, pl: getPadding(pl) });

  return result;
};
