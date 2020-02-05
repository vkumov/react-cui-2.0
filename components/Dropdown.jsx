import React from "react";
import PropTypes from "prop-types";

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
      isOpen: false
    };
  }

  handleClick = e => {
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

    this.setState(prevState => {
      const newIsOpen = !prevState.isOpen;
      if (newIsOpen && onOpen) onOpen(e);
      if (!newIsOpen && onClose) onClose(e);
      return { isOpen: newIsOpen };
    });
  };

  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (!this.props.alwaysClose && this.node.contains(e.target)) return;

    this.handleClick(e);
  };

  render() {
    const {
      openTo,
      children,
      tail,
      type,
      className,
      header,
      divClassName
    } = this.props;
    const { isOpen } = this.state;

    return (
      <div
        className={`dropdown${tail ? " dropdown--tail" : ""}${
          ["left", "center"].includes(openTo) ? ` dropdown--${openTo}` : ""
        }${isOpen ? " active" : ""}${divClassName ? ` ${divClassName}` : ""}`}
        ref={node => {
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

export const DropdownElement = ({ selected, children, ...props }) => (
  <a className={selected ? "selected" : ""} {...props}>
    {children}
  </a>
);

export const DropdownDivider = () => <div className="divider" />;
