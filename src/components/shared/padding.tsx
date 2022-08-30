import { themeDefaultConfigs } from "../theme.config";

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
  return {
    pb: typeof pb === "number" ? `${pb * themeDefaultConfigs.unit}px` : pb,
    pl: typeof pl === "number" ? `${pl * themeDefaultConfigs.unit}px` : pl,
    pr: typeof pr === "number" ? `${pr * themeDefaultConfigs.unit}px` : pr,
    pt: typeof pt === "number" ? `${pt * themeDefaultConfigs.unit}px` : pt,
    px: typeof px === "number" ? `${px * themeDefaultConfigs.unit}px` : px,
    py: typeof py === "number" ? `${py * themeDefaultConfigs.unit}px` : py,
    p: typeof p === "number" ? `${p * themeDefaultConfigs.unit}px` : p,
  };
};
