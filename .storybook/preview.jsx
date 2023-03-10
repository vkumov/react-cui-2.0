import React, { useEffect, useRef } from "react";
import { useDarkMode } from "storybook-dark-mode";

import { ModalProvider } from "../src/Modal";

function ThemeWrapper(props) {
  const dark = useDarkMode();

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "default";
  }, [dark]);

  return <>{props.children}</>;
}

export const decorators = [
  (Story) => {
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
            <ModalProvider>
              <Story />
            </ModalProvider>
          </div>
        </div>
      </ThemeWrapper>
    );
  },
];

// export const parameters = {
//   darkMode: {
//     // Override the default dark theme
//     dark: { ...themes.dark },
//     // Override the default light theme
//     light: { ...themes.normal },
//   },
// };
