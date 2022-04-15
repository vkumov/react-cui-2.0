import React, { FC } from "react";
import {
  ToastContainer as ToastifyContainer,
  ToastContainerProps,
  Slide,
} from "react-toastify";

export const ToastContainer: FC<ToastContainerProps> = ({
  position = "bottom-right",
  autoClose = 5000,
  draggable = false,
  hideProgressBar = true,
  containerId = "_GLOBAL_",
  ...props
}) => (
  <ToastifyContainer
    transition={Slide}
    position={position}
    autoClose={autoClose}
    draggable={draggable}
    hideProgressBar={hideProgressBar}
    containerId={containerId}
    {...props}
    closeButton={false}
    style={{
      width: "unset",
    }}
  />
);
