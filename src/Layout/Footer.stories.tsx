import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./index";

export default {
  title: "Components/Layout/Footer",
  component: Footer,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Default: Story = { render: () => <Footer /> };
