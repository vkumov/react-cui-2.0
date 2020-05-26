import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { getIn } from 'formik';
import { InputHelpBlock } from './InputHelpBlock.js';

const Textarea = (_ref) => {
  let {
    className,
    id,
    field,
    label,
    inline,
    form: {
      touched,
      errors
    },
    inputRef,
    textareaClass,
    innerDivClass,
    resize
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "id", "field", "label", "inline", "form", "inputRef", "textareaClass", "innerDivClass", "resize"]);

  return React.createElement("div", {
    className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(className)}${getIn(touched, field.name) && getIn(errors, field.name) ? " form-group--error" : ""}`
  }, React.createElement("div", {
    className: `form-group__text${appendClass(innerDivClass)}`
  }, React.createElement("textarea", _extends({}, field, {
    className: textareaClass,
    id: id,
    ref: inputRef
  }, rest), field.value), label ? React.createElement("label", {
    htmlFor: id
  }, label) : null), getIn(touched, field.name) && getIn(errors, field.name) ? React.createElement(InputHelpBlock, {
    text: getIn(errors, field.name)
  }) : null);
};

Textarea.propTypes = {
  label: PropTypes.node,
  textareaClass: PropTypes.string,
  innerDivClass: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  })]),
  className: PropTypes.string,
  id: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape({}),
    errors: PropTypes.shape({})
  }).isRequired,
  resize: PropTypes.bool,
  inline: PropTypes.bool
};
Textarea.defaultProps = {
  label: null,
  textareaClass: null,
  innerDivClass: null,
  className: null,
  id: null,
  inputRef: null,
  resize: false,
  inline: false
};

export { Textarea };
