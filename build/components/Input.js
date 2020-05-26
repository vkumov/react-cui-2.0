import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { getIn } from 'formik';
import { DisplayIf } from './Conditional.js';
import { InputHelpBlock } from './InputHelpBlock.js';

const Input = (_ref) => {
  let {
    className,
    id,
    field,
    label,
    type,
    form: {
      touched,
      errors
    },
    inputRef,
    inline,
    icon,
    iconClick,
    helpBlock,
    plain
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "id", "field", "label", "type", "form", "inputRef", "inline", "icon", "iconClick", "helpBlock", "plain"]);

  return React.createElement("div", {
    className: `form-group${appendClass(className)}${appendClass(getIn(touched, field.name) && getIn(errors, field.name), "form-group--error")}${appendClass(inline === "form" || inline === "both", "form-group--inline")}${appendClass(inline === "label" || inline === "both", "label--inline")}${appendClass(icon, "input--icon")}`
  }, React.createElement("div", {
    className: "form-group__text"
  }, React.createElement("input", _extends({}, field, {
    id: id || field.name,
    type: type,
    ref: inputRef
  }, rest, {
    className: appendClass(plain, "form-group--plaintext")
  })), label ? React.createElement("label", {
    htmlFor: id || field.name
  }, label) : null, icon ? React.createElement("button", {
    type: "button",
    className: "link",
    tabIndex: "-1",
    onClick: iconClick
  }, React.createElement("span", {
    className: `icon-${icon}`
  })) : null), React.createElement(DisplayIf, {
    condition: !inline && helpBlock && !!getIn(touched, field.name) && !!getIn(errors, field.name)
  }, React.createElement(InputHelpBlock, {
    text: getIn(errors, field.name)
  })));
};

Input.propTypes = {
  label: PropTypes.node,
  type: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  })]),
  inline: PropTypes.oneOf([false, "group", "label", "both"]),
  helpBlock: PropTypes.bool,
  form: PropTypes.shape({
    values: PropTypes.object,
    touched: PropTypes.shape({}),
    errors: PropTypes.shape({})
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func
  }).isRequired,
  iconClick: PropTypes.func,
  icon: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  plain: PropTypes.bool
};
Input.defaultProps = {
  type: "text",
  inline: false,
  helpBlock: true,
  label: null,
  icon: null,
  iconClick: null,
  id: null,
  className: null,
  plain: false,
  inputRef: null
};

export { Input };
