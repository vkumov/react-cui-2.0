import React, { forwardRef, HTMLProps } from "react";

import { ConditionalWrapper } from "src/Conditional";
import { appendClass as ac } from "src/utils";

const Wrapper = <div className="responsive-table" />;

export type GenericTableProps = {
  outerWrap?: boolean;
  lined?: boolean;
  bordered?: boolean;
  striped?: boolean;
  selectable?: boolean;
  fixed?: boolean;
  wrapped?: boolean;
  compressed?: boolean;
  loose?: boolean;
} & HTMLProps<HTMLTableElement>;

export const GenericTable = forwardRef<HTMLTableElement, GenericTableProps>(
  (
    {
      outerWrap = true,
      lined = false,
      bordered = false,
      striped = false,
      selectable = false,
      fixed = false,
      wrapped = false,
      compressed = false,
      loose = false,
      className = null,
      ...props
    },
    forwardedRef
  ) => (
    <ConditionalWrapper condition={outerWrap} wrapper={Wrapper}>
      <table
        className={`table${ac(lined, "table--lined")}${ac(
          bordered,
          "table--bordered"
        )}${ac(striped, "table--striped")}${ac(
          selectable,
          "table--selectable"
        )}${ac(fixed, "table--fixed")}${ac(wrapped, "table--wrapped")}${ac(
          compressed,
          "table--compressed"
        )}${ac(loose, "table--loose")}${ac(className)}`}
        {...props}
        ref={forwardedRef}
      />
    </ConditionalWrapper>
  )
);
