import React from "react";
import type {
  MultiValueGenericProps,
  MultiValueRemoveProps,
} from "react-select";

import { appendClass } from "src/utils";
import type { LabelColor } from "src/Label";

export const MultiValueContainer = (
  props: MultiValueGenericProps<any>
): JSX.Element => {
  const color: LabelColor =
    (props.selectProps as any).multiValueColor || "primary";
  return (
    <div
      className={`label label--${color} label--small${appendClass(
        props.innerProps?.className
      )}`}
    >
      {props.children}
    </div>
  );
};

export const MultiValueLabel = (props: MultiValueGenericProps): JSX.Element => {
  return <span>{props.children}</span>;
};

export const MultiValueRemove = ({
  innerProps: { className, ...props },
}: MultiValueRemoveProps): JSX.Element => {
  return <span className="icon-close" {...props} />;
};
