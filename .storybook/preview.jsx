import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { useDarkMode } from "storybook-dark-mode";
import { DynamicModal } from "../src/Modal";

function ThemeWrapper(props) {
  const dark = useDarkMode();

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "default";
  }, [dark]);

  return <>{props.children}</>;
}

export const decorators = [
  (Story) => {
    React.useEffect(() => {
      ReactModal.setAppElement("body");
    }, []);

    return (
      <ThemeWrapper>
        <div className="cui" style={{ overflow: "visible" }}>
          <div className="base-margin">
            <Story />
            <DynamicModal />
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
