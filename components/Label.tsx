import React, { FC } from "react";
import PropTypes from "prop-types";
import { appendClass as ac } from "../utils";

type LabelProps = React.PropsWithChildren<{
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
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

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
    className={`label label--${color}${ac(
      size !== "default",
      `label--${size}`
    )}${ac(bordered, "label--bordered")}${ac(raised, "label--raised")}${ac(
      className
    )}`}
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

Label.Primary = (props) => <Label color="primary" {...props} />;
Label.Secondary = (props) => <Label color="secondary" {...props} />;
Label.Tertiary = (props) => <Label color="tertiary" {...props} />;
Label.Success = (props) => <Label color="success" {...props} />;
Label.Info = (props) => <Label color="info" {...props} />;
Label.WarningAlt = (props) => <Label color="warning-alt" {...props} />;
Label.Warning = (props) => <Label color="warning" {...props} />;
Label.Danger = (props) => <Label color="danger" {...props} />;
Label.Dark = (props) => <Label color="dark" {...props} />;
Label.Light = (props) => <Label color="light" {...props} />;
