import React from "react";
import {
  ToastContainer as ToastifyContainer,
  ToastContainerProps,
  Slide,
} from "react-toastify";
import { appendClass } from "src/utils";

type ExtraPorps = {
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
}: ToastContainerProps & ExtraPorps): JSX.Element => (
  <ToastifyContainer
    transition={transition}
    position={position}
    autoClose={autoClose}
    draggable={draggable}
    hideProgressBar={hideProgressBar}
    containerId={containerId}
    {...props}
    closeButton={false}
    bodyClassName={`${bodyClassName || ""}${appendClass(
      bordered,
      "toast--bordered"
    )}`}
    toastClassName={`${toastClassName || ""}${appendClass(
      shadow === "md",
      "toast--shadow-md"
    )}${appendClass(shadow === "sm", "toast--shadow-sm")}`}
    style={{
      width: "unset",
    }}
  />
);
