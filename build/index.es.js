import React from 'react';
import PropTypes from 'prop-types';
import ReactDropzone from 'react-dropzone';
import bytes from 'bytes';
import { connect, getIn } from 'formik';
import uuid from 'uuid/v4';
import { cssTransition, toast as toast$1, ToastContainer as ToastContainer$1 } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Alert = function Alert(_ref) {
  var type = _ref.type,
      children = _ref.children,
      title = _ref.title,
      dismissable = _ref.dismissable,
      className = _ref.className,
      onDismiss = _ref.onDismiss,
      withIcon = _ref.withIcon,
      icon = _ref.icon;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dismissed = _React$useState2[0],
      setDismissed = _React$useState2[1];

  var handleDismiss = function handleDismiss(e) {
    setDismissed(true);
    if (onDismiss) onDismiss(e);
  };

  if (dismissed) return null;
  var alertClass;
  var iconClass;

  switch (type) {
    case "warning":
      alertClass = "alert--warning";
      iconClass = icon || "icon-warning-outline";
      break;

    case "warning-alt":
      alertClass = "alert--warning-alt";
      iconClass = icon || "icon-warning-outline";
      break;

    case "danger":
    case "error":
      alertClass = "alert--warning-alt";
      iconClass = icon || "icon-error-outline";
      break;

    case "success":
      alertClass = "alert--success";
      iconClass = icon || "icon-check-outline";
      break;

    case "dark":
      alertClass = "alert--dark";
      iconClass = icon || "icon-help-outline";
      break;

    case "light":
      alertClass = "alert--light";
      iconClass = icon || "icon-help-outline";
      break;

    default:
      alertClass = "alert--info";
      iconClass = icon || "icon-info-outline";
      break;
  }

  return React.createElement("div", {
    className: "alert ".concat(alertClass, " ").concat(className || "")
  }, withIcon ? React.createElement("div", {
    className: "alert__icon ".concat(iconClass)
  }) : null, React.createElement("div", {
    className: "alert__message"
  }, title && React.createElement("h4", null, title), children), dismissable && React.createElement("a", {
    className: "alert__close icon-close",
    onClick: handleDismiss
  }));
};
Alert.propTypes = {
  type: PropTypes.oneOf(["warning", "warning-alt", "danger", "error", "success", "dark", "light", "info"]),
  dismissable: PropTypes.bool,
  title: PropTypes.string,
  onDismiss: PropTypes.func,
  withIcon: PropTypes.bool,
  icon: PropTypes.string
};
Alert.defaultProps = {
  type: "info",
  dismissable: false,
  title: "",
  withIcon: true,
  onDismiss: null,
  icon: null
};

Alert.Warning = function (_ref2) {
  var type = _ref2.type,
      props = _objectWithoutProperties(_ref2, ["type"]);

  return React.createElement(Alert, _extends({
    type: "warning"
  }, props));
};

Alert.Danger = function (_ref3) {
  var type = _ref3.type,
      props = _objectWithoutProperties(_ref3, ["type"]);

  return React.createElement(Alert, _extends({
    type: "danger"
  }, props));
};

Alert.Error = function (_ref4) {
  var type = _ref4.type,
      props = _objectWithoutProperties(_ref4, ["type"]);

  return React.createElement(Alert, _extends({
    type: "error"
  }, props));
};

Alert.Success = function (_ref5) {
  var type = _ref5.type,
      props = _objectWithoutProperties(_ref5, ["type"]);

  return React.createElement(Alert, _extends({
    type: "success"
  }, props));
};

Alert.Info = function (_ref6) {
  var type = _ref6.type,
      props = _objectWithoutProperties(_ref6, ["type"]);

  return React.createElement(Alert, _extends({
    type: "info"
  }, props));
};

Alert.Dark = function (_ref7) {
  var type = _ref7.type,
      props = _objectWithoutProperties(_ref7, ["type"]);

  return React.createElement(Alert, _extends({
    type: "dark"
  }, props));
};

Alert.Light = function (_ref8) {
  var type = _ref8.type,
      props = _objectWithoutProperties(_ref8, ["type"]);

  return React.createElement(Alert, _extends({
    type: "light"
  }, props));
};

Alert.WarningAlt = function (_ref9) {
  var type = _ref9.type,
      props = _objectWithoutProperties(_ref9, ["type"]);

  return React.createElement(Alert, _extends({
    type: "warning-alt"
  }, props));
};

var DropdownHeader = function DropdownHeader(_ref) {
  var type = _ref.type,
      handleClick = _ref.handleClick,
      className = _ref.className,
      header = _ref.header;

  switch (type) {
    case "icon":
      return React.createElement("span", {
        onClick: handleClick,
        className: className
      });

    case "link":
      return React.createElement("a", {
        onClick: handleClick,
        className: className
      }, header);

    case "div":
      return React.createElement("div", {
        onClick: handleClick,
        className: className
      }, header);

    case "button":
      return React.createElement("button", {
        type: "button",
        onClick: handleClick,
        className: "btn ".concat(className)
      }, header);

    default:
      return React.cloneElement(header, {
        onClick: handleClick
      });
  }
};

var Dropdown = function Dropdown(_ref2) {
  var openTo = _ref2.openTo,
      children = _ref2.children,
      type = _ref2.type,
      className = _ref2.className,
      header = _ref2.header,
      divClassName = _ref2.divClassName,
      alwaysClose = _ref2.alwaysClose,
      stopPropagation = _ref2.stopPropagation,
      onOpen = _ref2.onOpen,
      onClose = _ref2.onClose,
      props = _objectWithoutProperties(_ref2, ["openTo", "children", "type", "className", "header", "divClassName", "alwaysClose", "stopPropagation", "onOpen", "onClose"]);

  var handleOutsideClick;
  var handleClick;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var nodeRef = React.useRef(null);
  React.useEffect(function () {
    return function () {
      return document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);

  handleOutsideClick = function handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (!alwaysClose && nodeRef.current && nodeRef.current.contains(e.target)) return;
    handleClick(e);
  };

  handleClick = function handleClick(e) {
    if (stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }

    if (!isOpen) {
      // attach/remove event handler
      document.addEventListener("click", handleOutsideClick, false);
    } else {
      document.removeEventListener("click", handleOutsideClick, false);
    }

    setIsOpen(function (prevState) {
      var newState = !prevState;
      if (newState && typeof onOpen === "function") onOpen(e);
      if (!newState && typeof onClose === "function") onClose(e);
      return newState;
    });
  };

  return React.createElement("div", _extends({
    className: "dropdown".concat(["left", "center"].includes(openTo) ? " dropdown--".concat(openTo) : "").concat(isOpen ? " active" : "").concat(divClassName ? " ".concat(divClassName) : ""),
    ref: nodeRef
  }, props), React.createElement(DropdownHeader, {
    type: type,
    handleClick: handleClick,
    className: className,
    header: header
  }), React.createElement("div", {
    className: "dropdown__menu"
  }, children));
};
Dropdown.propTypes = {
  type: PropTypes.oneOf(["icon", "link", "div", "button", "custom"]),
  className: PropTypes.string,
  header: PropTypes.node,
  openTo: PropTypes.oneOf([false, "left", "right", "center"]),
  alwaysClose: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  stopPropagation: PropTypes.bool,
  divClassName: PropTypes.string
};
Dropdown.defaultProps = {
  type: "button",
  openTo: false,
  className: null,
  header: null,
  alwaysClose: false,
  onOpen: null,
  onClose: null,
  stopPropagation: false,
  divClassName: null
};
var DropdownElement = function DropdownElement(_ref3) {
  var selected = _ref3.selected,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["selected", "children"]);

  return React.createElement("a", _extends({
    className: selected ? "selected" : ""
  }, props), children);
};
var DropdownDivider = function DropdownDivider() {
  return React.createElement("div", {
    className: "divider"
  });
};

var FileCard = function FileCard(_ref) {
  var file = _ref.file,
      i = _ref.i,
      removeFile = _ref.removeFile,
      inline = _ref.inline;
  return React.createElement("div", {
    className: "file-drop__card col-lg-4 col-md-6 col-sm-6",
    key: "".concat(i, "-").concat(file.name)
  }, React.createElement("div", {
    className: "panel panel--bordered hover-emboss--small",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, inline ? React.createElement("div", {
    className: "panel__body flex flex-row"
  }, React.createElement("div", {
    className: "text-left flex-fill",
    style: {
      maxWidth: "calc(100% - 20px)"
    }
  }, React.createElement("div", {
    className: "text-ellipsis"
  }, file.name), React.createElement("small", {
    style: {
      whiteSpace: "nowrap"
    }
  }, bytes.format(file.size, {
    unitSeparator: " "
  }))), React.createElement("a", {
    className: "link pull-right",
    onClick: function onClick() {
      return removeFile(i);
    }
  }, React.createElement("span", {
    className: "icon-close",
    title: "Remove the file."
  }))) : React.createElement("div", {
    className: "panel__body"
  }, React.createElement("a", {
    className: "link pull-right",
    style: {
      marginRight: "5px"
    },
    onClick: function onClick() {
      return removeFile(i);
    }
  }, React.createElement("span", {
    className: "icon-close",
    title: "Remove the file."
  })), React.createElement("div", {
    className: "text-ellipsis half-margin-bottom"
  }, file.name), React.createElement("span", {
    className: "file-icon text-muted icon-file-o qtr-margin-right"
  }), React.createElement("small", null, bytes.format(file.size, {
    unitSeparator: " "
  })))));
};

var Dropzone =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropzone, _React$Component);

  function Dropzone(props) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropzone).call(this, props));

    if (props.maxFileSize) {
      _this.maxFileSize = bytes.parse(props.maxFileSize);
    } else {
      _this.maxFileSize = null;
    }

    return _this;
  }

  _createClass(Dropzone, [{
    key: "removeFile",
    value: function removeFile(toRemove) {
      this.props.formik.setFieldValue(this.props.name, this.props.input.value.filter(function (_, idx) {
        return toRemove !== idx;
      }));
    } // renderFileCard = (file, i) => {
    //   return (
    //   );
    // };

  }, {
    key: "renderFiles",
    value: function renderFiles() {
      var _this2 = this;

      var files = this.props.input.value;

      if (!files || !files.length || !Array.isArray(files)) {
        return null;
      }

      return React.createElement("div", {
        className: "dropzone-previews"
      }, React.createElement("div", {
        className: "file-drop__container container--fluid"
      }, React.createElement("div", {
        className: "row"
      }, files.map(function (file, i) {
        return React.createElement(FileCard, {
          key: i,
          file: file,
          i: i,
          inline: _this2.props.inline,
          removeFile: _this2.removeFile
        });
      }))), this.props.showTotalSelected && React.createElement("div", {
        className: "file-drop__filecnt"
      }, files.length, " selected"));
    }
  }, {
    key: "renderMessage",
    value: function renderMessage() {
      var files = this.props.input.value;

      if (files && files.length) {
        return null;
      }

      if (this.props.inline) {
        return React.createElement("div", {
          className: "dropzone-message flex flex-row flex-center-vertical"
        }, React.createElement("h5", {
          className: "text-muted text-left flex-fill no-margin"
        }, "Click Here or Drop Files to Upload"), this.props.accept && React.createElement("span", {
          className: "text-muted text-small half-margin-right"
        }, "Allowed files: ", this.props.accept.split(",").join(", ")), React.createElement("span", {
          className: "file-drop__icon icon-upload"
        }));
      }

      return React.createElement("div", {
        className: "dropzone-message"
      }, React.createElement("span", {
        className: "file-drop__icon icon-upload"
      }), React.createElement("h4", {
        className: "text-muted"
      }, "Click Here or Drop Files to Upload"), this.props.accept && React.createElement("div", {
        className: "text-muted"
      }, "Allowed files: ", this.props.accept.split(",").join(", ")), this.maxFileSize && React.createElement("div", {
        className: "text-muted"
      }, "Max file size:", " ", bytes.format(this.maxFileSize, {
        unitSeparator: " "
      })));
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(filesToUpload) {
      var _this3 = this;

      if (this.maxFileSize) {
        filesToUpload = filesToUpload.filter(function (file) {
          return file.size <= _this3.maxFileSize;
        });
      }

      if (this.props.maxFiles && filesToUpload.length > this.props.maxFiles) {
        filesToUpload = filesToUpload.slice(0, this.props.maxFiles);
      }

      this.props.formik.setFieldValue(this.props.name, filesToUpload);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          meta = _this$props.meta,
          loose = _this$props.loose,
          compressed = _this$props.compressed;
      var padding = "";

      if (loose) {
        padding = "dropzone--loose";
      }

      if (compressed) {
        padding = "dropzone--compressed";
      }

      if (this.props.inline && this.props.input.value && this.props.input.value.length) {
        switch (padding) {
          case "dropzone--loose":
            padding = padding + " half-padding-bottom";
            break;

          case "dropzone--compressed":
            padding = padding + " no-padding-bottom";
            break;

          default:
            padding = padding + " qtr-padding-bottom";
            break;
        }
      }

      return React.createElement("div", {
        className: "form-group" + (meta.touched && meta.error ? " form-group--error" : "")
      }, React.createElement("div", {
        className: "form-group__text"
      }, this.props.label ? React.createElement("label", {
        htmlFor: this.props.name
      }, this.props.label) : null, React.createElement(ReactDropzone, {
        name: this.props.name,
        onDrop: this.handleDrop,
        maxSize: this.maxFileSize,
        multiple: this.props.multiple
      }, function (_ref2) {
        var getRootProps = _ref2.getRootProps,
            getInputProps = _ref2.getInputProps;
        return React.createElement("div", _extends({
          className: "dropzone ".concat(padding)
        }, getRootProps()), React.createElement("input", getInputProps()), _this4.renderFiles(), _this4.renderMessage());
      })), meta.touched && meta.error && React.createElement("div", {
        className: "help-block text-danger",
        role: "alert"
      }, React.createElement("span", null, meta.error)));
    }
  }]);

  return Dropzone;
}(React.Component);

Dropzone.propTypes = {
  label: PropTypes.string,
  accept: PropTypes.string,
  showTotalSelected: PropTypes.bool,
  maxFileSize: PropTypes.string,
  maxFiles: PropTypes.number,
  inline: PropTypes.bool,
  loose: PropTypes.bool,
  compressed: PropTypes.bool
};
var connected = connect(Dropzone);

var Spinner = function Spinner(_ref) {
  var size = _ref.size,
      text = _ref.text;
  return React.createElement("div", {
    className: "flex-center flex-middle",
    style: {
      flex: 1
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "loader".concat(size !== "default" ? " loader--".concat(size) : "", " flex-center")
  }, React.createElement("div", {
    className: "wrapper flex flex-center"
  }, React.createElement("div", {
    className: "wheel"
  }))), text === false ? null : React.createElement("div", {
    className: "base-margin-top text-center"
  }, text || "Loading...")));
};
Spinner.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]).isRequired,
  text: PropTypes.node
};
Spinner.defaultProps = {
  size: "default"
};
var Dots = function Dots(_ref2) {
  var color = _ref2.color;
  return React.createElement("div", {
    className: "loading-dots".concat(color !== "primary" ? " loading-dots--".concat(color) : "")
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null));
};
Spinner.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "success", "info", "warning", "warning-alt", "danger", "dark", "light"]).isRequired
};
Spinner.defaultProps = {
  color: "primary"
};

var Progressbar = function Progressbar(_ref) {
  var percentage = _ref.percentage,
      withLabel = _ref.withLabel,
      label = _ref.label,
      size = _ref.size,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["percentage", "withLabel", "label", "size", "color", "className"]);

  return React.createElement("div", _extends({
    className: "progressbar".concat(size !== "default" ? " progressbar--".concat(size) : "").concat(color ? " progressbar--".concat(color) : "").concat(className ? " ".concat(className) : ""),
    "data-percentage": percentage
  }, props), React.createElement("div", {
    className: "progressbar__fill"
  }), withLabel ? label ? React.createElement("div", {
    className: "progressbar__label"
  }, label) : React.createElement("div", {
    className: "progressbar__label"
  }, percentage, "%") : null);
};
Progressbar.propTypes = {
  percentage: PropTypes.number.isRequired,
  withLabel: PropTypes.bool,
  label: PropTypes.node,
  size: PropTypes.oneOf(["small", "default", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "success", "info", "warning-alt", "warning", "danger", "dark"])
};
Progressbar.defaultProps = {
  size: "default"
};

var Button = function Button(_ref) {
  var size = _ref.size,
      color = _ref.color,
      wide = _ref.wide,
      justified = _ref.justified,
      circle = _ref.circle,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["size", "color", "wide", "justified", "circle", "className"]);

  return React.createElement("button", _extends({
    className: "btn" + (size !== "default" ? " btn-".concat(size) : "") + " btn--".concat(color) + (wide ? " btn--wide" : "") + (justified ? " btn--justified" : "") + (circle ? " btn--circle" : "") + (className ? " ".concat(className) : "")
  }, props));
};

Button.Primary = function (_ref2) {
  var color = _ref2.color,
      props = _objectWithoutProperties(_ref2, ["color"]);

  return React.createElement(Button, _extends({
    color: "primary"
  }, props));
};

Button.Secondary = function (_ref3) {
  var color = _ref3.color,
      props = _objectWithoutProperties(_ref3, ["color"]);

  return React.createElement(Button, _extends({
    color: "secondary"
  }, props));
};

Button.Success = function (_ref4) {
  var color = _ref4.color,
      props = _objectWithoutProperties(_ref4, ["color"]);

  return React.createElement(Button, _extends({
    color: "success"
  }, props));
};

Button.Dark = function (_ref5) {
  var color = _ref5.color,
      props = _objectWithoutProperties(_ref5, ["color"]);

  return React.createElement(Button, _extends({
    color: "dark"
  }, props));
};

Button.Ghost = function (_ref6) {
  var color = _ref6.color,
      props = _objectWithoutProperties(_ref6, ["color"]);

  return React.createElement(Button, _extends({
    color: "ghost"
  }, props));
};

Button.Link = function (_ref7) {
  var color = _ref7.color,
      props = _objectWithoutProperties(_ref7, ["color"]);

  return React.createElement(Button, _extends({
    color: "link"
  }, props));
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "success", "dark", "ghost", "link"]),
  wide: PropTypes.bool,
  justified: PropTypes.bool,
  circle: PropTypes.bool
};
Button.defaultProps = {
  size: "default",
  color: "primary"
};
var ButtonGroup = function ButtonGroup(_ref8) {
  var square = _ref8.square,
      withDivider = _ref8.withDivider,
      className = _ref8.className,
      props = _objectWithoutProperties(_ref8, ["square", "withDivider", "className"]);

  return React.createElement("div", _extends({
    className: "btn-group" + (square ? " btn-group--square" : "") + (withDivider ? " btn-group--divider" : "")
  }, props));
};
ButtonGroup.propTypes = {
  square: PropTypes.bool,
  withDivider: PropTypes.bool
};

var Label = function Label(_ref) {
  var size = _ref.size,
      color = _ref.color,
      bordered = _ref.bordered,
      removable = _ref.removable,
      onRemove = _ref.onRemove,
      raised = _ref.raised,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["size", "color", "bordered", "removable", "onRemove", "raised", "className", "children"]);

  return React.createElement("span", _extends({
    className: "".concat("label" + " label--".concat(color)).concat(size !== "default" ? " label--".concat(size) : "").concat(bordered ? " label--bordered" : "").concat(raised ? " label--raised" : "")
  }, props), children, removable ? React.createElement("span", {
    "class": "icon-close",
    onClick: onRemove
  }) : null);
};
Label.propTypes = {
  size: PropTypes.oneOf(["tiny", "small", "default", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "success", "info", "warning-alt", "warning", "danger", "dark", "light"]),
  bordered: PropTypes.bool,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  raised: PropTypes.bool
};
Label.defaultProps = {
  size: "default",
  color: "primary",
  bordered: false,
  removable: false,
  raised: false,
  onRemove: null
};

var InputHelpBlock = function InputHelpBlock(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: "help-block text-danger",
    role: "alert"
  }, React.createElement("span", null, text));
};

var SelectContext = React.createContext();

var SelectOption = function SelectOption(_ref) {
  var value = _ref.value,
      children = _ref.children,
      disabled = _ref.disabled;

  var _React$useContext = React.useContext(SelectContext),
      multiple = _React$useContext.multiple,
      isSelected = _React$useContext.isSelected,
      optionClick = _React$useContext.optionClick;

  if (multiple) {
    return React.createElement("a", {
      disabled: disabled
    }, React.createElement("label", {
      className: "checkbox"
    }, React.createElement("input", {
      type: "checkbox",
      onClick: function onClick(e) {
        return optionClick(e, value, Array.isArray(children) ? children.join("") : children);
      },
      checked: isSelected(value)
    }), React.createElement("span", {
      className: "checkbox__input"
    })), React.createElement("span", null, children));
  }

  return React.createElement("a", {
    disabled: disabled,
    onClick: function onClick(e) {
      return optionClick(e, value, Array.isArray(children) ? children.join("") : children);
    },
    className: isSelected(value) ? "selected" : ""
  }, children);
};

var SelectOptgroup = function SelectOptgroup(_ref2) {
  var label = _ref2.label,
      children = _ref2.children;
  return React.createElement("div", {
    className: "dropdown__group"
  }, React.createElement("div", {
    className: "dropdown__group-header"
  }, label), React.createElement(SelectChildren, null, children));
};

var SelectChildren = function SelectChildren(children) {
  return React.Children.map(children, function (child) {
    switch (child.type) {
      case "option":
        return React.createElement(SelectOption, child.props);

      case "optgroup":
        return React.createElement(SelectOptgroup, child.props);

      default:
        return child;
    }
  });
};

var Select = function Select(_ref3) {
  var compressed = _ref3.compressed,
      id = _ref3.id,
      label = _ref3.label,
      prompt = _ref3.prompt,
      multiple = _ref3.multiple,
      inline = _ref3.inline,
      up = _ref3.up,
      disabled = _ref3.disabled,
      width = _ref3.width,
      field = _ref3.field,
      form = _ref3.form,
      className = _ref3.className,
      props = _objectWithoutProperties(_ref3, ["compressed", "id", "label", "prompt", "multiple", "inline", "up", "disabled", "width", "field", "form", "className"]);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = React.useState(multiple ? [] : ""),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      displayTitle = _React$useState4[0],
      setDisplayTitle = _React$useState4[1];

  var node = React.useRef();
  var touched = form.touched,
      errors = form.errors;
  id = id || uuid();

  var handleClick = function handleClick() {
    if (!isOpen) {
      // attach/remove event handler
      document.addEventListener("click", handleOutsideClick, false);
    } else {
      document.removeEventListener("click", handleOutsideClick, false);
    }

    setOpen(function (prev) {
      return !prev;
    });
  };

  var handleOutsideClick = function handleOutsideClick(e) {
    // ignore clicks on the component itself
    var n = node.current;
    if (n && n.contains(e.target)) return;
    handleClick();
  };

  var handleOptionClick = function handleOptionClick(e, newValue, title) {
    if (!multiple) {
      form.setFieldValue(field.name, newValue);
      form.setFieldTouched(field.name, true);
      setDisplayTitle(title);
      handleClick();
    } else {
      if (e.target.checked) {
        form.setFieldValue(field.name, [].concat(_toConsumableArray(field.value), [newValue]));
        form.setFieldTouched(field.name, true);
        setDisplayTitle(function (prev) {
          return [].concat(_toConsumableArray(prev), [title]);
        });
      } else {
        form.setFieldValue(field.name, field.value.filter(function (v) {
          return v !== newValue;
        }));
        form.setFieldTouched(field.name, true);
        setDisplayTitle(function (prev) {
          return prev.filter(function (t) {
            return t !== title;
          });
        });
      }
    }
  };

  var isSelected = function isSelected(checkValue) {
    var value = field.value;

    if (multiple) {
      return Array.isArray(value) && value.findIndex(function (v) {
        return v === checkValue;
      }) >= 0;
    }

    return value === checkValue;
  };

  var findTitle = function findTitle(where) {
    var r = [];
    React.Children.forEach(where || props.children, function (ch) {
      if (ch.type === "optgroup") {
        var temp = findTitle(ch.props.children);
        if (temp) r.push(temp);
      }

      if (isSelected(ch.props.value)) {
        r.push(Array.isArray(ch.props.children) ? ch.props.children.join("") : ch.props.children);
      }
    });
    return r.join(", ");
  };

  var getShowValue = function getShowValue() {
    if (typeof field.value === "undefined" || field.value === null || !field.value.toString().length) {
      return prompt;
    }

    if (multiple) {
      return displayTitle.length ? displayTitle.join(", ") : findTitle();
    } else {
      return displayTitle ? displayTitle : findTitle();
    }
  };

  return React.createElement("div", _extends({
    className: "form-group dropdown" + (isOpen ? " active" : "") + (inline ? " label--inline" : "") + (up ? " dropdown--up" : "") + (disabled ? " disabled" : "") + (className ? " ".concat(className) : "") + (getIn(touched, field.name) && getIn(errors, field.name) ? " form-group--error" : ""),
    ref: node
  }, inline === "both" ? {
    style: {
      display: "inline-block"
    }
  } : {}), React.createElement("div", {
    className: "form-group__text select",
    onClick: handleClick
  }, React.createElement("input", _extends({
    id: id
  }, field, {
    value: getShowValue(),
    disabled: disabled
  }, width ? {
    style: {
      width: "".concat(width, "px"),
      minWidth: "".concat(width, "px")
    }
  } : {})), label ? React.createElement("label", {
    htmlFor: id
  }, label) : null), React.createElement("div", _extends({
    className: "dropdown__menu"
  }, width ? {
    style: {
      width: "".concat(width, "px"),
      minWidth: "".concat(width, "px")
    }
  } : {}), React.createElement(SelectContext.Provider, {
    value: {
      multiple: multiple,
      optionClick: handleOptionClick,
      isSelected: isSelected
    }
  }, React.createElement(SelectChildren, null, props.children))), getIn(touched, field.name) && getIn(errors, field.name) ? React.createElement(InputHelpBlock, {
    text: getIn(errors, field.name)
  }) : null);
};
Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  prompt: PropTypes.string,
  multiple: PropTypes.bool,
  inline: PropTypes.oneOf([false, true, "both"]),
  up: PropTypes.bool,
  disabled: PropTypes.bool,
  width: PropTypes.number
};
Select.defaultProps = {
  prompt: "Select an option",
  multiple: false,
  inline: false
};

var Panel = function Panel(_ref) {
  var color = _ref.color,
      padding = _ref.padding,
      bordered = _ref.bordered,
      raised = _ref.raised,
      well = _ref.well,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["color", "padding", "bordered", "raised", "well", "className"]);

  return React.createElement("div", _extends({
    className: "panel" + (color !== "plain" ? " panel--".concat(color) : "") + (padding !== "default" ? " panel--".concat(padding) : "") + (bordered ? typeof bordered === "string" ? " panel--bordered-".concat(bordered) : Array.isArray(bordered) ? bordered.map(function (b) {
      return " panel--bordered-".concat(b);
    }).join("") : " panel--bordered" : "") + (raised ? " panel--raised" : "") + (well ? " panel--well" : "")
  }, props));
};
Panel.propTypes = {
  color: PropTypes.oneOf(["plain", "primary", "secondary", "tertiary", "success", "info", "warning-alt", "warning", "danger", "dark", "light"]),
  padding: PropTypes.oneOf(["none", "compressed", "default", "loose"]),
  bordered: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["top", "right", "left", "bottom"]), PropTypes.arrayOf(PropTypes.oneOf(["top", "right", "left", "bottom"]))]),
  raised: PropTypes.bool,
  well: PropTypes.bool
};
Panel.defaultProps = {
  color: "plain",
  padding: "default",
  bordered: false,
  raised: false,
  well: false
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".cui .Toastify__toast{min-height:unset!important;padding:unset;overflow:unset;font-family:unset;box-shadow:unset}.cui .Toastify__toast--default,.cui .Toastify__toast-container{color:unset}";
styleInject(css);

var copyStringToClipboard = function copyStringToClipboard(str) {
  // Create new element
  var el = document.createElement("textarea"); // Set value (string to be copied)

  el.value = str; // Set non-editable to avoid focus and move outside of view

  el.setAttribute("readonly", "");
  el.style = {
    position: "absolute",
    left: "-9999px"
  };
  document.body.appendChild(el); // Select text inside element

  el.select(); // Copy text to clipboard

  document.execCommand("copy"); // Remove temporary element

  document.body.removeChild(el);
};

var ToastIcon = function ToastIcon(_ref) {
  var type = _ref.type;

  switch (type) {
    case "success":
      type = "text-success icon-check-outline";
      break;

    case "error":
      type = "text-danger icon-error-outline";
      break;

    case "warning":
      type = "text-warning icon-warning-outline";
      break;

    case "info":
      type = "text-info icon-info-outline";
      break;

    case "none":
      return null;

    default:
      type = "text-muted icon-alert";
      break;
  }

  return React.createElement("div", {
    className: "toast__icon ".concat(type)
  });
};

var Toast = function Toast(_ref2) {
  var title = _ref2.title,
      message = _ref2.message,
      type = _ref2.type,
      copyError = _ref2.copyError;
  return React.createElement("div", {
    className: "toast"
  }, React.createElement(ToastIcon, {
    type: type
  }), React.createElement("div", {
    className: "toast__body"
  }, title ? React.createElement("div", {
    className: "toast__title"
  }, title) : null, message ? React.createElement("div", {
    className: "toast__message"
  }, message, type === "error" && copyError ? React.createElement(React.Fragment, null, React.createElement("br", null), React.createElement("br", null), React.createElement("a", {
    onClick: function onClick() {
      return copyStringToClipboard(message);
    }
  }, "Copy to clipboard")) : null) : null));
};

var Fade = cssTransition({
  enter: "fadeIn",
  exit: "fadeOut",
  duration: 300
});
var toast = function toast(type, title, message) {
  var copyError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var containerId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "_GLOBAL_";
  return toast$1(React.createElement(Toast, {
    type: type,
    title: title,
    message: message,
    copyError: copyError
  }), {
    containerId: containerId
  });
};

toast.success = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return toast.apply(void 0, ["success"].concat(args));
};

toast.error = function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return toast.apply(void 0, ["error"].concat(args));
};

toast.warning = function () {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return toast.apply(void 0, ["warning"].concat(args));
};

toast.info = function () {
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return toast.apply(void 0, ["info"].concat(args));
};

toast.none = function () {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  return toast.apply(void 0, ["none"].concat(args));
};

toast.update = function () {
  return toast$1.update.apply(toast$1, arguments);
};

toast.dismiss = function () {
  return toast$1.dismiss.apply(toast$1, arguments);
};

var ToastContainer = function ToastContainer(props) {
  return React.createElement(ToastContainer$1, _extends({
    transition: Fade
  }, props, {
    closeButton: false,
    style: {
      width: "unset"
    }
  }));
};
ToastContainer.propTypes = {
  position: PropTypes.string,
  autoClose: PropTypes.number,
  draggable: PropTypes.bool,
  hideProgressBar: PropTypes.bool,
  containerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ToastContainer.defaultProps = {
  position: "bottom-right",
  autoClose: 5000,
  draggable: false,
  hideProgressBar: true,
  containerId: "_GLOBAL_"
};

var Header = function Header(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement("header", _extends({
    className: "header"
  }, props), React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "header-panels"
  }, children)));
};
Header.propTypes = {
  children: PropTypes.node.isRequired
};
Header.defaultProps = {};
var HeaderPanel = function HeaderPanel(_ref2) {
  var children = _ref2.children,
      center = _ref2.center,
      right = _ref2.right,
      props = _objectWithoutProperties(_ref2, ["children", "center", "right"]);

  return React.createElement("div", _extends({
    className: "header-panel".concat(center ? " header-panel--center" : "").concat(right ? " header-panel--right" : "")
  }, props), children);
};
HeaderPanel.propTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
  right: PropTypes.bool
};
HeaderPanel.defaultProps = {
  center: false,
  right: false
};
var HeaderTitle = function HeaderTitle(_ref3) {
  var icon = _ref3.icon,
      link = _ref3.link,
      title = _ref3.title,
      props = _objectWithoutProperties(_ref3, ["icon", "link", "title"]);

  return React.createElement(HeaderPanel, props, icon ? React.createElement("a", {
    className: "header__logo",
    href: link || "http://www.cisco.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("span", {
    className: typeof icon === "string" ? "icon-".concat(icon) : "icon-cisco"
  })) : null, React.createElement("div", {
    className: "header__title"
  }, title));
};
HeaderTitle.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  link: PropTypes.string,
  title: PropTypes.string.isRequired
};
HeaderTitle.defaultProps = {
  icon: true,
  link: null
};

var Footer = function Footer() {
  return React.createElement("footer", {
    className: "footer"
  }, React.createElement("div", {
    className: "footer__links"
  }, React.createElement("ul", {
    className: "list list--inline"
  }, React.createElement("li", null, React.createElement("a", {
    href: "http://www.cisco.com/cisco/web/siteassets/contacts/index.html",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Contacts")), React.createElement("li", null, React.createElement("a", {
    href: "https://secure.opinionlab.com/ccc01/o.asp?id=jBjOhqOJ",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Feedback")), React.createElement("li", null, React.createElement("a", {
    href: "https://www.cisco.com/c/en/us/about/help.html",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Help")), React.createElement("li", null, React.createElement("a", {
    href: "http://www.cisco.com/c/en/us/about/sitemap.html",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Site Map")), React.createElement("li", null, React.createElement("a", {
    href: "https://www.cisco.com/c/en/us/about/legal/terms-conditions.html",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Terms & Conditions")), React.createElement("li", null, React.createElement("a", {
    href: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Privacy Statement")), React.createElement("li", null, React.createElement("a", {
    href: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Cookie Policy")), React.createElement("li", null, React.createElement("a", {
    href: "https://www.cisco.com/c/en/us/about/legal/trademarks.html",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Trademarks")))));
};

var ConditionalWrapper = function ConditionalWrapper(_ref) {
  var condition = _ref.condition,
      wrapper = _ref.wrapper,
      children = _ref.children;
  return condition ? React.cloneElement(wrapper, null, children) : children;
};
ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrapper: PropTypes.element.isRequired
};

var Wrapper = React.createElement("div", {
  className: "responsive-table"
});
var GenericTable = function GenericTable(_ref) {
  var outerWrap = _ref.outerWrap,
      lined = _ref.lined,
      bordered = _ref.bordered,
      striped = _ref.striped,
      selectable = _ref.selectable,
      fixed = _ref.fixed,
      wrapped = _ref.wrapped,
      compressed = _ref.compressed,
      loose = _ref.loose,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["outerWrap", "lined", "bordered", "striped", "selectable", "fixed", "wrapped", "compressed", "loose", "className"]);

  return React.createElement(ConditionalWrapper, {
    condition: outerWrap,
    wrapper: Wrapper
  }, React.createElement("table", _extends({
    className: "table".concat(lined ? " table--lined" : "").concat(bordered ? " table--bordered" : "").concat(striped ? " table--striped" : "").concat(selectable ? " table--selectable" : "").concat(fixed ? " table--fixed" : "").concat(wrapped ? " table--wrapped" : "").concat(compressed ? " table--compressed" : "").concat(loose ? " table--loose" : "").concat(className ? " ".concat(className) : "")
  }, props)));
};
GenericTable.propTypes = {
  outerWrap: PropTypes.bool,
  lined: PropTypes.bool,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  selectable: PropTypes.bool,
  fixed: PropTypes.bool,
  wrapped: PropTypes.bool,
  compressed: PropTypes.bool,
  loose: PropTypes.bool
};
GenericTable.defaultProps = {
  outerWrap: true,
  lined: false,
  bordered: false,
  striped: false,
  selectable: false,
  fixed: false,
  wrapped: false,
  compressed: false,
  loose: false
};

export { Alert, Button, ButtonGroup, Dots, Dropdown, DropdownDivider, DropdownElement, connected as Dropzone, Footer, GenericTable, Header, HeaderPanel, HeaderTitle, Label, Panel, Progressbar, Select, Spinner, ToastContainer, toast };
//# sourceMappingURL=index.es.js.map