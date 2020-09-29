import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";

type LabelProps = {
  size?: "tiny" | "small" | "default" | "large";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "info"
    | "warning-alt"
    | "warning"
    | "danger"
    | "dark"
    | "light";
  bordered?: boolean;
  removable?: boolean;
  onRemove?: (e) => void;
  raised?: boolean;
  className?: string;
  children: ReactNode;
  [x: string]: any;
};

type LabelTypes =
  | "Primary"
  | "Secondary"
  | "Tertiary"
  | "Success"
  | "Info"
  | "WarningAlt"
  | "Warning"
  | "Danger"
  | "Dark"
  | "Light";
type ILabel = {
  [x in LabelTypes]: FC<LabelProps>;
};

export const Label: ILabel & FC<LabelProps> = ({
  size = "default",
  color = "primary",
  bordered = false,
  removable = false,
  onRemove = null,
  raised = false,
  className = null,
  children,
  ...props
}) => (
  <span
    className={`${"label" + ` label--${color}`}${
      size !== "default" ? ` label--${size}` : ""
    }${bordered ? " label--bordered" : ""}${raised ? " label--raised" : ""}${
      className ? ` ${className}` : ""
    }`}
    {...props}
  >
    {children}
    {removable ? <span className="icon-close" onClick={onRemove} /> : null}
  </span>
);

Label.propTypes = {
  size: PropTypes.oneOf(["tiny", "small", "default", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "info",
    "warning-alt",
    "warning",
    "danger",
    "dark",
    "light",
  ]),
  bordered: PropTypes.bool,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  raised: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Label.Primary = ({ color, ...props }) => <Label color="primary" {...props} />;
Label.Secondary = ({ color, ...props }) => (
  <Label color="secondary" {...props} />
);
Label.Tertiary = ({ color, ...props }) => <Label color="tertiary" {...props} />;
Label.Success = ({ color, ...props }) => <Label color="success" {...props} />;
Label.Info = ({ color, ...props }) => <Label color="info" {...props} />;
Label.WarningAlt = ({ color, ...props }) => (
  <Label color="warning-alt" {...props} />
);
Label.Warning = ({ color, ...props }) => <Label color="warning" {...props} />;
Label.Danger = ({ color, ...props }) => <Label color="danger" {...props} />;
Label.Dark = ({ color, ...props }) => <Label color="dark" {...props} />;
Label.Light = ({ color, ...props }) => <Label color="light" {...props} />;