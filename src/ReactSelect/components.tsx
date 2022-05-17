import React from "react";
import type {
  MultiValueGenericProps,
  MultiValueRemoveProps,
  GroupHeadingProps,
  GroupProps,
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

export const Group = <Option = unknown, IsMulti extends boolean = boolean>({
  className,
  children,
  Heading,
  headingProps,
  innerProps,
  ...props
}: GroupProps<Option, IsMulti>) => {
  return (
    <div className={`dropdown__group${appendClass(className)}`} {...innerProps}>
      <Heading {...props} id={headingProps.id}>
        {headingProps.data.label}
      </Heading>
      {children}
    </div>
  );
};

export const GroupHeading = <
  Option = unknown,
  IsMulti extends boolean = boolean
>({
  className,
  children,
  ...props
}: GroupHeadingProps<Option, IsMulti>) => (
  <div className={`dropdown__group-header${appendClass(className)}`}>
    {children}
  </div>
);
