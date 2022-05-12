import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ToastContainerProps } from "react-toastify";

import { Button } from "../Button";
import { toast, Toast as T, ToastContainer, ToastProps } from "./index";

export default {
  title: "Components/Toast",
  component: T,
} as Meta;

export const Toast: Story<
  ToastProps & Pick<ToastContainerProps, "position">
> = ({ type, title, message, copyError, ...args }) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Toast</h3>
      <Button.Primary onClick={() => toast(type, title, message, copyError)}>
        Show toast
      </Button.Primary>
      <ToastContainer {...args} />
      <p>Check source code to see how toasts called</p>
    </div>
  );
};

Toast.parameters = {
  docs: {
    source: {
      code: `<Button.Primary onClick={() => toast(type, title, message, copyError)}>
  Show toast
</Button.Primary>`,
      language: "tsx",
    },
  },
};

Toast.args = {
  title: "Toast title",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  type: "info",
  position: "bottom-right",
};
