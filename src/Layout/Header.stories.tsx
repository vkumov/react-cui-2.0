import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Header, HeaderPanel, HeaderTitle } from "./index";

export default {
  title: "Components/Layout/Header",
  component: Header,
  subcomponents: { HeaderPanel, HeaderTitle },
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: (args) => (
    <Header {...args}>
      <HeaderPanel>
        <HeaderTitle title="Some awesome app" />
      </HeaderPanel>
      <HeaderPanel right>
        <a
          className="header-item"
          title="Home"
          data-balloon="Go home"
          data-balloon-pos="down"
        >
          <i className="icon-home" />
        </a>
        <a className="header-item">User Name</a>
      </HeaderPanel>
    </Header>
  ),
};
