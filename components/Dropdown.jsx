import React from "react";
import PropTypes from "prop-types";

import { ConditionalWrapper } from "./Conditional";
import { appendClass } from "../utils";

const DropdownHeader = ({ type, handleClick, className, header }) => {
  switch (type) {
    case "icon":
      return <span onClick={handleClick} className={className} />;
    case "link":
      return (
        <a onClick={handleClick} className={className}>
          {header}
        </a>
      );
    case "div":
      return (
        <div onClick={handleClick} className={className}>
          {header}
        </div>
      );
    case "button":
      return (
        <button
          type="button"
          onClick={handleClick}
          className={`btn ${className}`}
        >
          {header}
        </button>
      );
    default:
      return React.cloneElement(header, { onClick: handleClick });
  }
};

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e) => {
    const { stopPropagation, onOpen, onClose } = this.props;
    if (stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }

    const { isOpen } = this.state;
    if (!isOpen) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => {
      const newIsOpen = !prevState.isOpen;
      if (newIsOpen && onOpen) onOpen(e);
      if (!newIsOpen && onClose) onClose(e);
      return { isOpen: newIsOpen };
    });
  };

  handleOutsideClick = (e) => {
    // ignore clicks on the component itself
    const { alwaysClose } = this.props;
    if (!alwaysClose && this.node.contains(e.target)) return;

    this.handleClick(e);
  };

  render() {
    const {
      openTo,
      children,
      type,
      className,
      header,
      divClassName,
      up,
    } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        className={`dropdown${appendClass(
          ["left", "center"].includes(openTo),
          `dropdown--${openTo}`
        )}${appendClass(up, "dropdown--up")}${appendClass(
          isOpen,
          "active"
        )}${appendClass(divClassName)}`}
        ref={(node) => {
          this.node = node;
        }}
      >
        <DropdownHeader
          type={type}
          handleClick={this.handleClick}
          className={className}
          header={header}
        />
        <div className="dropdown__menu">{children}</div>
      </div>
    );
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
  up: PropTypes.bool,
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
  up: false,
};

Dropdown.Element = ({ selected, icon, children, className, ...props }) => (
  <a
    className={`${selected ? "selected" : ""}${
      className ? ` ${className}` : ""
    }`}
    {...props}
  >
    {icon ? <span className={`icon-${icon}`} /> : null}
    <ConditionalWrapper
      condition={Boolean(icon)}
      wrapper={<span className="qtr-margin-left" />}
    >
      {children}
    </ConditionalWrapper>
  </a>
);

Dropdown.Element.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};

Dropdown.Element.defaultProps = {
  selected: false,
  icon: null,
  className: null,
};

Dropdown.Divider = () => <div className="divider" />;

Dropdown.Group = ({ children }) => (
  <div className="dropdown__group">{children}</div>
);

Dropdown.Group.propTypes = {
  children: PropTypes.node.isRequired,
};

Dropdown.GroupHeader = ({ header }) => (
  <div className="dropdown__group-header">{header}</div>
);

Dropdown.GroupHeader.propTypes = {
  header: PropTypes.node.isRequired,
};
