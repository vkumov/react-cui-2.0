import React from "react";
import { Header as LibHeader, HeaderPanel, HeaderTitle } from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Layout/Header",
  component: LibHeader,
  subcomponents: { HeaderPanel, HeaderTitle },
} as Meta;

// const colors: DotsColor[] = [
//   "primary",
//   "secondary",
//   "tertiary",
//   "success",
//   "info",
//   "warning",
//   "warning-alt",
//   "danger",
//   "dark",
//   "light",
// ];

export const Header: Story = () => (
  <div className="section base-margin-top dbl-margin-bottom">
    <h3 className="display-5 dbl-margin-top">Header</h3>
    <LibHeader>
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
    </LibHeader>
  </div>
);
