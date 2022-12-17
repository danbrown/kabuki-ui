import {
  Page,
  ThemeProvider,
  Button as WipsieButton,
  CssBaseline,
  Spacing,
} from "@wipsie/ui";
import React from "react";
import { Button } from "@library/components/Button/Button";
import { Container } from "@library/components/Container/Container";
import { Flex } from "@library/components/Flex/Flex";
import { Box } from "@library/components/Box/Box";

export default function Home() {
  return (
    <Page>
      <Spacing height={2} />
      <Container
        display="flex"
        align="center"
        bgColor="black"
        bgColorHover="primary"
        shape="roundedOpposite1"
        transition="slower"
        textColor="white"
        // clickable
        m={{
          "@initial": 1,
          "@md": 5,
        }}
        mt="5px"
        // css={{
        //   "&:hover": {
        //     backgroundColor: "$primary",
        //   },
        // }}
      >
        <Button
          shape={{
            "@initial": "roundedOpposite1",
            "@md": "roundedOpposite2",
          }}
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          variant="contained"
          transition="none"
          fullWidth
          align="center"
        />
      </Container>

      <Button
        size="colossal"
        shape="rounded"
        variant="toon"
        bgColor="black"
        shadowColor="black"
      >
        Toon Button
      </Button>
      <Button m={1} label="Hello" variant="contained" />
      <Button size="large" m={1} label="Ghost" variant="ghost" />

      <Flex fullWidth justify="evenly">
        <Box>a</Box>
        <Box>a</Box>
        <Box>a</Box>
      </Flex>

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
      {/* <code>
        <pre>{JSON.stringify(Stitches.theme, null, 2)}</pre>
      </code> */}
    </Page>
  );
}
