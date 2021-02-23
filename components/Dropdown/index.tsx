import React, { FC, ReactNode } from "react";

import { ConditionalWrapper } from "../Conditional";
import { appendClass } from "../../utils";

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

const Divider: FC = () => <div className="divider" />;

type GroupProps = {
  children: ReactNode;
};

const Group: FC<GroupProps> = ({ children }) => (
  <div className="dropdown__group">{children}</div>
);

type GroupHeaderProps = {
  header: ReactNode;
};

const GroupHeader: FC<GroupHeaderProps> = ({ header }) => (
  <div className="dropdown__group-header">{header}</div>
);

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
  up?: boolean;
};

type DropdownState = {
  isOpen: boolean;
};

class Dropdown extends React.Component<DropdownProps, DropdownState> {
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
    const { stopPropagation = false, onOpen, onClose } = this.props;
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
    const { alwaysClose = false } = this.props;
    if (!alwaysClose && this.node && this.node.contains(e.target)) return;

    this.handleClick(e);
  };

  render(): JSX.Element {
    const {
      openTo = "right",
      children,
      type = "button",
      className = null,
      header = null,
      divClassName = null,
      up = false,
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
