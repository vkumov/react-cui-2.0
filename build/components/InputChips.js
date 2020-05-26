import React from 'react';
import PropTypes from 'prop-types';
import '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';
import { getIn } from 'formik';
import { InputHelpBlock } from './InputHelpBlock.js';
import { Label } from './Label.js';
import { InputHelpBaloon } from './InputHelpBaloon.js';

var css = ".cui .form-group .chips .input{-moz-appearance:none;-webkit-appearance:none;background:var(--cui-form-background);border-radius:var(--cui-border-radius);border:var(--cui-border);box-shadow:none;color:var(--cui-form-value-color);flex-shrink:0;flex:1;font-family:var(--cui-font-stack);font-size:var(--cui-font-size);font-weight:var(--cui-form-value-font-weight);height:var(--cui-form-size);line-height:2.4rem;max-height:var(--cui-form-size);min-height:var(--cui-form-size);order:3;padding:var(--cui-form-padding);padding-left:0;transition:all var(--cui-animate-speed) var(--cui-animate-timing-function);align-items:center;box-sizing:border-box;display:flex;position:relative}.cui .form-group .chips .input.focus,.cui .form-group .chips .input.hover,.cui .form-group .chips .input:focus,.cui .form-group .chips .input:hover{border-color:var(--cui-accent-color)}.cui .form-group .chips .input.focus,.cui .form-group .chips .input:focus{box-shadow:0 0 0 var(--cui-focus-thickness) rgba(var(--cui-focus-color),var(--cui-focus-opacity));opacity:1;outline:transparent var(--cui-focus-thickness);outline-offset:1px;outline-width:thin;outline-style:none}.cui .form-group .chips .input.disabled~label,.cui .form-group .chips .input[disabled]~label{opacity:.5;cursor:not-allowed!important;pointer-events:none!important;z-index:0!important}.cui .form-group .chips .chips-outer{overflow:hidden;white-space:nowrap;padding-left:var(--cui-form-padding)}.cui .form-group .chips .chips-outer>.chips-inner{white-space:normal}.cui .form-group .chips .input input{border:none;height:calc(var(--cui-form-size) - 2px);max-height:calc(var(--cui-form-size) - 2px);min-height:calc(var(--cui-form-size) - 2px);padding-top:calc(var(--cui-form-padding) - 1px);padding-bottom:calc(var(--cui-form-padding) - 1px);background:transparent}.cui .form-group .chips .input input:focus{box-shadow:unset}.cui .form-group.form-group--error .chips .input{border-color:var(--cui-theme-danger)}";
styleInject(css);

/* eslint-disable no-param-reassign */
const InputChips = React.forwardRef(({
  className,
  field,
  label,
  form: {
    touched,
    errors,
    setFieldValue,
    setFieldTouched
  },
  chipsColor,
  addOnBlur,
  allowRegex,
  allowRepeat,
  delimiters,
  valueValidator,
  maxChips,
  baloon,
  id
}, ref) => {
  const [focused, setFocus] = React.useState(false);
  const addValue = React.useCallback(v => {
    if (typeof valueValidator === "function") {
      v = valueValidator(v);
      if (v === false) return;
    }

    if (allowRepeat) {
      setFieldValue(field.name, [...field.value, v]);
    } else if (!field.value.includes(v)) setFieldValue(field.name, [...field.value, v]);
  }, [allowRepeat, valueValidator, field.name, field.value]);
  const handleKeyDown = React.useCallback(event => {
    let d = delimiters;

    if (typeof d === "string") {
      const {
        map
      } = Array.prototype;
      d = map.call(d, ch => ch.charCodeAt(0));
    }

    if (d.includes(event.keyCode)) {
      addValue(event.target.value);
      event.target.value = "";
      event.stopPropagation();
      event.preventDefault();
    }
  }, [delimiters, addValue]);
  const handleBlur = React.useCallback(event => {
    if (addOnBlur && event.target && event.target.value) {
      const {
        value
      } = event.target;

      if (allowRegex && RegExp(allowRegex).test(value)) {
        addValue(value);
      } else if (!allowRegex) {
        addValue(value);
      }
    }

    event.target.value = "";
    setFocus(false);
    field.onBlur(event);
  }, [addOnBlur, allowRegex, addValue, field]);
  const handleDelete = React.useCallback(idx => {
    const na = [...field.value];
    na.splice(idx, 1);
    setFieldTouched(field.name, true);
    setFieldValue(field.name, na);
  }, [field.name, field.value]);
  React.useEffect(() => {
    if (!Number.isNaN(maxChips) && Array.isArray(field.value) && field.value.length >= maxChips) setFocus(false);
  }, [field.value, maxChips]);
  return React.createElement("div", {
    className: `form-group${appendClass(className)}${appendClass(getIn(touched, field.name) && getIn(errors, field.name), "form-group--error")}`,
    ref: ref
  }, React.createElement("div", {
    className: "form-group__text chips"
  }, label ? React.createElement("label", {
    htmlFor: id || field.name
  }, label, baloon ? React.createElement(InputHelpBaloon, {
    baloon: baloon
  }) : null) : null, React.createElement("div", {
    className: `input${appendClass(focused, "focus")}`
  }, Array.isArray(field.value) && field.value.length ? React.createElement("span", {
    className: "chips-outer"
  }, React.createElement("span", {
    className: "chips-inner"
  }, field.value.map((v, i) => React.createElement(Label, {
    removable: true,
    onRemove: () => handleDelete(i),
    color: chipsColor,
    size: "tiny",
    key: `${v}-${i}`,
    className: "qtr-margin-bottom"
  }, v)))) : null, !maxChips || maxChips && Array.isArray(field.value) && field.value.length < maxChips ? React.createElement("input", {
    type: "text",
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    onFocus: () => setFocus(true),
    id: id || field.name
  }) : null)), getIn(touched, field.name) && getIn(errors, field.name) ? React.createElement(InputHelpBlock, {
    text: getIn(errors, field.name)
  }) : null);
});
InputChips.propTypes = {
  label: PropTypes.node,
  chipsColor: PropTypes.oneOf(["info", "success", "warning", "warning-alt", "danger", "blue", "dkgray", "vibblue", "indigo", "default", "ltgray", "white", "ghost"]),
  addOnBlur: PropTypes.bool,
  allowRepeat: PropTypes.bool,
  allowRegex: PropTypes.string,
  delimiters: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.number)]),
  valueValidator: PropTypes.func,
  maxChips: PropTypes.number,
  baloon: PropTypes.string,
  className: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.any,
    value: PropTypes.any,
    onBlur: PropTypes.func
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.shape({}),
    errors: PropTypes.shape({}),
    setFieldValue: PropTypes.func,
    setFieldTouched: PropTypes.func
  }).isRequired,
  id: PropTypes.string
};
InputChips.defaultProps = {
  chipsColor: "default",
  addOnBlur: true,
  delimiters: [13],
  label: null,
  allowRepeat: false,
  allowRegex: null,
  valueValidator: null,
  maxChips: null,
  baloon: null,
  className: null,
  id: null
};

export { InputChips };
