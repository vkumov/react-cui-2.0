/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import { getIn } from "formik";

import { InputHelpBlock } from "./InputHelpBlock";
import { appendClass as ac } from "../utils";

const SelectChildren = ({ children, handleOptionClick, isSelected }) =>
  React.Children.map(children, (child, idx) => {
    switch (child.type) {
      case "option":
        return (
          <a
            key={idx}
            disabled={child.props.disabled}
            onClick={(e) => handleOptionClick(e, child.props.value)}
            className={isSelected(child.props.value) ? "selected" : ""}
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

export const EditableSelect = React.forwardRef(
  (
    {
      children,
      compressed,
      field,
      form,
      id,
      inline,
      prompt,
      title,
      type,
      ...rest
    },
    innerRef
  ) => {
    const [isOpen, setOpen] = React.useState(false);
    const [node, setNode] = React.useState(undefined);

    let handleOutsideClick;

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
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.any,
    errors: PropTypes.any,
    setFieldValue: PropTypes.func,
    setFieldTouched: PropTypes.func,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

EditableSelect.defaultProps = {
  compressed: false,
  prompt: "Select an option",
  inline: false,
  type: "text",
  id: null,
};
