import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, b as _objectSpread2, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';

var css = "body.cui .btn.btn--light{border:1px solid transparent;background:var(--cui-background-alt);color:var(--cui-inactive-color);transition:all .15s ease-in}body.cui .btn.btn--light.hover,body.cui .btn.btn--light:hover{color:var(--cui-active-color);text-decoration:none;box-shadow:inset 0 0 0 1px var(--cui-accent-color);transition:all .15s ease-in}body.cui .btn.btn--light.focus,body.cui .btn.btn--light:focus{box-shadow:0 0 0 var(--cui-focus-thickness) rgba(var(--cui-focus-color),var(--cui-focus-opacity)),inset 0 0 0 1px var(--cui-accent-color);opacity:1;outline:var(--cui-focus-thickness) transparent;outline-offset:1px;outline-width:thin;outline-style:none}body.cui .btn.btn--light.disabled,body.cui .btn.btn--light[disabled]{background-color:transparent;border:1px dotted var(--cui-inactive-color);color:var(--cui-inactive-color);opacity:1}body.cui .btn.btn--light.active,body.cui .btn.btn--light.selected,body.cui .btn.btn--light:active{background-color:var(--cui-accent-color);box-shadow:inset 0 0 0 1px var(--cui-accent-color);color:var(--cui-color-dark);-webkit-transition:all .25s ease;transition:all .25s ease}.cui .btn-group>.btn.btn--light:active,.cui .btn-group>.btn.btn--light:focus,.cui .btn-group>.btn.btn--light:hover,.cui .btn-group>.dropdown>.btn.btn--light:active,.cui .btn-group>.dropdown>.btn.btn--light:focus,.cui .btn-group>.dropdown>.btn.btn--light:hover{outline:0;box-shadow:inset 0 0 0 1px var(--cui-accent-color)}";
styleInject(css);

const Button = (_ref) => {
  let {
    size,
    color,
    wide,
    justified,
    circle,
    className,
    asLink,
    style,
    selected,
    type,
    icon
  } = _ref,
      props = _objectWithoutProperties(_ref, ["size", "color", "wide", "justified", "circle", "className", "asLink", "style", "selected", "type", "icon"]);

  return React.createElement(asLink ? "a" : "button", _objectSpread2({
    className: `btn${appendClass(size !== "default", `btn--${size}`)} btn--${color}${appendClass(wide, "btn--wide")}${appendClass(justified, "btn--justified")}${appendClass(icon, "btn--icon")}${appendClass(circle, "btn--circle")}${appendClass(selected, "selected")}${appendClass(className)}${appendClass(asLink, "flex-middle flex-center")}`,
    style: _objectSpread2({}, style || {}, {}, asLink ? {
      display: "flex"
    } : {})
  }, asLink ? {} : {
    type: type || "button"
  }, {}, props));
};

Button.Primary = props => React.createElement(Button, _extends({}, props, {
  color: "primary"
}));

Button.Secondary = props => React.createElement(Button, _extends({}, props, {
  color: "secondary"
}));

Button.Success = props => React.createElement(Button, _extends({}, props, {
  color: "success"
}));

Button.Dark = props => React.createElement(Button, _extends({}, props, {
  color: "dark"
}));

Button.Ghost = props => React.createElement(Button, _extends({}, props, {
  color: "ghost"
}));

Button.Link = props => React.createElement(Button, _extends({}, props, {
  color: "link"
}));

Button.Light = props => React.createElement(Button, _extends({}, props, {
  color: "light"
}));

Button.Danger = props => React.createElement(Button, _extends({}, props, {
  color: "danger"
}));

Button.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "success", "dark", "ghost", "link", "light", "danger"]),
  wide: PropTypes.bool,
  justified: PropTypes.bool,
  circle: PropTypes.bool,
  asLink: PropTypes.bool,
  selected: PropTypes.bool,
  style: PropTypes.shape({}),
  className: PropTypes.string,
  icon: PropTypes.bool,
  type: PropTypes.string
};
Button.defaultProps = {
  size: "default",
  color: "primary",
  wide: false,
  justified: false,
  circle: false,
  asLink: false,
  selected: false,
  style: null,
  className: null,
  icon: false,
  type: null
};
const ButtonGroup = (_ref2) => {
  let {
    square,
    withDivider,
    className
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["square", "withDivider", "className"]);

  return React.createElement("div", _extends({
    className: `btn-group${appendClass(square, "btn-group--square")}${appendClass(withDivider, " btn-group--divider")}${appendClass(className)}`
  }, props));
};
ButtonGroup.propTypes = {
  square: PropTypes.bool,
  withDivider: PropTypes.bool,
  className: PropTypes.string
};
ButtonGroup.defaultProps = {
  square: false,
  withDivider: false,
  className: null
};

export { Button, ButtonGroup };
