import React, { FC } from "react";

import { appendClass as ac } from "src/utils";

export type LabelColor =
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

type LabelProps = React.PropsWithChildren<{
  size?: "tiny" | "small" | "default" | "large";
  color?: LabelColor;
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
