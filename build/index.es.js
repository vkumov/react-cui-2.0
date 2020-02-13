import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDropzone from 'react-dropzone';
import bytes from 'bytes';
import { connect, getIn } from 'formik';
import uuid from 'uuid/v4';
import { cssTransition, toast as toast$1, ToastContainer as ToastContainer$1 } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Transition from 'react-transition-group/Transition';
import ReactModal from 'react-modal';
import { createPortal } from 'react-dom';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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

const classes = (type, icon) => {
  switch (type) {
    case "warning":
      return ["alert--warning", icon || "icon-warning-outline"];

    case "warning-alt":
      return ["alert--warning-alt", icon || "icon-warning-outline"];

    case "danger":
    case "error":
      return ["alert--warning-alt", icon || "icon-error-outline"];

    case "success":
      return ["alert--success", icon || "icon-check-outline"];

    case "dark":
      return ["alert--dark", icon || "icon-help-outline"];

    case "light":
      return ["alert--light", icon || "icon-help-outline"];

    default:
      return ["alert--info", icon || "icon-info-outline"];
  }
};

const Alert = ({
  type,
  children,
  title,
  dismissable,
  className,
  onDismiss,
  withIcon,
  icon
}) => {
  const [dismissed, setDismissed] = React.useState(false);

  const handleDismiss = e => {
    setDismissed(true);
    if (onDismiss) onDismiss(e);
  };

  if (dismissed) return null;
  const [alertClass, iconClass] = classes(type, icon);
  return React.createElement("div", {
    className: `alert ${alertClass} ${className || ""}`
  }, withIcon ? React.createElement("div", {
    className: `alert__icon ${iconClass}`
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
  icon: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
Alert.defaultProps = {
  className: null,
  dismissable: false,
  icon: null,
  onDismiss: null,
  title: "",
  type: "info",
  withIcon: true
};

Alert.Warning = (_ref) => {
  let props = _objectWithoutProperties(_ref, ["type"]);

  return React.createElement(Alert, _extends({
    type: "warning"
  }, props));
};

Alert.Danger = (_ref2) => {
  let props = _objectWithoutProperties(_ref2, ["type"]);

  return React.createElement(Alert, _extends({
    type: "danger"
  }, props));
};

Alert.Error = (_ref3) => {
  let props = _objectWithoutProperties(_ref3, ["type"]);

  return React.createElement(Alert, _extends({
    type: "error"
  }, props));
};

Alert.Success = (_ref4) => {
  let props = _objectWithoutProperties(_ref4, ["type"]);

  return React.createElement(Alert, _extends({
    type: "success"
  }, props));
};

Alert.Info = (_ref5) => {
  let props = _objectWithoutProperties(_ref5, ["type"]);

  return React.createElement(Alert, _extends({
    type: "info"
  }, props));
};

Alert.Dark = (_ref6) => {
  let props = _objectWithoutProperties(_ref6, ["type"]);

  return React.createElement(Alert, _extends({
    type: "dark"
  }, props));
};

Alert.Light = (_ref7) => {
  let props = _objectWithoutProperties(_ref7, ["type"]);

  return React.createElement(Alert, _extends({
    type: "light"
  }, props));
};

Alert.WarningAlt = (_ref8) => {
  let props = _objectWithoutProperties(_ref8, ["type"]);

  return React.createElement(Alert, _extends({
    type: "warning-alt"
  }, props));
};

const ConditionalWrapper = ({
  condition,
  wrapper,
  children
}) => condition ? React.cloneElement(wrapper, null, children) : children;
ConditionalWrapper.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrapper: PropTypes.element.isRequired
};

const DropdownHeader = ({
  type,
  handleClick,
  className,
  header
}) => {
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
        className: `btn ${className}`
      }, header);

    default:
      return React.cloneElement(header, {
        onClick: handleClick
      });
  }
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      const {
        stopPropagation,
        onOpen,
        onClose
      } = this.props;

      if (stopPropagation) {
        e.stopPropagation();
        e.preventDefault();
      }

      const {
        isOpen
      } = this.state;

      if (!isOpen) {
        // attach/remove event handler
        document.addEventListener("click", this.handleOutsideClick, false);
      } else {
        document.removeEventListener("click", this.handleOutsideClick, false);
      }

      this.setState(prevState => {
        const newIsOpen = !prevState.isOpen;
        if (newIsOpen && onOpen) onOpen(e);
        if (!newIsOpen && onClose) onClose(e);
        return {
          isOpen: newIsOpen
        };
      });
    });

    _defineProperty(this, "handleOutsideClick", e => {
      // ignore clicks on the component itself
      const {
        alwaysClose
      } = this.props;
      if (!alwaysClose && this.node.contains(e.target)) return;
      this.handleClick(e);
    });

    this.state = {
      isOpen: false
    };
  }

  render() {
    const {
      openTo,
      children,
      type,
      className,
      header,
      divClassName
    } = this.props;
    const {
      isOpen
    } = this.state;
    return React.createElement("div", {
      className: `dropdown${["left", "center"].includes(openTo) ? ` dropdown--${openTo}` : ""}${isOpen ? " active" : ""}${divClassName ? ` ${divClassName}` : ""}`,
      ref: node => {
        this.node = node;
      }
    }, React.createElement(DropdownHeader, {
      type: type,
      handleClick: this.handleClick,
      className: className,
      header: header
    }), React.createElement("div", {
      className: "dropdown__menu"
    }, children));
  }

}
Dropdown.propTypes = {
  type: PropTypes.oneOf(["icon", "link", "div", "button", "custom"]),
  className: PropTypes.string,
  header: PropTypes.node,
  openTo: PropTypes.oneOf([false, "left", "right", "center"]),
  alwaysClose: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  stopPropagation: PropTypes.bool,
  divClassName: PropTypes.string,
  children: PropTypes.node.isRequired
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

Dropdown.Element = (_ref) => {
  let {
    selected,
    icon,
    children,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["selected", "icon", "children", "className"]);

  return React.createElement("a", _extends({
    className: `${selected ? "selected" : ""}${className ? ` ${className}` : ""}`
  }, props), icon ? React.createElement("span", {
    className: `icon-${icon}`
  }) : null, React.createElement(ConditionalWrapper, {
    condition: Boolean(icon),
    wrapper: React.createElement("span", {
      className: "qtr-margin-left"
    })
  }, children));
};

Dropdown.Element.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string
};
Dropdown.Element.defaultProps = {
  selected: false,
  icon: null,
  className: null
};

Dropdown.Divider = () => React.createElement("div", {
  className: "divider"
});

Dropdown.GroupHeader = ({
  header
}) => React.createElement("div", {
  className: "dropdown__group-header"
}, header);

Dropdown.GroupHeader.propTypes = {
  header: PropTypes.node.isRequired
};

const FileCard = ({
  file,
  i,
  removeFile,
  inline
}) => React.createElement("div", {
  className: "file-drop__card col-lg-4 col-md-6 col-sm-6",
  key: `${i}-${file.name}`
}, React.createElement("div", {
  className: "panel panel--bordered hover-emboss--small",
  onClick: e => e.stopPropagation()
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
  onClick: () => removeFile(i)
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
  onClick: () => removeFile(i)
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

class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    if (props.maxFileSize) {
      this.maxFileSize = bytes.parse(props.maxFileSize);
    } else {
      this.maxFileSize = null;
    }
  }

  removeFile(toRemove) {
    this.props.formik.setFieldValue(this.props.name, this.props.input.value.filter((_, idx) => toRemove !== idx));
  } // renderFileCard = (file, i) => {
  //   return (
  //   );
  // };


  renderFiles() {
    const files = this.props.input.value;

    if (!files || !files.length || !Array.isArray(files)) {
      return null;
    }

    return React.createElement("div", {
      className: "dropzone-previews"
    }, React.createElement("div", {
      className: "file-drop__container container--fluid"
    }, React.createElement("div", {
      className: "row"
    }, files.map((file, i) => React.createElement(FileCard, {
      key: i,
      file: file,
      i: i,
      inline: this.props.inline,
      removeFile: this.removeFile
    })))), this.props.showTotalSelected && React.createElement("div", {
      className: "file-drop__filecnt"
    }, files.length, " selected"));
  }

  renderMessage() {
    const files = this.props.input.value;

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

  handleDrop(filesToUpload) {
    if (this.maxFileSize) {
      filesToUpload = filesToUpload.filter(file => file.size <= this.maxFileSize);
    }

    if (this.props.maxFiles && filesToUpload.length > this.props.maxFiles) {
      filesToUpload = filesToUpload.slice(0, this.props.maxFiles);
    }

    this.props.formik.setFieldValue(this.props.name, filesToUpload);
  }

  render() {
    const {
      meta,
      loose,
      compressed
    } = this.props;
    let padding = "";

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
    }, ({
      getRootProps,
      getInputProps
    }) => React.createElement("div", _extends({
      className: `dropzone ${padding}`
    }, getRootProps()), React.createElement("input", getInputProps()), this.renderFiles(), this.renderMessage()))), meta.touched && meta.error && React.createElement("div", {
      className: `help-block text-danger`,
      role: "alert"
    }, React.createElement("span", null, meta.error)));
  }

}

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
const connected = connect(Dropzone);

const Spinner = ({
  size,
  text
}) => React.createElement("div", {
  className: "flex-center flex-middle",
  style: {
    flex: 1
  }
}, React.createElement("div", null, React.createElement("div", {
  className: `loader${size !== "default" ? ` loader--${size}` : ""} flex-center`
}, React.createElement("div", {
  className: "wrapper flex flex-center"
}, React.createElement("div", {
  className: "wheel"
}))), text === false ? null : React.createElement("div", {
  className: "base-margin-top text-center"
}, text || "Loading...")));
Spinner.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]).isRequired,
  text: PropTypes.node
};
Spinner.defaultProps = {
  size: "default"
};
const Dots = ({
  color
}) => React.createElement("div", {
  className: `loading-dots${color !== "primary" ? ` loading-dots--${color}` : ""}`
}, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null));
Spinner.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "success", "info", "warning", "warning-alt", "danger", "dark", "light"]).isRequired
};
Spinner.defaultProps = {
  color: "primary"
};

const Progressbar = (_ref) => {
  let {
    percentage,
    withLabel,
    label,
    size,
    color,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["percentage", "withLabel", "label", "size", "color", "className"]);

  return React.createElement("div", _extends({
    className: `progressbar${size !== "default" ? ` progressbar--${size}` : ""}${color ? ` progressbar--${color}` : ""}${className ? ` ${className}` : ""}`,
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

const Button = (_ref) => {
  let {
    size,
    color,
    wide,
    justified,
    circle,
    className,
    asLink
  } = _ref,
      props = _objectWithoutProperties(_ref, ["size", "color", "wide", "justified", "circle", "className", "asLink"]);

  return React.createElement(asLink ? "a" : "button", _objectSpread2({
    className: `btn${size !== "default" ? ` btn--${size}` : ""} btn--${color}${wide ? " btn--wide" : ""}${justified ? " btn--justified" : ""}${circle ? " btn--circle" : ""}${className ? ` ${className}` : ""}`
  }, props));
};

Button.Primary = (_ref2) => {
  let props = _objectWithoutProperties(_ref2, ["color"]);

  return React.createElement(Button, _extends({
    color: "primary"
  }, props));
};

Button.Secondary = (_ref3) => {
  let props = _objectWithoutProperties(_ref3, ["color"]);

  return React.createElement(Button, _extends({
    color: "secondary"
  }, props));
};

Button.Success = (_ref4) => {
  let props = _objectWithoutProperties(_ref4, ["color"]);

  return React.createElement(Button, _extends({
    color: "success"
  }, props));
};

Button.Dark = (_ref5) => {
  let props = _objectWithoutProperties(_ref5, ["color"]);

  return React.createElement(Button, _extends({
    color: "dark"
  }, props));
};

Button.Ghost = (_ref6) => {
  let props = _objectWithoutProperties(_ref6, ["color"]);

  return React.createElement(Button, _extends({
    color: "ghost"
  }, props));
};

Button.Link = (_ref7) => {
  let props = _objectWithoutProperties(_ref7, ["color"]);

  return React.createElement(Button, _extends({
    color: "link"
  }, props));
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "success", "dark", "ghost", "link"]),
  wide: PropTypes.bool,
  justified: PropTypes.bool,
  circle: PropTypes.bool,
  asLink: PropTypes.bool,
  className: PropTypes.string
};
Button.defaultProps = {
  size: "default",
  color: "primary",
  wide: false,
  justified: false,
  circle: false,
  asLink: false,
  className: null
};
const ButtonGroup = (_ref8) => {
  let {
    square,
    withDivider,
    className
  } = _ref8,
      props = _objectWithoutProperties(_ref8, ["square", "withDivider", "className"]);

  return React.createElement("div", _extends({
    className: `btn-group${square ? " btn-group--square" : ""}${withDivider ? " btn-group--divider" : ""}`
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

const Label = (_ref) => {
  let {
    size,
    color,
    bordered,
    removable,
    onRemove,
    raised,
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["size", "color", "bordered", "removable", "onRemove", "raised", "className", "children"]);

  return React.createElement("span", _extends({
    className: `${"label" + ` label--${color}`}${size !== "default" ? ` label--${size}` : ""}${bordered ? " label--bordered" : ""}${raised ? " label--raised" : ""}${className ? ` ${className}` : ""}`
  }, props), children, removable ? React.createElement("span", {
    className: "icon-close",
    onClick: onRemove
  }) : null);
};
Label.propTypes = {
  size: PropTypes.oneOf(["tiny", "small", "default", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "success", "info", "warning-alt", "warning", "danger", "dark", "light"]),
  bordered: PropTypes.bool,
  removable: PropTypes.bool,
  onRemove: PropTypes.func,
  raised: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Label.defaultProps = {
  size: "default",
  color: "primary",
  bordered: false,
  removable: false,
  raised: false,
  onRemove: null,
  className: null
};

Label.Primary = (_ref2) => {
  let props = _objectWithoutProperties(_ref2, ["color"]);

  return React.createElement(Label, _extends({
    color: "primary"
  }, props));
};

Label.Secondary = (_ref3) => {
  let props = _objectWithoutProperties(_ref3, ["color"]);

  return React.createElement(Label, _extends({
    color: "secondary"
  }, props));
};

Label.Tertiary = (_ref4) => {
  let props = _objectWithoutProperties(_ref4, ["color"]);

  return React.createElement(Label, _extends({
    color: "tertiary"
  }, props));
};

Label.Success = (_ref5) => {
  let props = _objectWithoutProperties(_ref5, ["color"]);

  return React.createElement(Label, _extends({
    color: "success"
  }, props));
};

Label.Info = (_ref6) => {
  let props = _objectWithoutProperties(_ref6, ["color"]);

  return React.createElement(Label, _extends({
    color: "info"
  }, props));
};

Label.WarningAlt = (_ref7) => {
  let props = _objectWithoutProperties(_ref7, ["color"]);

  return React.createElement(Label, _extends({
    color: "warning-alt"
  }, props));
};

Label.Warning = (_ref8) => {
  let props = _objectWithoutProperties(_ref8, ["color"]);

  return React.createElement(Label, _extends({
    color: "warning"
  }, props));
};

Label.Danger = (_ref9) => {
  let props = _objectWithoutProperties(_ref9, ["color"]);

  return React.createElement(Label, _extends({
    color: "danger"
  }, props));
};

Label.Dark = (_ref10) => {
  let props = _objectWithoutProperties(_ref10, ["color"]);

  return React.createElement(Label, _extends({
    color: "dark"
  }, props));
};

Label.Light = (_ref11) => {
  let props = _objectWithoutProperties(_ref11, ["color"]);

  return React.createElement(Label, _extends({
    color: "light"
  }, props));
};

const InputHelpBlock = ({
  text
}) => React.createElement("div", {
  className: "help-block text-danger",
  role: "alert"
}, React.createElement("span", null, text));

class Select extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", () => {
      if (!this.state.isOpen) {
        // attach/remove event handler
        document.addEventListener("click", this.handleOutsideClick, false);
      } else {
        document.removeEventListener("click", this.handleOutsideClick, false);
      }

      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    });

    _defineProperty(this, "handleOutsideClick", e => {
      // ignore clicks on the component itself
      const n = this.props.innerRef ? this.props.innerRef : this.node;

      if (n && n.contains(e.target)) {
        return;
      }

      this.handleClick();
    });

    _defineProperty(this, "handleOptionClick", (e, newValue, title) => {
      const {
        field,
        multiple,
        form
      } = this.props;

      if (!multiple) {
        form.setFieldValue(field.name, newValue);
        form.setFieldTouched(field.name, true);
        this.setState({
          title
        });
        this.handleClick();
      } else if (e.target.checked) {
        form.setFieldValue(field.name, [...field.value, newValue]);
        form.setFieldTouched(field.name, true);
        this.setState({
          title: [...this.state.title, title]
        });
      } else {
        form.setFieldValue(field.name, field.value.filter(v => v !== newValue));
        form.setFieldTouched(field.name, true);
        this.setState({
          title: this.state.title.filter(t => t !== title)
        });
      }
    });

    _defineProperty(this, "isSelected", checkValue => {
      const {
        value
      } = this.props.field;

      if (this.props.multiple) {
        return Array.isArray(value) && value.findIndex(v => v === checkValue) >= 0;
      }

      return value === checkValue;
    });

    _defineProperty(this, "renderOption", child => {
      const {
        value,
        children,
        disabled
      } = child.props;

      if (this.props.multiple) {
        return React.createElement("a", {
          disabled: disabled
        }, React.createElement("label", {
          className: "checkbox"
        }, React.createElement("input", {
          type: "checkbox",
          onClick: e => this.handleOptionClick(e, value, Array.isArray(children) ? children.join("") : children),
          checked: this.isSelected(value) ? true : false
        }), React.createElement("span", {
          className: "checkbox__input"
        })), React.createElement("span", null, children));
      }

      return React.createElement("a", {
        disabled: disabled,
        onClick: e => this.handleOptionClick(e, value, Array.isArray(children) ? children.join("") : children),
        className: this.isSelected(value) ? "selected" : ""
      }, children);
    });

    _defineProperty(this, "renderOptgroup", child => {
      const {
        label,
        children
      } = child.props;
      return React.createElement("div", {
        className: "dropdown__group"
      }, React.createElement("div", {
        className: "dropdown__group-header"
      }, label), this.renderChildren(children));
    });

    _defineProperty(this, "renderChildren", children => {
      return React.Children.map(children, child => {
        switch (child.type) {
          case "option":
            return this.renderOption(child);

          case "optgroup":
            return this.renderOptgroup(child);

          default:
            return child;
        }
      });
    });

    _defineProperty(this, "findTitle", where => {
      let r = [];
      React.Children.forEach(where || this.props.children, ch => {
        if (ch.type === "optgroup") {
          const temp = this.findTitle(ch.props.children);
          if (temp) r.push(temp);
        }

        if (this.isSelected(ch.props.value)) {
          r.push(Array.isArray(ch.props.children) ? ch.props.children.join("") : ch.props.children);
        }
      });
      return r.join(", ");
    });

    _defineProperty(this, "getShowValue", () => {
      const {
        multiple,
        prompt,
        field
      } = this.props;

      if (typeof field.value === "undefined" || field.value === null || !field.value.toString().length) {
        return prompt;
      }

      if (multiple) {
        return this.state.title.length ? this.state.title.join(", ") : this.findTitle();
      }

      return this.state.title ? this.state.title : this.findTitle();
    });

    this.state = {
      isOpen: false,
      title: props.multiple ? [] : ""
    };
  }

  render() {
    const {
      compressed,
      field,
      id,
      form,
      title,
      children,
      inline,
      up,
      innerRef,
      className,
      disabled,
      width
    } = this.props;
    const {
      touched,
      errors
    } = form;
    return React.createElement("div", _extends({
      className: `form-group dropdown${compressed ? " input--compressed" : ""}${this.state.isOpen ? " active" : ""}${inline ? " label--inline" : ""}${up ? " dropdown--up" : ""}${disabled ? " disabled" : ""}${className ? ` ${className}` : ""}${getIn(touched, field.name) && getIn(errors, field.name) ? " form-group--error" : ""}` // (asyncValidating ? " form-group--loading" : "")
      ,
      ref: innerRef ? innerRef : node => {
        this.node = node;
      }
    }, inline === "both" ? {
      style: {
        display: "inline-block"
      }
    } : {}), React.createElement("div", {
      className: "form-group__text select",
      onClick: this.handleClick
    }, React.createElement("input", _extends({
      id: id
    }, field, {
      value: this.getShowValue(),
      disabled: disabled
    }, width ? {
      style: {
        width: `${width}px`,
        minWidth: `${width}px`
      }
    } : {})), title ? React.createElement("label", {
      htmlFor: id
    }, title) : null), React.createElement("div", _extends({
      className: "dropdown__menu"
    }, width ? {
      style: {
        width: `${width}px`,
        minWidth: `${width}px`
      }
    } : {}), this.renderChildren(children)), getIn(touched, field.name) && getIn(errors, field.name) ? React.createElement(InputHelpBlock, {
      text: getIn(errors, field.name)
    }) : null);
  }

}
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

const Panel = (_ref) => {
  let {
    color,
    padding,
    bordered,
    raised,
    well,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["color", "padding", "bordered", "raised", "well", "className"]);

  return React.createElement("div", _extends({
    className: `panel${color !== "plain" ? ` panel--${color}` : ""}${padding !== "default" ? ` panel--${padding}` : ""}${bordered ? typeof bordered === "string" ? ` panel--bordered-${bordered}` : Array.isArray(bordered) ? bordered.map(b => ` panel--bordered-${b}`).join("") : " panel--bordered" : ""}${raised ? " panel--raised" : ""}${well ? " panel--well" : ""}`
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

const copyStringToClipboard = str => {
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

const ToastIcon = ({
  type
}) => {
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
    className: `toast__icon ${type}`
  });
};

const Toast = ({
  title,
  message,
  type,
  copyError
}) => React.createElement("div", {
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
  onClick: () => copyStringToClipboard(message)
}, "Copy to clipboard")) : null) : null));

const Fade = cssTransition({
  enter: "fadeIn",
  exit: "fadeOut",
  duration: 300
});
const toast = (type, title, message, copyError = true, containerId = "_GLOBAL_") => toast$1(React.createElement(Toast, {
  type,
  title,
  message,
  copyError
}), {
  containerId
});

toast.success = (...args) => toast("success", ...args);

toast.error = (...args) => toast("error", ...args);

toast.warning = (...args) => toast("warning", ...args);

toast.info = (...args) => toast("info", ...args);

toast.none = (...args) => toast("none", ...args);

toast.update = (...args) => toast$1.update(...args);

toast.dismiss = (...args) => toast$1.dismiss(...args);

const ToastContainer = props => React.createElement(ToastContainer$1, _extends({
  transition: Fade
}, props, {
  closeButton: false,
  style: {
    width: "unset"
  }
}));
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

const Header = (_ref) => {
  let {
    children,
    fluid
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "fluid"]);

  return React.createElement("header", _extends({
    className: "header"
  }, props), React.createElement("div", {
    className: `container${fluid ? "-fluid" : ""}`
  }, React.createElement("div", {
    className: "header-panels"
  }, children)));
};
Header.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.bool
};
Header.defaultProps = {
  fluid: false
};
const HeaderPanel = (_ref2) => {
  let {
    children,
    center,
    right
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children", "center", "right"]);

  return React.createElement("div", _extends({
    className: `header-panel${center ? " header-panel--center" : ""}${right ? " header-panel--right" : ""}`
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
const HeaderTitle = (_ref3) => {
  let {
    icon,
    link,
    title
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["icon", "link", "title"]);

  return React.createElement(HeaderPanel, props, icon ? React.createElement("a", {
    className: "header__logo",
    href: link || "http://www.cisco.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, React.createElement("span", {
    className: typeof icon === "string" ? `icon-${icon}` : "icon-cisco"
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

const Footer = () => React.createElement("footer", {
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

const Wrapper = React.createElement("div", {
  className: "responsive-table"
});
const GenericTable = (_ref) => {
  let {
    outerWrap,
    lined,
    bordered,
    striped,
    selectable,
    fixed,
    wrapped,
    compressed,
    loose,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["outerWrap", "lined", "bordered", "striped", "selectable", "fixed", "wrapped", "compressed", "loose", "className"]);

  return React.createElement(ConditionalWrapper, {
    condition: outerWrap,
    wrapper: Wrapper
  }, React.createElement("table", _extends({
    className: `table${lined ? " table--lined" : ""}${bordered ? " table--bordered" : ""}${striped ? " table--striped" : ""}${selectable ? " table--selectable" : ""}${fixed ? " table--fixed" : ""}${wrapped ? " table--wrapped" : ""}${compressed ? " table--compressed" : ""}${loose ? " table--loose" : ""}${className ? ` ${className}` : ""}`
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

const Checkbox = ({
  field,
  form,
  inline,
  asFormGroup,
  children
}) => React.createElement(ConditionalWrapper, {
  condition: asFormGroup,
  wrapper: React.createElement("div", {
    className: `form-group ${inline ? "form-group--inline" : ""}`
  })
}, React.createElement("label", {
  className: "checkbox"
}, React.createElement("input", _extends({
  type: "checkbox"
}, field, {
  checked: getIn(form.values, field.name, false)
})), React.createElement("span", {
  className: "checkbox__input"
}), children ? React.createElement("span", {
  className: "checkbox__label"
}, children) : null));

Checkbox.propTypes = {
  inline: PropTypes.bool,
  asFormGroup: PropTypes.bool,
  form: PropTypes.shape({
    values: PropTypes.object
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func
  }).isRequired,
  children: PropTypes.node
};
Checkbox.defaultProps = {
  inline: false,
  asFormGroup: true,
  children: null
};

const Switch = ({
  field,
  left,
  right,
  disabled,
  inline,
  className,
  asFormGroup,
  form,
  spacing,
  id
}) => React.createElement(ConditionalWrapper, {
  condition: asFormGroup,
  wrapper: React.createElement("div", {
    className: `form-group${inline ? " form-group--inline" : ""}${className ? ` ${className}` : ""}${spacing ? ` form-group--${spacing}` : ""}`
  })
}, React.createElement("label", {
  className: `switch${disabled ? " disabled" : ""}`,
  htmlFor: getIn(form.values, field.name, id)
}, React.createElement("input", _extends({
  type: "checkbox"
}, field, {
  id: getIn(form.values, field.name, id),
  checked: getIn(form.values, field.name, false)
})), left ? React.createElement("span", {
  className: "switch__label"
}, left) : null, React.createElement("span", {
  className: "switch__input"
}), right ? React.createElement("span", {
  className: "switch__label"
}, right) : null));

Switch.propTypes = {
  left: PropTypes.string,
  right: PropTypes.string,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  spacing: PropTypes.oneOf([false, "compressed", "loose"]),
  asFormGroup: PropTypes.bool,
  form: PropTypes.shape({
    values: PropTypes.object
  }).isRequired,
  field: PropTypes.shape({
    name: PropTypes.string,
    onChange: PropTypes.func
  }).isRequired,
  className: PropTypes.string,
  id: PropTypes.string
};
Switch.defaultProps = {
  left: null,
  right: null,
  disabled: false,
  inline: false,
  spacing: false,
  asFormGroup: true,
  className: null,
  id: null
};

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
    className: `form-group${className ? ` ${className}` : ""}${getIn(touched, field.name) && getIn(errors, field.name) ? " form-group--error" : ""}${inline === "form" || inline === "both" ? " form-group--inline" : ""}${inline === "label" || inline === "both" ? " label--inline" : ""}${icon ? " input--icon" : ""}`
  }, React.createElement("div", {
    className: "form-group__text"
  }, React.createElement("input", _extends({}, field, {
    id: id || field.name,
    type: type,
    ref: inputRef
  }, rest, {
    className: plain ? "form-group--plaintext" : ""
  })), label ? React.createElement("label", {
    htmlFor: id || field.name
  }, label) : null, icon ? React.createElement("button", {
    type: "button",
    className: "link",
    tabIndex: "-1",
    onClick: iconClick
  }, React.createElement("span", {
    className: `icon-${icon}`
  })) : null), helpBlock && getIn(touched, field.name) && getIn(errors, field.name) ? React.createElement(InputHelpBlock, {
    text: getIn(errors, field.name)
  }) : null);
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
    values: PropTypes.object
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
  plain: false
};

var css$1 = "@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}.cui .modal-backdrop{background:rgba(196,199,204,.65);pointer-events:all;opacity:1;transition:opacity .15s linear;outline:none}.cui .ReactModal__Overlay--before-close .modal__dialog{-webkit-animation:blowdown .3s cubic-bezier(.165,.84,.44,1) forwards,fade-out .25s linear 1!important;animation:blowdown .3s cubic-bezier(.165,.84,.44,1) forwards,fade-out .25s linear 1!important}.cui .ReactModal__Overlay--before-close{opacity:0!important}";
styleInject(css$1);

const ModalHeader = (_ref) => {
  let {
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement("div", _extends({
    className: `modal__header${className ? ` ${className}` : ""}`
  }, props), children);
};
const ModalBody = (_ref2) => {
  let {
    className,
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["className", "children"]);

  return React.createElement("div", _extends({
    className: `modal__body${className ? ` ${className}` : ""}`
  }, props), children);
};
const ModalFooter = (_ref3) => {
  let {
    className,
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["className", "children"]);

  return React.createElement("div", _extends({
    className: `modal__footer${className ? ` ${className}` : ""}`
  }, props), children);
};
const Modal = (_ref4) => {
  let {
    size,
    closeIcon,
    closeHandle,
    title,
    left,
    children,
    autoClose,
    isOpen,
    animationDuration,
    transitionEvents
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["size", "closeIcon", "closeHandle", "title", "left", "children", "autoClose", "isOpen", "animationDuration", "transitionEvents"]);

  props.autoClose = autoClose;
  props.onRequestClose = autoClose && closeHandle ? closeHandle : undefined;
  return React.createElement(Transition, _extends({
    in: isOpen,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: animationDuration
  }, transitionEvents), state => React.createElement(ReactModal, _extends({}, props, {
    overlayClassName: "modal-backdrop",
    isOpen: ["entering", "entered"].includes(state),
    className: `modal${size ? ` modal--${size}` : ""}${left ? " modal--left" : ""}`,
    closeTimeoutMS: typeof animationDuration === "object" ? animationDuration.exiting : animationDuration
  }), React.createElement("div", {
    className: "modal__dialog",
    onClick: e => e.stopPropagation()
  }, React.createElement("div", {
    className: "modal__content"
  }, closeIcon && closeHandle ? React.createElement("a", {
    className: "modal__close",
    onClick: closeHandle
  }, React.createElement("span", {
    className: "icon-close"
  })) : null, title ? React.createElement(ModalHeader, null, React.createElement("h1", {
    className: "modal__title"
  }, title)) : null, children))));
};
Modal.propTypes = {
  size: PropTypes.oneOf([false, "small", "default", "large", "full", "fluid"]),
  closeIcon: PropTypes.bool,
  closeHandle: PropTypes.func,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  autoClose: PropTypes.bool,
  left: PropTypes.bool,
  animationDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    entering: PropTypes.number,
    exiting: PropTypes.number
  })]),
  children: PropTypes.node.isRequired,
  transitionEvents: PropTypes.objectOf(PropTypes.func)
};
Modal.defaultProps = {
  size: false,
  autoClose: true,
  animationDuration: 250,
  closeIcon: false,
  title: null,
  closeHandle: null,
  left: false,
  transitionEvents: null
};

Modal.Small = props => React.createElement(Modal, _extends({}, props, {
  size: "small"
}));

Modal.Large = props => React.createElement(Modal, _extends({}, props, {
  size: "large"
}));

Modal.Full = props => React.createElement(Modal, _extends({}, props, {
  size: "full"
}));

Modal.Fluid = props => React.createElement(Modal, _extends({}, props, {
  size: "fluid"
}));

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
const ConfirmationModal = ({
  isOpen,
  confirmHandle,
  closeHandle,
  prompt,
  confirmType,
  confirmText,
  autoClose
}) => {
  const [doing, setDoing] = React.useState(false);
  return React.createElement(Modal, {
    isOpen: isOpen,
    closeIcon: true,
    closeHandle: closeHandle,
    autoClose: autoClose,
    title: "Confirmation"
  }, React.createElement(ModalBody, null, React.createElement("p", null, prompt)), React.createElement(ModalFooter, null, React.createElement(Button.Ghost, {
    onClick: closeHandle
  }, "Close"), React.createElement(Button, {
    color: confirmType,
    disabled: doing,
    onClick: async () => {
      setDoing(true);
      if (await confirmHandle()) setDoing(false);
    }
  }, confirmText, doing ? React.createElement("span", {
    className: "icon-animation spin qtr-margin-left"
  }) : null)));
};
ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool,
  confirmHandle: PropTypes.func.isRequired,
  closeHandle: PropTypes.func.isRequired,
  prompt: PropTypes.node.isRequired,
  confirmType: PropTypes.string,
  confirmText: PropTypes.string,
  autoClose: PropTypes.bool
};
ConfirmationModal.defaultProps = {
  isOpen: false,
  confirmType: "primary",
  autoClose: true,
  confirmText: "Confirm"
};

const Icon = (_ref) => {
  let {
    icon,
    size,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["icon", "size", "className"]);

  return React.createElement("span", _extends({
    className: `icon-${icon}${className ? ` ${className}` : ""}${size ? ` icon-size-${size}` : ""}`
  }, props));
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf([false, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48]),
  className: PropTypes.string
};
Icon.defaultProps = {
  size: false,
  className: null
};

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */

function createRootElement(id) {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
}
/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */


function addRootElement(rootElem) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}
/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */


function usePortal(id) {
  const rootElemRef = useRef(null);
  useEffect(function setupElement() {
    // Look for existing target dom element to append to
    const existingParent = document.querySelector(`#${id}`); // Parent is either a new root or the existing dom element

    const parentElem = existingParent || createRootElement(id); // If there is no existing DOM element, add a new one.

    if (!existingParent) {
      addRootElement(parentElem);
    } // Add the detached element to the parent


    parentElem.appendChild(rootElemRef.current);
    return function removeElement() {
      rootElemRef.current.remove();

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);
  /**
   * It's important we evaluate this lazily:
   * - We need first render to contain the DOM element, so it shouldn't happen
   *   in useEffect. We would normally put this in the constructor().
   * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
   *   since this will run every single render (that's a lot).
   * - We want the ref to consistently point to the same DOM element and only
   *   ever run once.
   * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }

    return rootElemRef.current;
  }

  return getRootElem();
}

/**
 * @example
 * <Portal>
 *   <p>Thinking with portals</p>
 * </Portal>
 */

const Portal = ({
  id,
  children
}) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

/* eslint-disable jsx-a11y/anchor-is-valid */

const Element$1 = ({
  children,
  defaultOpen,
  toggles,
  title
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  return React.createElement("li", {
    className: isOpen ? "active" : ""
  }, React.createElement("a", {
    className: "accordion__title",
    onClick: () => setIsOpen(prev => !prev)
  }, React.createElement("span", null, title), toggles ? React.createElement("span", {
    className: "accordion__toggle icon-chevron-down"
  }) : null), React.createElement("div", {
    className: "accordion__content"
  }, children));
};

Element$1.propTypes = {
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
  toggles: PropTypes.bool,
  title: PropTypes.node.isRequired
};
Element$1.defaultProps = {
  defaultOpen: false,
  toggles: false
};

const Accordion = ({
  children,
  toggles,
  bordered
}) => {
  return React.createElement("ul", {
    className: `accordion${bordered ? " accordion--bordered" : ""}`
  }, React.Children.map(children, (child, idx) => React.cloneElement(child, {
    toggles,
    key: child.props.key || idx
  })));
};

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.instanceOf(Element$1)), PropTypes.instanceOf(Element$1)]).isRequired,
  toggles: PropTypes.bool,
  bordered: PropTypes.bool
};
Accordion.defaultProps = {
  toggles: false,
  bordered: false
};
Accordion.Element = Element$1;

const Badge = ({
  color,
  size,
  children,
  className
}) => React.createElement("span", {
  className: `${`badge badge--${color}`}${size !== "default" ? ` badge--${size}` : ""}${className ? ` ${className}` : ""}`
}, children);

Badge.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "tertiary", "success", "info", "warning", "warning-alt", "danger", "dark", "light"]),
  size: PropTypes.oneOf(["dot", "tiny", "small", "default", "large"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Badge.defaultProps = {
  color: "primary",
  size: "default",
  className: ""
};

Badge.Dot = props => React.createElement(Badge, _extends({}, props, {
  size: "dot"
}));

Badge.Tiny = props => React.createElement(Badge, _extends({}, props, {
  size: "tiny"
}));

Badge.Small = props => React.createElement(Badge, _extends({}, props, {
  size: "small"
}));

Badge.Default = props => React.createElement(Badge, _extends({}, props, {
  size: "default"
}));

Badge.Large = props => React.createElement(Badge, _extends({}, props, {
  size: "large"
}));

Badge.Wrapper = ({
  children,
  className
}) => React.createElement("span", {
  className: `badge-wrapper${className ? ` ${className}` : ""}`
}, children);

export { Accordion, Alert, Badge, Button, ButtonGroup, Checkbox, ConfirmationModal, Dots, Dropdown, connected as Dropzone, Footer, GenericTable, Header, HeaderPanel, HeaderTitle, Icon, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Panel, Portal, Progressbar, Select, Spinner, Switch, ToastContainer, toast };
//# sourceMappingURL=index.es.js.map
