import React from "react";
import cx from "classnames";
import {
  Slide,
  ToastContainer as ToastifyContainer,
  type ToastContainerProps,
} from "react-toastify";

type ExtraProps = {
  bordered?: boolean;
  shadow?: "sm" | "md" | "lg";
};

export const ToastContainer = ({
  position = "bottom-right",
  autoClose = 5000,
  draggable = false,
  hideProgressBar = true,
  containerId = "_GLOBAL_",
  transition = Slide,
  bordered,
  shadow = "lg",
  bodyClassName,
  toastClassName,
  ...props
}: ToastContainerProps & ExtraProps): JSX.Element => (
  <ToastifyContainer
    transition={transition}
    position={position}
    autoClose={autoClose}
    draggable={draggable}
    hideProgressBar={hideProgressBar}
    containerId={containerId}
    {...props}
    closeButton={false}
    bodyClassName={
      typeof bodyClassName === "function"
        ? bodyClassName
        : cx({ [bodyClassName]: bodyClassName, "toast--bordered": bordered })
    }
    toastClassName={
      typeof toastClassName === "function"
        ? toastClassName
        : cx({
            [toastClassName]: toastClassName,
            [`toast--shadow-${shadow}`]: shadow !== "lg",
          })
    }
    style={{
      width: "unset",
    }}
  />
);
