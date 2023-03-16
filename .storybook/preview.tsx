import React, { useEffect, useRef } from "react";
import { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode-v7";

import { ModalProvider } from "../src/Modal";
import { DocsContainer } from "./DocsContainer";

function ThemeWrapper(props) {
  const dark = useDarkMode();

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "default";
  }, [dark]);

  return <>{props.children}</>;
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewMode: "docs",
    docs: {
      // theme: themes.dark,
      container: DocsContainer,
    },
  },
  decorators: [
    (render) => {
      const bodyRef = useRef(null);
      const dark = useDarkMode();

      return (
        <ThemeWrapper>
          <div
            className="cui"
            id="cui-root"
            ref={bodyRef}
            style={{ overflow: "visible" }}
            data-theme={dark ? "dark" : "default"}
          >
            <div className="base-margin">
              <ModalProvider>{render()}</ModalProvider>
            </div>
          </div>
        </ThemeWrapper>
      );
    },
  ],
};

export default preview;
