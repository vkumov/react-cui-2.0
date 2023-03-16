import React from "react";
import type { ArgTypes, Meta, Parameters, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  subcomponents: { "Button.Danger": Button.Danger },
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

const allArgs: Partial<ArgTypes<ButtonProps>> = {
  size: {
    options: ["small", "default", "large"],
    control: { type: "radio" },
  },
  wide: { type: "boolean" },
  justified: { type: "boolean" },
  circle: { type: "boolean" },
  asLink: { type: "boolean" },
  selected: { type: "boolean" },
  className: { type: "string" },
  icon: { type: "boolean" },
};

const argsDefaults: Partial<ButtonProps> = {
  size: "default",
  children: "Button, click me",
};

const parameters: Parameters = {
  docs: {
    source: {
      language: "tsx",
      excludeDecorators: true,
    },
  },
};

export const Default: Story = {
  render: ({ children, ...args }) => {
    return (
      <Button {...args}>
        {args.icon ? <span className="icon-check" /> : children}
      </Button>
    );
  },
  args: {
    color: "primary",
    ...argsDefaults,
  },
  argTypes: {
    color: {
      options: [
        "primary",
        "secondary",
        "success",
        "dark",
        "ghost",
        "link",
        "light",
        "danger",
      ],
      control: { type: "select" },
    },
    ...allArgs,
  },
  parameters,
};

export const BPrimary: StoryObj<typeof Button.Primary> = {
  render: ({ children, ...args }) => {
    return (
      <Button.Primary {...args}>
        {args.icon ? <span className="icon-check" /> : children}
      </Button.Primary>
    );
  },
  args: argsDefaults,
  argTypes: allArgs,
  parameters,
  name: "Primary",
};

export const BSecondary: StoryObj<typeof Button.Secondary> = {
  render: ({ children, ...args }) => {
    return (
      <Button.Secondary {...args}>
        {args.icon ? <span className="icon-check" /> : children}
      </Button.Secondary>
    );
  },
  args: argsDefaults,
  argTypes: allArgs,
  parameters,
  name: "Secondary",
};

export const BSuccess: StoryObj<typeof Button.Success> = {
  render: ({ children, ...args }) => {
    return (
      <Button.Success {...args}>
        {args.icon ? <span className="icon-check" /> : children}
      </Button.Success>
    );
  },
  args: argsDefaults,
  argTypes: allArgs,
  parameters,
  name: "Success",
};

export const BDark: StoryObj<typeof Button.Dark> = {
  render: ({ children, ...args }) => {
    return (
      <Button.Dark {...args}>
        {args.icon ? <span className="icon-check" /> : children}
      </Button.Dark>
    );
  },
  args: argsDefaults,
  argTypes: allArgs,
  parameters,
  name: "Dark",
};

export const BGhost: StoryObj<typeof Button.Ghost> = {
  render: ({ children, ...args }) => {
    return (
      <Button.Ghost {...args}>
        {args.icon ? <span className="icon-check" /> : children}
      </Button.Ghost>
    );
  },
  args: argsDefaults,
  argTypes: { ...allArgs, fullGhost: { type: "boolean" } },
  parameters,
  name: "Ghost",
};

export const BLink: StoryObj<typeof Button.Link> = {
  render: ({ children, ...args }) => {
    return (
      <Button.Link {...args}>
        {args.icon ? <span className="icon-check" /> : children}
      </Button.Link>
    );
  },
  args: argsDefaults,
  argTypes: allArgs,
  parameters,
  name: "Link",
};

export const BLight: StoryObj<typeof Button.Light> = {
  render: ({ children, ...args }) => {
    return (
      <Button.Light {...args}>
        {args.icon ? <span className="icon-check" /> : children}
      </Button.Light>
    );
  },
  args: argsDefaults,
  argTypes: allArgs,
  parameters,
  name: "Light",
};

export const BDanger: StoryObj<typeof Button.Danger> = {
  render: ({ children, ...args }) => {
    return (
      <Button.Danger {...args}>
        {args.icon ? <span className="icon-check" /> : children}
      </Button.Danger>
    );
  },
  args: argsDefaults,
  argTypes: allArgs,
  parameters,
  name: "Danger",
};
