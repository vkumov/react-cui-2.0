import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { getIn, FormikProps, FieldInputProps } from "formik";

import { InputHelpBlock } from "./InputHelpBlock";
import { appendClass as ac } from "../utils";

const SelectChildren = ({ children, handleOptionClick, isSelected }) =>
  React.Children.map(children, (child, idx) => {
    switch (child.type) {
      case "option":
        return (
          <a
            key={idx}
            onClick={(e) => handleOptionClick(e, child.props.value)}
            className={`${ac(isSelected(child.props.value), "selected")}${ac(
              child.props.disabled,
              "disabled"
            )}`}
          >
            {child.props.children}
          </a>
        );
      case "optgroup":
        return (
          <div key={idx} className="dropdown__group">
            <div className="dropdown__group-header">{child.props.label}</div>
            <SelectChildren
              handleOptionClick={handleOptionClick}
              isSelected={isSelected}
            >
              {child.props.children}
            </SelectChildren>
          </div>
        );
      default:
        return child;
    }
  });

type EditableSelectProps = {
  field: FieldInputProps<any>;
  form: Pick<
    FormikProps<any>,
    "touched" | "errors" | "values" | "setFieldValue" | "setFieldTouched"
  >;
  compressed?: boolean;
  id?: string;
  title: ReactNode;
  prompt?: string;
  inline?: boolean;
  type?: "number" | "text";
  children: ReactNode;
};

export const EditableSelect = React.forwardRef<
  HTMLDivElement,
  EditableSelectProps
>(
  (
    {
      compressed = false,
      prompt = "Select an option",
      inline = false,
      type = "text",
      id = null,
      children,
      field,
      form,
      title,
      ...rest
    },
    innerRef
  ) => {
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const [node, setNode] = React.useState(undefined);

    // eslint-disable-next-line prefer-const
    let handleOutsideClick: (e) => void;

    const handleClick = (newState = true) => {
      if (newState && !isOpen)
        document.addEventListener("click", handleOutsideClick, false);
      else document.removeEventListener("click", handleOutsideClick, false);

      setOpen(newState);
    };

    handleOutsideClick = (e) => {
      const n = innerRef || node;
      if (n && n.contains(e.target)) return;

      handleClick(false);
    };

    const handleOptionClick = (_e, newValue) => {
      form.setFieldValue(field.name, newValue);
      form.setFieldTouched(field.name, true);

      handleClick(false);
    };

    const isSelected = (checkValue) => field.value === checkValue;

    return (
      <div
        className={`form-group dropdown${ac(
          compressed,
          "input--compressed"
        )}${ac(isOpen, "active")}${ac(inline, "label--inline")}${ac(
          getIn(form.touched, field.name) && getIn(form.errors, field.name),
          " form-group--error"
        )}`}
        ref={innerRef || ((n) => setNode(n))}
      >
        <div
          className="form-group__text select editable"
          onClick={() => handleClick(true)}
        >
          <input
            id={id || field.name}
            {...field}
            type={type}
            placeholder={prompt}
            autoComplete="off"
            {...rest}
          />
          <label htmlFor={id || field.name}>{title}</label>
        </div>
        <div className="dropdown__menu">
          <SelectChildren
            handleOptionClick={handleOptionClick}
            isSelected={isSelected}
          >
            {children}
          </SelectChildren>
        </div>
        {getIn(form.touched, field.name) && getIn(form.errors, field.name) ? (
          <InputHelpBlock text={getIn(form.errors, field.name)} />
        ) : null}
      </div>
    );
  }
);

EditableSelect.propTypes = {
  compressed: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  prompt: PropTypes.string,
  inline: PropTypes.bool,
  type: PropTypes.oneOf(["number", "text"]),
  children: PropTypes.node.isRequired,
};
