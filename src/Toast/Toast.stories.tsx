import React, { ComponentProps, useCallback } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button } from "../Button";
import { toast, Toast as T, ToastContainer, ToastProps } from "./index";

export default {
  title: "Components/Toast",
  component: T,
} as Meta;

export const Toast: Story<
  ToastProps &
    Pick<
      ComponentProps<typeof ToastContainer>,
      "position" | "bordered" | "shadow"
    >
> = ({ type, title, message, copyError, ...args }) => {
  const showLoadingToast = useCallback(() => {
    const id = toast.loading(
      "Loading",
      "This is a loading toast, will change after 5 seconds"
    );
    setTimeout(() => {
      toast.update(
        id,
        {
          type: "success",
          title: "Done",
          message: "All loaded! Closing in 2 seconds",
        },
        { autoClose: 2000 }
      );
    }, 5000);
  }, []);

  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Toast</h3>
        <Button.Primary onClick={() => toast(type, title, message, copyError)}>
          Show toast
        </Button.Primary>

        <p>Check source code to see how toasts called</p>
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Loding toast</h3>
        <Button.Primary onClick={showLoadingToast}>
          Show loading toast
        </Button.Primary>
      </div>
      <ToastContainer {...args} />
    </>
  );
};

Toast.parameters = {
  docs: {
    source: {
      code: `<Button.Primary onClick={() => toast(type, title, message, copyError)}>
  Show toast
</Button.Primary>

// Loading toast
const showLoadingToast = useCallback(() => {
  const id = toast.loading(
    "Loading",
    "This is a loading toast, will change after 5 seconds"
  );
  setTimeout(() => {
    toast.update(
      id,
      {
        type: "success",
        title: "Done",
        message: "All loaded! Closing in 2 seconds",
      },
      { autoClose: 2000 }
    );
  }, 5000);
}, []);

<Button.Primary onClick={showLoadingToast}>
  Show loading toast
</Button.Primary>
`,
      language: "tsx",
    },
  },
};

Toast.args = {
  title: "Toast title",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  type: "info",
  position: "bottom-right",
  bordered: false,
  shadow: "lg",
};

Toast.argTypes = {
  position: {
    options: [
      "top-right",
      "top-center",
      "top-left",
      "bottom-right",
      "bottom-center",
      "bottom-left",
    ],
    type: { name: "string", required: false },
    control: "select",
  },
  shadow: {
    options: ["lg", "md", "sm"],
    type: { name: "string", required: false },
    control: "radio",
  },
};
