import React from "react";
import {
  Dropdown as LibDropdown,
  Menu,
  MenuDivider,
  MenuElement,
  MenuGroup,
} from "./index";
import { Button } from "../Button";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Dropdown",
  component: LibDropdown,
  subcomponents: {
    Menu,
    MenuDivider,
    MenuElement,
    MenuGroup,
  },
} as Meta;

const ThreeItems = () => (
  <>
    <MenuElement>Item one</MenuElement>
    <MenuElement>Item two</MenuElement>
    <MenuElement selected>Item three</MenuElement>
  </>
);

export const Dropdown: Story = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Structure</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Stays open when item clicked</div>
          <LibDropdown
            label={<Button.Primary>Dropdown</Button.Primary>}
            alwaysClose={false}
          >
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
              <ThreeItems />
            </Menu>
          </LibDropdown>
        </div>
        <div className="col">
          <div className="subheader">
            Closes when item clicked (alwaysClose = true)
          </div>
          <LibDropdown
            label={<Button.Primary>Dropdown</Button.Primary>}
            alwaysClose
          >
            <MenuElement>Item one</MenuElement>
            <MenuElement>Item two</MenuElement>
            <MenuElement selected>Item three</MenuElement>
            <MenuDivider />
            <MenuGroup header="Group">
              <MenuElement>Item one</MenuElement>
              <MenuElement>Item two</MenuElement>
            </MenuGroup>
            <MenuElement
              icon="icon-social-facebook"
              onClick={() => console.log("facebook")}
            >
              Facebook
            </MenuElement>
            <MenuElement
              icon="icon-social-twitter"
              onClick={() => console.log("twitter")}
            >
              Twitter
            </MenuElement>
          </LibDropdown>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Type</h3>
      <div className="row">
        <div className="col-3">
          <LibDropdown label={<Button.Primary>Dropdown</Button.Primary>}>
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-3">
          <LibDropdown label={<div>Div</div>}>
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-3">
          <LibDropdown label={<a>Link</a>}>
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-3">
          <LibDropdown label={<span className="icon-add-outline" />} noChevron>
            <ThreeItems />
          </LibDropdown>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Alignment</h3>
      <div className="row">
        <div className="col-4">
          <LibDropdown
            placement="bottom-start"
            label={<Button.Primary>To the right</Button.Primary>}
          >
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-4">
          <LibDropdown
            placement="bottom"
            label={<Button.Primary>Centered</Button.Primary>}
          >
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-4">
          <LibDropdown
            placement="bottom-end"
            label={<Button.Primary>To the left</Button.Primary>}
          >
            <ThreeItems />
          </LibDropdown>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Direction</h3>
      <div className="row">
        <div className="col-4">
          <LibDropdown label={<Button.Primary>Default</Button.Primary>}>
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-4">
          <LibDropdown
            placement="top"
            label={<Button.Primary>Up preferred</Button.Primary>}
          >
            <ThreeItems />
          </LibDropdown>
        </div>
      </div>
    </div>
  </>
);
