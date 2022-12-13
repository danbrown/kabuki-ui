import { Stitches } from "../stitches/stitches.config";

export function propertyBreakpointValue<T>(property: string, propertyValue: T) {
  switch (typeof propertyValue) {
    case "number":
      return {
        [property]: `${
          propertyValue * parseFloat(Stitches.theme.space.unit.value)
        }px`,
      };

    case "object":
      return Object.entries(propertyValue).reduce((acc, [key, value]) => {
        if (key === "@initial") {
          return {
            ...acc,
            [property]: propertyBreakpointValue(property, value)[property],
          };
        }

        return {
          ...acc,
          [key]: propertyBreakpointValue(property, value),
        };
      }, {});

    case "string":
    default:
      return {
        [property]: propertyValue,
      };
  }
}
