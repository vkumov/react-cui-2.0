import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button as Btn, ButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Btn,
} as Meta;

export const Button: Story<ButtonProps> = (args) => {
  const [ref, setRef] = React.useState(null);

  React.useEffect(() => {
    console.log("Got the refs");
    console.log({ ref });
  }, [ref]);

  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Button</h3>
      <Btn {...args} ref={setRef}>
        {args.icon ? <span className="icon-check" /> : "Button"}
      </Btn>
    </div>
  );
};

Button.args = {
  color: "primary",
  size: "default",
};

Button.argTypes = {
  color: {
    options: [
      "primary",
      "secondary",
      "success",
      "dark",
      "ghost",
      "link",
      "light",
      "danger",
    ],
    type: { name: "string", required: false },
    control: "select",
  },
  size: {
    options: ["small", "default", "large"],
    type: { name: "string", required: false },
    control: "radio",
  },
};
