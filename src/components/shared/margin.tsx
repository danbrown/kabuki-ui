import { themeDefaultConfigs } from "../theme.config";

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
  return {
    mb: typeof mb === "number" ? `${mb * themeDefaultConfigs.unit}px` : mb,
    ml: typeof ml === "number" ? `${ml * themeDefaultConfigs.unit}px` : ml,
    mr: typeof mr === "number" ? `${mr * themeDefaultConfigs.unit}px` : mr,
    mt: typeof mt === "number" ? `${mt * themeDefaultConfigs.unit}px` : mt,
    mx: typeof mx === "number" ? `${mx * themeDefaultConfigs.unit}px` : mx,
    my: typeof my === "number" ? `${my * themeDefaultConfigs.unit}px` : my,
    m: typeof m === "number" ? `${m * themeDefaultConfigs.unit}px` : m,
  };
};
