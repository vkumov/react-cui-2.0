import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { getIn } from 'formik';
import { InputHelpBlock } from './InputHelpBlock.js';

const SelectChildren = ({
  children,
  handleOptionClick,
  isSelected
}) => React.Children.map(children, (child, idx) => {
  switch (child.type) {
    case "option":
      return React.createElement("a", {
        key: idx,
        disabled: child.props.disabled,
        onClick: e => handleOptionClick(e, child.props.value),
        className: isSelected(child.props.value) ? "selected" : ""
      }, child.props.children);

    case "optgroup":
      return React.createElement("div", {
        key: idx,
        className: "dropdown__group"
      }, React.createElement("div", {
        className: "dropdown__group-header"
      }, child.props.label), React.createElement(SelectChildren, {
        handleOptionClick: handleOptionClick,
        isSelected: isSelected
      }, child.props.children));

    default:
      return child;
  }
});

const EditableSelect = React.forwardRef((_ref, innerRef) => {
  let {
    children,
    compressed,
    field,
    form,
    id,
    inline,
    prompt,
    title,
    type
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "compressed", "field", "form", "id", "inline", "prompt", "title", "type"]);

  const [isOpen, setOpen] = React.useState(false);
  const [node, setNode] = React.useState(undefined);
  let handleOutsideClick;

  const handleClick = (newState = true) => {
    if (newState && !isOpen) document.addEventListener("click", handleOutsideClick, false);else document.removeEventListener("click", handleOutsideClick, false);
    setOpen(newState);
  };

  handleOutsideClick = e => {
    const n = innerRef || node;
    if (n && n.contains(e.target)) return;
    handleClick(false);
  };

  const handleOptionClick = (_e, newValue) => {
    form.setFieldValue(field.name, newValue);
    form.setFieldTouched(field.name, true);
    handleClick(false);
  };

  const isSelected = checkValue => field.value === checkValue;

  return React.createElement("div", {
    className: `form-group dropdown${appendClass(compressed, "input--compressed")}${appendClass(isOpen, "active")}${appendClass(inline, "label--inline")}${appendClass(getIn(form.touched, field.name) && getIn(form.errors, field.name), " form-group--error")}`,
    ref: innerRef || (n => setNode(n))
  }, React.createElement("div", {
    className: "form-group__text select editable",
    onClick: () => handleClick(true)
  }, React.createElement("input", _extends({
    id: id || field.name
  }, field, {
    type: type,
    placeholder: prompt,
    autoComplete: "off"
  }, rest)), React.createElement("label", {
    htmlFor: id || field.name
  }, title)), React.createElement("div", {
    className: "dropdown__menu"
  }, React.createElement(SelectChildren, {
    handleOptionClick: handleOptionClick,
    isSelected: isSelected
  }, children)), getIn(form.touched, field.name) && getIn(form.errors, field.name) ? React.createElement(InputHelpBlock, {
    text: getIn(form.errors, field.name)
  }) : null);
});
EditableSelect.propTypes = {
  compressed: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  prompt: PropTypes.string,
  inline: PropTypes.bool,
  type: PropTypes.oneOf(["number", "text"]),
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.any
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.any,
    errors: PropTypes.any,
    setFieldValue: PropTypes.func,
    setFieldTouched: PropTypes.func
  }).isRequired,
  children: PropTypes.node.isRequired
};
EditableSelect.defaultProps = {
  compressed: false,
  prompt: "Select an option",
  inline: false,
  type: "text",
  id: null
};

export { EditableSelect };
