import React, { FC, ReactNode } from "react";
import { ToastOptions, UpdateOptions, toast as _toast } from "react-toastify";

import { appendClass } from "src/utils";
import { copyStringToClipboard } from "src/utils/clipboard";

type ToastType = "success" | "error" | "warning" | "info" | "loading" | "none";

const iconType = (type: ToastType): string => {
  switch (type) {
    case "success":
      return "text-success icon-check-outline";
    case "error":
      return "text-danger icon-error-outline";
    case "warning":
      return "text-warning icon-warning-outline";
    case "info":
      return "text-info icon-info-outline";
    case "loading":
      return "text-muted icon-spinner spin";
    case "none":
      return null;
    default:
      return "text-muted icon-alert";
  }
};

const ToastIcon = ({ type }) => {
  return type ? (
    <div className="toast__icon">
      <span className={iconType(type)} />
    </div>
  ) : null;
};

export type ToastProps = {
  title: ReactNode;
  message: ReactNode;
  type: ToastType;
  copyError?: boolean;
  bordered?: boolean;
};

export const Toast: FC<ToastProps> = ({
  title,
  message,
  type,
  copyError = false,
  bordered = false,
}) => (
  <div className={`toast${appendClass(bordered, "toast--bordered")}`}>
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
    args?: Partial<ToastOptions>
  ): React.ReactText;
}

type Toasts = {
  [x in ToastType]: ToastFunction;
};

interface ToastMethods {
  update: (
    toastId: React.ReactText,
    updates: ToastProps,
    options?: UpdateOptions
  ) => void;
  dismiss: (id?: string | number | undefined) => false | void;
}

export const toast: IToast & Toasts & ToastMethods = (
  type,
  title,
  message,
  copyError = true,
  containerId = "_GLOBAL_",
  args = {}
): React.ReactText => {
  if (type === "loading") {
    args.autoClose ??= false;
  }

  return _toast(() => <Toast {...{ type, title, message, copyError }} />, {
    containerId,
    ...args,
  });
};

toast.success = (...args) => toast("success", ...args);
toast.error = (...args) => toast("error", ...args);
toast.warning = (...args) => toast("warning", ...args);
toast.info = (...args) => toast("info", ...args);
toast.loading = (...args) => toast("loading", ...args);
toast.none = (...args) => toast("none", ...args);
toast.update = (toastId, updates, options) => {
  options.render = <Toast {...updates} />;
  _toast.update(toastId, options);
};
toast.dismiss = (...args) => _toast.dismiss(...args);
