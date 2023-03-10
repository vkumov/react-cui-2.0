import React, { useRef } from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { ContextMenu as OG } from ".";
import { Menu, MenuDivider, MenuElement, MenuGroup } from "../Dropdown";
import { FloatingProvider } from "../FloatingProvider";
import { Panel } from "../Panel";

export default {
  title: "Components/ContextMenu",
  component: OG,
} as Meta;

export const ContextMenu: Story = () => {
  const pRef = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);

  return (
    <div className="section base-margin-top dbl-margin-bottom" ref={root}>
      <h3 className="display-5">Context Menu</h3>
      <div className="row">
        <div className="col">
          <Panel
            bordered
            style={{ width: "300px", height: "150px" }}
            padding="loose"
            ref={pRef}
          >
            Right click on me!
          </Panel>
          <OG contextMenuRef={pRef}>
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
          </OG>
        </div>
      </div>
    </div>
  );
};
