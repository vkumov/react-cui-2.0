import React, { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";

function ThemeWrapper(props) {
  const dark = useDarkMode();

  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "default";
  }, [dark]);

  return <>{props.children}</>;
}

export const decorators = [
  (Story) => (
    <ThemeWrapper>
      <div className="cui" style={{ overflow: "visible" }}>
        <div className="base-margin">
          <Story />
        </div>
      </div>
    </ThemeWrapper>
  ),
];
