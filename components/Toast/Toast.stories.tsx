import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "../Button";
import { toast, Toast, ToastContainer, ToastProps } from "./index";

export default {
  title: "Toast",
  component: Toast,
} as Meta;

export const Primary: Story<ToastProps> = (args) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Toast</h3>
      <Button.Primary
        onClick={() =>
          toast(args.type, args.title, args.message, args.copyError)
        }
      >
        Show toast
      </Button.Primary>
      <ToastContainer />
    </div>
  );
};

Primary.args = {
  title: "Toast title",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  type: "info",
};
