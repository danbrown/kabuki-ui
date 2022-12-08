import {
  Page,
  ThemeProvider,
  Button as WipsieButton,
  CssBaseline,
  Spacing,
} from "@wipsie/ui";
import React from "react";
import { Button } from "../components/Button/Button";
import { Stitches } from "../components/stitches/stitches";

export default function Home() {
  return (
    <Page>
      <Spacing height={2} />
      <Button
        size="large"
        shape="roundBottom"
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        variant="ghost"
        transition="none"
      />
      <Button
        size="colossal"
        m={1}
        shape="roundTop"
        label="Toon Button"
        variant="toon"
        // bgColor="info"
        bgColor="black"
        textColor="white"
        shadowColor="black"
      />
      <Button
        size="large"
        m={1}
        shape="roundOpposite1"
        label="Hello"
        variant="contained"
      />
      <Button
        size="large"
        m={1}
        shape="roundLeft"
        label="Hello"
        variant="outlined"
      />
      <Button
        size="large"
        m={1}
        shape="roundRight"
        label="Hello"
        variant="outlined"
      />
      <Button
        size="large"
        m={1}
        shape="roundTopLeft"
        label="Hello"
        variant="outlined"
      />
      <Button
        size="large"
        m={1}
        shape="roundTopRight"
        label="Hello"
        variant="outlined"
      />
      <Button
        size="large"
        m={1}
        shape="roundBottomRight"
        label="Hello"
        variant="outlined"
      />
      <Button
        size="large"
        m={1}
        shape="roundBottomLeft"
        label="Hello"
        variant="outlined"
      />
      <Button
        size="large"
        m={1}
        shape="roundTopLeftDrop"
        label="Hello"
        variant="outlined"
      />
      <Button
        size="large"
        m={1}
        shape="roundBottomLeftDrop"
        label="Hello"
        variant="outlined"
      />
      <Button
        m={1}
        shape="roundTopRightDrop"
        label="Hello"
        variant="outlined"
      />
      <Button
        size="huge"
        m={1}
        shape="roundBottomRightDrop"
        label="disabled"
        variant="outlined"
        disabled
        onClick={() => {
          alert("Hello");
        }}
      />
      <button
        disabled
        onClick={() => {
          alert("Hello");
        }}
      >
        awda
      </button>
      <Button
        size="colossal"
        m={1}
        shape="roundOpposite1"
        label="Hello"
        variant="outlined"
      />
      <Button
        m={1}
        shape="roundOpposite1"
        label="Hello"
        variant="outlined"
        css={{}}
      />
      <Spacing height={2} />
      <WipsieButton variant="ghost" size="large">
        Hello2
      </WipsieButton>

      <Spacing height={2} />
      <code>
        <pre>{JSON.stringify(Stitches.theme, null, 2)}</pre>
      </code>
    </Page>
  );
}
