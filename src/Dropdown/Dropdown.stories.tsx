import React, { ComponentProps } from "react";
import type { ArgTypes, Meta, Parameters, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Dropdown, Menu, MenuDivider, MenuElement, MenuGroup } from "./index";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  subcomponents: {
    Menu,
    MenuDivider,
    MenuElement,
    MenuGroup,
  },
} as Meta;

type Story = StoryObj<typeof Dropdown>;

const argTypes: Partial<ArgTypes<ComponentProps<typeof Dropdown>>> = {
  placement: {
    options: [
      "top",
      "right",
      "bottom",
      "left",
      "top-start",
      "top-end",
      "right-start",
      "right-end",
      "bottom-start",
      "bottom-end",
      "left-start",
      "left-end",
    ],
    control: { type: "select" },
  },
  noChevron: { type: "boolean" },
  alwaysClose: { type: "boolean" },
  isOpen: { type: "boolean" },
  withSizeLimit: { type: "boolean" },
};

const parameters: Parameters = {
  docs: {
    source: {
      language: "tsx",
      excludeDecorators: true,
    },
  },
};

const CustomElement = () => <MenuElement>Hey, I'm custom one!</MenuElement>;

export const Default: Story = {
  render: (args) => (
    <Dropdown {...args} label={<Button.Primary>Dropdown</Button.Primary>}>
      <MenuElement>Item one</MenuElement>
      <MenuElement>Item two</MenuElement>
      <MenuElement selected>Item three</MenuElement>
      <MenuDivider />
      <MenuGroup header="Group">
        <MenuElement>Item one</MenuElement>
        <MenuElement>Item two</MenuElement>
      </MenuGroup>
      <MenuElement icon="icon-social-facebook">Facebook</MenuElement>
      <MenuElement icon="icon-social-twitter">Twitter</MenuElement>
      <MenuDivider />
      <Menu label="And with sub menu">
        <MenuElement>Item one</MenuElement>
        <MenuElement>Item two</MenuElement>
        <MenuElement selected>Item three</MenuElement>
      </Menu>
      <MenuDivider />
      <CustomElement />
    </Dropdown>
  ),
  parameters,
  argTypes,
};

export const Link: Story = {
  render: (args) => (
    <Dropdown {...args} label={<a>Dropdown as a link</a>}>
      <MenuElement
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Item one
      </MenuElement>
      <MenuElement>Item two</MenuElement>
      <MenuElement selected>Item three</MenuElement>
      <MenuDivider />
      <MenuGroup header="Group">
        <MenuElement>Item one</MenuElement>
        <MenuElement>Item two</MenuElement>
      </MenuGroup>
      <MenuElement icon="icon-social-facebook">Facebook</MenuElement>
      <MenuElement icon="icon-social-twitter">Twitter</MenuElement>
      <MenuDivider />
      <Menu label="And with sub menu">
        <MenuElement>Item one</MenuElement>
        <MenuElement>Item two</MenuElement>
        <MenuElement selected>Item three</MenuElement>
      </Menu>
    </Dropdown>
  ),
  argTypes,
  parameters,
};
