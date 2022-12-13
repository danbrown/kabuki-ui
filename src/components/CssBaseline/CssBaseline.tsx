import { Stitches } from "../stitches/stitches.config";

export const CssBaseline = () => {
  return (
    <>
      <style
        id="kabuki-css"
        dangerouslySetInnerHTML={{ __html: Stitches.getCssText() }}
      />
      <style id="kabuki-reset" dangerouslySetInnerHTML={{ __html: `` }} />
      <style
        id="kabuki-defaults"
        dangerouslySetInnerHTML={{
          __html: `
        /* Defaults */
        :root {
          --kabuki-default-bg-color: #fff;
          --kabuki-default-bg-color-hover: #f5f5f5;
        }
        `,
        }}
      />
    </>
  );
};
