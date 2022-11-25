import React, {
  FC,
  HTMLProps,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useClickInside } from "src/hooks/useClickInside";
import { useClickOutside } from "src/hooks/useClickOutside";

import { appendClass } from "src/utils";
import { Divider, Element, Group, GroupHeader, Menu } from "./Menu";

type DropdownType = "icon" | "link" | "div" | "button" | "custom";

type DropdownHeaderProps = {
  type: DropdownType;
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
        ? React.cloneElement<any>(header, { onClick: handleClick })
        : null;
  }
};

type DropdownProps = {
  type?: DropdownType;
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
  isOpen?: boolean;
} & HTMLProps<HTMLDivElement>;

export interface DropdownParts {
  Element: typeof Element;
  Divider: typeof Divider;
  Group: typeof Group;
  GroupHeader: typeof GroupHeader;
  Menu: typeof Menu;
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
  isOpen: outsideIsOpen,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(undefined);
  const menuRef = useRef<HTMLDivElement>(undefined);

  useEffect(() => {
    if (typeof outsideIsOpen !== "undefined" && outsideIsOpen !== null)
      setIsOpen(outsideIsOpen);
  }, [outsideIsOpen]);

  const handleHeaderClick = useCallback(
    (e): void => {
      if (stopPropagation) {
        e.stopPropagation();
        e.preventDefault();
      }

      setIsOpen((current) => {
        const newIsOpen = !current;
        if (newIsOpen && onOpen) onOpen(e);
        if (!newIsOpen && onClose) onClose(e);
        return newIsOpen;
      });
    },
    [stopPropagation, onClose, onOpen]
  );

  useClickOutside(
    () => {
      setIsOpen(false);
    },
    undefined,
    [divRef.current]
  );

  useClickInside(
    () => {
      if (alwaysClose) setIsOpen(false);
    },
    ["click"],
    [menuRef.current]
  );

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
      {...props}
    >
      <DropdownHeader
        type={type}
        handleClick={handleHeaderClick}
        className={className}
        header={header}
      />
      <Menu ref={menuRef}>{children}</Menu>
    </div>
  );
};

Dropdown.Divider = Divider;
Dropdown.Element = Element;
Dropdown.Group = Group;
Dropdown.GroupHeader = GroupHeader;
Dropdown.Menu = Menu;

export {
  Dropdown,
  Element as DropdownElement,
  Divider as DropdownDivider,
  Group as DropdownGroup,
  GroupHeader as DropdownGroupHeader,
};
