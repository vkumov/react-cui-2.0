import React, { FC, useRef } from "react";
import type { Meta } from "@storybook/react";

import { ContextMenu } from ".";
import { Menu, MenuDivider, MenuElement, MenuGroup } from "../Dropdown";
import { Panel } from "../Panel";

export default {
  title: "Components/ContextMenu",
  component: ContextMenu,
  parameters: {
    docs: {
      source: {
        language: "tsx",
      },
    },
  },
  excludeStories: ["Primary"],
} as Meta<typeof ContextMenu>;

// type Story = StoryObj<typeof ContextMenu>;

export const Example: FC = () => {
  const pRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Panel
        bordered
        style={{ width: "300px", height: "150px" }}
        padding="loose"
        ref={pRef}
      >
        Right click on me!
      </Panel>
      <ContextMenu contextMenuRef={pRef}>
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
      </ContextMenu>
    </>
  );
};
