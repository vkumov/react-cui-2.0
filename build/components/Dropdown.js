import React from 'react';
import PropTypes from 'prop-types';
import { c as _defineProperty, _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { ConditionalWrapper } from './Conditional.js';

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
      divClassName,
      up
    } = this.props;
    const {
      isOpen
    } = this.state;
    return React.createElement("div", {
      className: `dropdown${appendClass(["left", "center"].includes(openTo), `dropdown--${openTo}`)}${appendClass(up, "dropdown--up")}${appendClass(isOpen, "active")}${appendClass(divClassName)}`,
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
  children: PropTypes.node.isRequired,
  up: PropTypes.bool
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
  divClassName: null,
  up: false
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

Dropdown.Group = ({
  children
}) => React.createElement("div", {
  className: "dropdown__group"
}, children);

Dropdown.Group.propTypes = {
  children: PropTypes.node.isRequired
};

Dropdown.GroupHeader = ({
  header
}) => React.createElement("div", {
  className: "dropdown__group-header"
}, header);

Dropdown.GroupHeader.propTypes = {
  header: PropTypes.node.isRequired
};

export { Dropdown };
