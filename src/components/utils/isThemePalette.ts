// get to know if is a theme palette color
export function isThemePalette(type: any) {
  if (typeof type !== "string") return;
  switch (type) {
    case "primary":
    case "secondary":
    case "success":
    case "info":
    case "warning":
    case "danger":
    case "basic":
    case "background":
    case "shade":
    case "highlight":
    case "text":
    case "subtext":
      return true;
    default:
      return false;
  }
}
