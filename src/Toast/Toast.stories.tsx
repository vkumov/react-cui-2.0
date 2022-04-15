import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ToastContainerProps } from "react-toastify";

import { Button } from "../Button";
import { toast, Toast, ToastContainer, ToastProps } from "./index";

export default {
  title: "Toast",
  component: Toast,
} as Meta;

export const Primary: Story<
  ToastProps & Pick<ToastContainerProps, "position">
> = ({ type, title, message, copyError, ...args }) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Toast</h3>
      <Button.Primary onClick={() => toast(type, title, message, copyError)}>
        Show toast
      </Button.Primary>
      <ToastContainer autoClose={false} {...args} />
    </div>
  );
};

Primary.args = {
  title: "Toast title",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  type: "info",
  position: "bottom-right",
};
