import React from "react";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode-v7";

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode();

  return (
    <BaseContainer context={context} theme={dark ? themes.dark : themes.light}>
      {children}
    </BaseContainer>
  );
};
