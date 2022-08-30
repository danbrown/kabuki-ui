import { VariantProps } from "@stitches/react";
import { Stitches } from "../stitches.config";

// TEXT VARIANTS
export type TextVariants = VariantProps<typeof defaultTextVariants>;
export type TextProperty = TextVariants["textVariant"];
export const getDefaultTextVariants = (defaultValue = "body1") =>
  Stitches.css({
    variants: {
      textVariant: {
        h1: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "2em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        h2: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1.5em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        h3: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1.17em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        h4: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        h5: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "0.85em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        h6: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "0.75em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        subtitle1: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 700,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        subtitle2: {
          fontFamily:
            '"Montserrat", "Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 500,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        body1: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 500,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        body2: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 300,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        caption1: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 300,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        caption2: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 300,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        code: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "1em",
          fontWeight: 300,
          textTransform: "none",
          lineHeight: 1.1,
          letterSpacing: "",
        },
        label: {
          fontFamily:
            '"Open Sans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: "0.8em",
          fontWeight: 700,
          textTransform: "uppercase",
          lineHeight: 1,
          letterSpacing: "",
        },
      },
    },
    defaultVariants: {
      textVariant: defaultValue,
    },
  });
export const defaultTextVariants = getDefaultTextVariants();
