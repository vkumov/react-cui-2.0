import React from "react";
import { Dropdown as LibDropdown } from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Dropdown",
  component: LibDropdown,
  subcomponents: {
    "Dropdown.Element": LibDropdown.Element,
    "Dropdown.Divider": LibDropdown.Divider,
    "Dropdown.Group": LibDropdown.Group,
  },
} as Meta;

const ThreeItems = () => (
  <>
    <LibDropdown.Element>Item one</LibDropdown.Element>
    <LibDropdown.Element>Item two</LibDropdown.Element>
    <LibDropdown.Element selected>Item three</LibDropdown.Element>
  </>
);

export const Dropdown: Story = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Structure</h3>
      <div className="row">
        <div className="col">
          <div className="subheader">Stays open when item clicked</div>
          <LibDropdown header="Dropdown">
            <LibDropdown.Element>Item one</LibDropdown.Element>
            <LibDropdown.Element>Item two</LibDropdown.Element>
            <LibDropdown.Element selected>Item three</LibDropdown.Element>
            <LibDropdown.Divider />
            <LibDropdown.Group>
              <LibDropdown.GroupHeader header="Group" />
              <LibDropdown.Element>Item one</LibDropdown.Element>
              <LibDropdown.Element>Item two</LibDropdown.Element>
            </LibDropdown.Group>
            <LibDropdown.Element icon="social-facebook">
              Facebook
            </LibDropdown.Element>
            <LibDropdown.Element icon="social-twitter">
              Twitter
            </LibDropdown.Element>
          </LibDropdown>
        </div>
        <div className="col">
          <div className="subheader">Closes open when item clicked</div>
          <LibDropdown header="Dropdown" alwaysClose>
            <LibDropdown.Element>Item one</LibDropdown.Element>
            <LibDropdown.Element>Item two</LibDropdown.Element>
            <LibDropdown.Element selected>Item three</LibDropdown.Element>
            <LibDropdown.Divider />
            <LibDropdown.Group>
              <LibDropdown.GroupHeader header="Group" />
              <LibDropdown.Element>Item one</LibDropdown.Element>
              <LibDropdown.Element>Item two</LibDropdown.Element>
            </LibDropdown.Group>
            <LibDropdown.Element icon="social-facebook">
              Facebook
            </LibDropdown.Element>
            <LibDropdown.Element icon="social-twitter">
              Twitter
            </LibDropdown.Element>
          </LibDropdown>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Type</h3>
      <div className="row">
        <div className="col-3">
          <LibDropdown type="button" header="Button">
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-3">
          <LibDropdown type="div" header="Div">
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-3">
          <LibDropdown type="link" header="Link">
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-3">
          <LibDropdown type="icon" header="Icon" className="icon-add-outline">
            <ThreeItems />
          </LibDropdown>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Alignment</h3>
      <div className="row">
        <div className="col-4">
          <LibDropdown openTo="right" header="To the right">
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-4">
          <LibDropdown openTo="center" header="Centered">
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-4">
          <LibDropdown openTo="left" header="To the left">
            <ThreeItems />
          </LibDropdown>
        </div>
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Direction</h3>
      <div className="row">
        <div className="col-4">
          <LibDropdown header="Down">
            <ThreeItems />
          </LibDropdown>
        </div>
        <div className="col-4">
          <LibDropdown up header="Up">
            <ThreeItems />
          </LibDropdown>
        </div>
      </div>
    </div>
  </>
);
