import React from "react";
import type {
  GroupHeadingProps,
  GroupProps,
  MultiValueGenericProps,
  MultiValueRemoveProps,
} from "react-select";

import type { LabelColor } from "src/Label";
import { appendClass } from "src/utils";

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

export function Group<Option = unknown, IsMulti extends boolean = boolean>({
  className,
  children,
  Heading,
  headingProps,
  innerProps,
  ...props
}: GroupProps<Option, IsMulti>) {
  return (
    <div className={`dropdown__group${appendClass(className)}`} {...innerProps}>
      <Heading {...props} id={headingProps.id}>
        {headingProps.data.label}
      </Heading>
      {children}
    </div>
  );
}

export function GroupHeading<
  Option = unknown,
  IsMulti extends boolean = boolean
>({ className, children, ...props }: GroupHeadingProps<Option, IsMulti>) {
  return (
    <div className={`dropdown__group-header${appendClass(className)}`}>
      {children}
    </div>
  );
}
