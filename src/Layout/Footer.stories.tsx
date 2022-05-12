import React from "react";
import { Footer as LibFooter } from "./index";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Layout/Footer",
  component: LibFooter,
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

export const Footer: Story = () => (
  <div className="section base-margin-top dbl-margin-bottom">
    <h3 className="display-5">Footer</h3>
    <LibFooter />
  </div>
);
