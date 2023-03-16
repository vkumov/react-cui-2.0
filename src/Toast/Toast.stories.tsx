import React, { ComponentProps, useCallback } from "react";
import { Meta, StoryFn } from "@storybook/react";
import dedent from "ts-dedent";

import { Button } from "../Button";
import { Toast, ToastContainer, ToastProps, toast } from "./index";

export default {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof Toast>;

export const Default: StoryFn<
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

Default.parameters = {
  docs: {
    source: {
      code: dedent`const Component = ({ type, title, message, copyError }) => {
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
            <ToastContainer />
          </>
        );
      }`,
      language: "tsx",
    },
  },
};

Default.args = {
  title: "Toast title",
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  type: "info",
  position: "bottom-right",
  bordered: false,
  shadow: "lg",
};

Default.argTypes = {
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
