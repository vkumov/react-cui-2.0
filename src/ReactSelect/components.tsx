import React from "react";
import cx from "classnames";
import type {
  GroupHeadingProps,
  GroupProps,
  MultiValueGenericProps,
  MultiValueRemoveProps,
} from "react-select";

import type { LabelColor } from "src/Label";

export const MultiValueContainer = (
  props: MultiValueGenericProps<any>
): JSX.Element => {
  const color: LabelColor =
    (props.selectProps as any).multiValueColor || "primary";
  return (
    <div
      className={cx(
        `label label--${color} label--small`,
        props.innerProps?.className
      )}
    >
      {props.children}
    </div>
  );
};

export const MultiValueLabel = (props: MultiValueGenericProps): JSX.Element => {
  return <span>{props.children}</span>;
};

export const MultiValueRemove = ({
  innerProps: props,
}: MultiValueRemoveProps): JSX.Element => {
  return <span {...props} className="icon-close" />;
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
    <div className={cx("dropdown__group", className)} {...innerProps}>
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
>({ className, children }: GroupHeadingProps<Option, IsMulti>) {
  return (
    <div className={cx("dropdown__group-header", className)}>{children}</div>
  );
}
