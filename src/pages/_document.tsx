import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "../components/CssBaseline/CssBaseline";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <CssBaseline />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
