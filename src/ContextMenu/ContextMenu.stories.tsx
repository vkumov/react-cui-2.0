import React, { useRef } from "react";
import { MenuDivider, MenuElement, MenuGroup, Menu } from "../Dropdown";
import { Panel } from "../Panel";
import { ContextMenu as OG } from ".";
import { Story, Meta } from "@storybook/react/types-6-0";
import { FloatingProvider } from "../FloatingProvider";

export default {
  title: "Components/ContextMenu",
  component: OG,
} as Meta;

export const ContextMenu: Story = () => {
  const pRef = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);

  return (
    <FloatingProvider rootRef={root}>
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
    </FloatingProvider>
  );
};
