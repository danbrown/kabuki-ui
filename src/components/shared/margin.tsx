import { Stitches } from "../stitches/stitches";

// MARGINS
export type AllowedCssMargin = Partial<{
  m?: number | string;
  mx?: number | string;
  my?: number | string;
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
}>;

export const cssMargin = (props: AllowedCssMargin) => {
  const { m, mb, ml, mr, mt, mx, my } = props;

  function getMargin(margin: number | string) {
    return typeof margin === "number"
      ? `${margin * parseFloat(Stitches.theme.space.unit.value)}px`
      : margin;
  }

  let result = {};
  m && (result = { ...result, m: getMargin(m) });
  mx && (result = { ...result, mx: getMargin(mx) });
  my && (result = { ...result, my: getMargin(my) });
  mt && (result = { ...result, mt: getMargin(mt) });
  mr && (result = { ...result, mr: getMargin(mr) });
  mb && (result = { ...result, mb: getMargin(mb) });
  ml && (result = { ...result, ml: getMargin(ml) });

  return result;
};
