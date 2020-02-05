/* eslint-disable import/prefer-default-export */
import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import { getIn } from "formik";

import { InputHelpBlock } from "./InputHelpBlock";

const SelectContext = React.createContext();

const SelectOption = ({ value, children, disabled }) => {
  const { multiple, isSelected, optionClick } = React.useContext(SelectContext);

  if (multiple) {
    return (
      <a disabled={disabled}>
        <label className="checkbox">
          <input
            type="checkbox"
            onClick={e =>
              optionClick(
                e,
                value,
                Array.isArray(children) ? children.join("") : children
              )
            }
            checked={isSelected(value)}
          />
          <span className="checkbox__input" />
        </label>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <a
      disabled={disabled}
      onClick={e =>
        optionClick(
          e,
          value,
          Array.isArray(children) ? children.join("") : children
        )
      }
      className={isSelected(value) ? "selected" : ""}
    >
      {children}
    </a>
  );
};

const SelectOptgroup = ({ label, children }) => (
  <div className="dropdown__group">
    <div className="dropdown__group-header">{label}</div>
    <SelectChildren>{children}</SelectChildren>
  </div>
);

const SelectChildren = children =>
  React.Children.map(children, child => {
    switch (child.type) {
      case "option":
        return <SelectOption {...child.props} />;
      case "optgroup":
        return <SelectOptgroup {...child.props} />;
      default:
        return child;
    }
  });

export const Select = ({
  compressed,
  id,
  label,
  prompt,
  multiple,
  inline,
  up,
  disabled,
  width,
  field,
  form,
  className,
  ...props
}) => {
  const [isOpen, setOpen] = React.useState(false);
  const [displayTitle, setDisplayTitle] = React.useState(multiple ? [] : "");
  const node = React.useRef();

  const { touched, errors } = form;

  const handleClick = () => {
    if (!isOpen) {
      // attach/remove event handler
      document.addEventListener("click", handleOutsideClick, false);
    } else {
      document.removeEventListener("click", handleOutsideClick, false);
    }

    setOpen(prev => !prev);
  };

  const handleOutsideClick = e => {
    // ignore clicks on the component itself
    const n = node.current;
    if (n && n.contains(e.target)) return;

    handleClick();
  };

  const handleOptionClick = (e, newValue, title) => {
    if (!multiple) {
      form.setFieldValue(field.name, newValue);
      form.setFieldTouched(field.name, true);
      setDisplayTitle(title);

      handleClick();
    } else {
      if (e.target.checked) {
        form.setFieldValue(field.name, [...field.value, newValue]);
        form.setFieldTouched(field.name, true);
        setDisplayTitle(prev => [...prev, title]);
      } else {
        form.setFieldValue(
          field.name,
          field.value.filter(v => v !== newValue)
        );
        form.setFieldTouched(field.name, true);
        setDisplayTitle(prev => prev.filter(t => t !== title));
      }
    }
  };

  const isSelected = checkValue => {
    const { value } = field;
    if (multiple) {
      return (
        Array.isArray(value) && value.findIndex(v => v === checkValue) >= 0
      );
    }
    return value === checkValue;
  };

  const findTitle = where => {
    const r = [];
    React.Children.forEach(where || props.children, ch => {
      if (ch.type === "optgroup") {
        const temp = findTitle(ch.props.children);
        if (temp) r.push(temp);
      }
      if (isSelected(ch.props.value)) {
        r.push(
          Array.isArray(ch.props.children)
            ? ch.props.children.join("")
            : ch.props.children
        );
      }
    });
    return r.join(", ");
  };

  const getShowValue = () => {
    if (
      typeof field.value === "undefined" ||
      field.value === null ||
      !field.value.toString().length
    ) {
      return prompt;
    }

    if (multiple) {
      return displayTitle.length ? displayTitle.join(", ") : findTitle();
    }
    return displayTitle || findTitle();
  };

  return (
    <div
      className={`form-group dropdown${isOpen ? " active" : ""}${
        inline ? " label--inline" : ""
      }${up ? " dropdown--up" : ""}${disabled ? " disabled" : ""}${
        className ? ` ${className}` : ""
      }${
        getIn(touched, field.name) && getIn(errors, field.name)
          ? " form-group--error"
          : ""
      }`}
      ref={node}
      {...(inline === "both" ? { style: { display: "inline-block" } } : {})}
    >
      <div className="form-group__text select" onClick={handleClick}>
        <input
          id={id}
          {...field}
          value={getShowValue()}
          disabled={disabled}
          {...(width
            ? { style: { width: `${width}px`, minWidth: `${width}px` } }
            : {})}
        />
        {label ? <label htmlFor={id}>{label}</label> : null}
      </div>
      <div
        className="dropdown__menu"
        {...(width
          ? { style: { width: `${width}px`, minWidth: `${width}px` } }
          : {})}
      >
        <SelectContext.Provider
          value={{ multiple, optionClick: handleOptionClick, isSelected }}
        >
          <SelectChildren>{props.children}</SelectChildren>
        </SelectContext.Provider>
      </div>
      {getIn(touched, field.name) && getIn(errors, field.name) ? (
        <InputHelpBlock text={getIn(errors, field.name)} />
      ) : null}
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  prompt: PropTypes.string,
  multiple: PropTypes.bool,
  inline: PropTypes.oneOf([false, true, "both"]),
  up: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  compressed: PropTypes.bool
};

Select.defaultProps = {
  prompt: "Select an option",
  multiple: false,
  inline: false,
  id: uuid(),
  label: null,
  width: null,
  up: false,
  disabled: false,
  compressed: false
};
