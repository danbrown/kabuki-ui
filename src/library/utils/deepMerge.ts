export function deepMerge(...results: any) {
  const result = results.reduce((acc, obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "object") {
        if (Array.isArray(value)) {
          acc[key] = value;
        } else {
          acc[key] = deepMerge(acc[key] || {}, value);
        }
      } else {
        acc[key] = value;
      }
    });
    return acc;
  }, {});

  return result;
}
