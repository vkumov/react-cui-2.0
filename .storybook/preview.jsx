import React, { useEffect, useRef } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { DynamicModal } from "../src/Modal";
import { FloatingProvider } from "../src/FloatingProvider";

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
    return (
      <ThemeWrapper>
        <div
          className="cui"
          id="cui-root"
          ref={bodyRef}
          style={{ overflow: "visible" }}
        >
          <FloatingProvider rootRef={bodyRef}>
            <div className="base-margin">
              <Story />
              <DynamicModal />
            </div>
          </FloatingProvider>
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
