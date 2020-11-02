import React, { FC, ReactNode } from "react";
import {
  toast as _toast,
  cssTransition,
  ToastContainer as ToastifyContainer,
  UpdateOptions,
  ToastPosition,
} from "react-toastify";
import PropTypes from "prop-types";
import "../css/toast.css";

const copyStringToClipboard = (str: React.ReactText): void => {
  // Create new element
  const el = document.createElement("textarea");
  // Set value (string to be copied)
  el.value = typeof str === "string" ? str : str.toString();
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("readonly", "");
  el.style["position"] = "absolute";
  el.style["left"] = "-9999px";
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand("copy");
  // Remove temporary element
  document.body.removeChild(el);
};

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
type ToastProps = {
  title: ReactNode;
  message: React.ReactText;
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
              <a onClick={() => copyStringToClipboard(message)}>
                Copy to clipboard
              </a>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  </div>
);

const Fade = cssTransition({
  enter: "fadeIn",
  exit: "fadeOut",
  duration: 300,
});

type ToastFunction = (
  title: ReactNode,
  message: React.ReactText,
  copyError?: boolean,
  containerId?: string,
  args?: Record<string, unknown>
) => React.ReactText;

interface IToast {
  (
    type: ToastType,
    title: ReactNode,
    message: React.ReactText,
    copyError: boolean,
    containerId: string,
    args: Record<string, unknown>
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

type ToastContainerProps = {
  position?: ToastPosition;
  autoClose?: number;
  draggable?: boolean;
  hideProgressBar?: boolean;
  containerId?: string | number;
  [x: string]: unknown;
};

export const ToastContainer: FC<ToastContainerProps> = ({
  position = "bottom-right",
  autoClose = 5000,
  draggable = false,
  hideProgressBar = true,
  containerId = "_GLOBAL_",
  ...props
}) => (
  <ToastifyContainer
    transition={Fade}
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

ToastContainer.propTypes = {
  position: PropTypes.oneOf([
    "top-right",
    "top-center",
    "top-left",
    "bottom-right",
    "bottom-center",
    "bottom-left",
  ]),
  autoClose: PropTypes.number,
  draggable: PropTypes.bool,
  hideProgressBar: PropTypes.bool,
  containerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
