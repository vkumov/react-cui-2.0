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

export const Dropdown = ({
  openTo,
  children,
  type,
  className,
  header,
  divClassName,
  alwaysClose,
  stopPropagation,
  onOpen,
  onClose,
  ...props
}) => {
  let handleOutsideClick;
  let handleClick;

  const [isOpen, setIsOpen] = React.useState(false);
  const nodeRef = React.useRef(null);
  React.useEffect(() => {
    return () =>
      document.removeEventListener("click", handleOutsideClick, false);
  }, []);

  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (!alwaysClose && nodeRef.current && nodeRef.current.contains(e.target))
      return;

    handleClick(e);
  };

  handleClick = e => {
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

    setIsOpen(prevState => {
      const newState = !prevState;
      if (newState && typeof onOpen === "function") onOpen(e);
      if (!newState && typeof onClose === "function") onClose(e);
      return newState;
    });
  };

  return (
    <div
      className={`dropdown${
        ["left", "center"].includes(openTo) ? ` dropdown--${openTo}` : ""
      }${isOpen ? " active" : ""}${divClassName ? ` ${divClassName}` : ""}`}
      ref={nodeRef}
      {...props}
    >
      <DropdownHeader
        type={type}
        handleClick={handleClick}
        className={className}
        header={header}
      />
      <div className="dropdown__menu">{children}</div>
    </div>
  );
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

export const DropdownElement = ({ selected, children, ...props }) => (
  <a className={selected ? "selected" : ""} {...props}>
    {children}
  </a>
);

export const DropdownDivider = () => <div className="divider" />;
