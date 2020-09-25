import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";

import { ConditionalWrapper } from "./Conditional";
import { appendClass } from "../utils";

type ElementProps = {
  selected?: boolean;
  icon?: string;
  children: ReactNode;
  className?: string;
  [x: string]: unknown;
};

const Element: FC<ElementProps> = ({
  selected = false,
  icon = null,
  children,
  className = null,
  ...props
}) => (
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

Element.propTypes = {
  selected: PropTypes.bool,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};

const Divider: FC = () => <div className="divider" />;

type GroupProps = {
  children: ReactNode;
};

const Group: FC<GroupProps> = ({ children }) => (
  <div className="dropdown__group">{children}</div>
);

Group.propTypes = {
  children: PropTypes.node.isRequired,
};

type GroupHeaderProps = {
  header: ReactNode;
};

const GroupHeader: FC<GroupHeaderProps> = ({ header }) => (
  <div className="dropdown__group-header">{header}</div>
);

GroupHeader.propTypes = {
  header: PropTypes.node.isRequired,
};

type DropdownHeaderProps = {
  type: string;
  handleClick: (...args) => void;
  className?: string;
  header: ReactNode;
};

const DropdownHeader: FC<DropdownHeaderProps> = ({
  type,
  handleClick,
  className,
  header,
}) => {
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
      return React.isValidElement(header)
        ? React.cloneElement(header, { onClick: handleClick })
        : null;
  }
};

type DropdownProps = {
  type?: "icon" | "link" | "div" | "button" | "custom";
  className?: string;
  header?: ReactNode;
  openTo?: "left" | "right" | "center";
  alwaysClose?: boolean;
  onOpen?: (e) => void;
  onClose?: (e) => void;
  stopPropagation?: boolean;
  divClassName?: string;
  children: ReactNode;
  up: boolean;
};

type DropdownState = {
  isOpen: boolean;
};

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  static propTypes: { [key in keyof DropdownProps]: unknown } = {
    type: PropTypes.oneOf(["icon", "link", "div", "button", "custom"]),
    className: PropTypes.string,
    header: PropTypes.node,
    openTo: PropTypes.oneOf(["left", "right", "center"]),
    alwaysClose: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    stopPropagation: PropTypes.bool,
    divClassName: PropTypes.string,
    children: PropTypes.node.isRequired,
    up: PropTypes.bool,
  };

  static defaultProps = {
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

  static Element = Element;
  static Divider = Divider;
  static Group = Group;
  static GroupHeader = GroupHeader;

  node: HTMLElement;

  constructor(props: DropdownProps) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e): void => {
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

  handleOutsideClick = (e): void => {
    // ignore clicks on the component itself
    const { alwaysClose } = this.props;
    if (!alwaysClose && this.node.contains(e.target)) return;

    this.handleClick(e);
  };

  render(): JSX.Element {
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

export { Dropdown };
