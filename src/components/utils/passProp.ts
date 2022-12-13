// returns a function that takes a value and returns an object with the prop and value, used in margin and padding utils
export const passProp =
  (...props: string[]) =>
  (value: any) =>
    value && props.reduce((acc, prop) => ({ ...acc, [prop]: value }), {});
