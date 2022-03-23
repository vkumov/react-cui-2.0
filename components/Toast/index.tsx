import React, { FC, ReactNode } from "react";
import {
  toast as _toast,
  ToastContainer as ToastifyContainer,
  UpdateOptions,
  ToastContainerProps,
  Slide,
} from "react-toastify";

import "../../css/toast.css";
import { copyStringToClipboard } from "../../utils/clipboard";

const iconType = (type: string): string => {
  switch (type) {
    case "success":
      return "text-success icon-check-outline";
    case "error":
      return "text-danger icon-error-outline";
    case "warning":
      return "text-warning icon-warning-outline";
    case "info":
      return "text-info icon-info-outline";
    case "none":
      return null;
    default:
      return "text-muted icon-alert";
  }
};

const ToastIcon = ({ type }) => {
  return <div className={`toast__icon ${iconType(type) || ""}`} />;
};

type ToastType = "success" | "error" | "warning" | "info" | "none";
export type ToastProps = {
  title: ReactNode;
  message: ReactNode;
  type: ToastType;
  copyError: boolean;
};

export const Toast: FC<ToastProps> = ({ title, message, type, copyError }) => (
  <div className="toast">
    <ToastIcon type={type} />
    <div className="toast__body">
      {title ? <div className="toast__title">{title}</div> : null}
      {message ? (
        <div className="toast__message">
          {message}
          {type === "error" && copyError ? (
            <>
              <br />
              <br />
              <a
                onClick={() =>
                  typeof message === "string" || typeof message === "number"
                    ? void copyStringToClipboard(message)
                    : void 0
                }
              >
                Copy to clipboard
              </a>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  </div>
);

type ToastFunction = (
  title: ReactNode,
  message: ReactNode,
  copyError?: boolean,
  containerId?: string,
  args?: Record<string, unknown>
) => React.ReactText;

export interface IToast {
  (
    type: ToastType,
    title: ReactNode,
    message: ReactNode,
    copyError?: boolean,
    containerId?: string,
    args?: Record<string, unknown>
  ): React.ReactText;
}

type Toasts = {
  [x in ToastType]: ToastFunction;
};

interface ToastMethods {
  update: (toastId: React.ReactText, options?: UpdateOptions) => void;
  dismiss: (id?: string | number | undefined) => false | void;
}

export const toast: IToast & Toasts & ToastMethods = (
  type,
  title,
  message,
  copyError = true,
  containerId = "_GLOBAL_",
  args = {}
): React.ReactText =>
  _toast(<Toast {...{ type, title, message, copyError }} />, {
    containerId,
    ...args,
  });

toast.success = (...args) => toast("success", ...args);
toast.error = (...args) => toast("error", ...args);
toast.warning = (...args) => toast("warning", ...args);
toast.info = (...args) => toast("info", ...args);
toast.none = (...args) => toast("none", ...args);
toast.update = (...args) => _toast.update(...args);
toast.dismiss = (...args) => _toast.dismiss(...args);

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
