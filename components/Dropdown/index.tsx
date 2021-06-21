import React, {
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";

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

export interface DropdownParts {
  Element: FC<ElementProps>;
  Divider: FC;
  Group: FC<GroupProps>;
  GroupHeader: FC<GroupHeaderProps>;
}

const Dropdown: DropdownParts & FC<DropdownProps> = ({
  openTo = "right",
  children,
  type = "button",
  className = null,
  header = null,
  divClassName = null,
  up = false,
  onClose = null,
  onOpen = null,
  stopPropagation = false,
  alwaysClose = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(undefined);

  // eslint-disable-next-line prefer-const
  let handleOutsideClick;

  const handleClick = useCallback(
    (e): void => {
      if (stopPropagation) {
        e.stopPropagation();
        e.preventDefault();
      }

      setIsOpen((current) => {
        if (!current) {
          // attach/remove event handler
          document.addEventListener("click", handleOutsideClick, true);
        } else {
          document.removeEventListener("click", handleOutsideClick, true);
        }
        const newIsOpen = !current;
        if (newIsOpen && onOpen) onOpen(e);
        if (!newIsOpen && onClose) onClose(e);
        return newIsOpen;
      });
    },
    [stopPropagation, onClose, onOpen]
  );

  handleOutsideClick = (e: MouseEvent<Node>): void => {
    // ignore clicks on the component itself
    if (!(e.target instanceof Node) || !divRef?.current) return;
    if (!alwaysClose && divRef.current && divRef.current.contains(e.target))
      return;

    if (!divRef.current.contains(e.target)) {
      handleClick(e);
      return;
    }
    if (!divRef.current.isSameNode(e.target.parentNode) && alwaysClose) {
      handleClick(e);
      return;
    }
  };

  return (
    <div
      className={`dropdown${appendClass(
        ["left", "center"].includes(openTo),
        `dropdown--${openTo}`
      )}${appendClass(up, "dropdown--up")}${appendClass(
        isOpen,
        "active"
      )}${appendClass(divClassName)}`}
      ref={divRef}
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

Dropdown.Divider = Divider;
Dropdown.Element = Element;
Dropdown.Group = Group;
Dropdown.GroupHeader = GroupHeader;

export { Dropdown };
