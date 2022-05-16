import React, {
  FC,
  HTMLProps,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { appendClass } from "src/utils";
import { Divider, Element, Group, GroupHeader, Menu } from "./Menu";

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

type DropdownType = "icon" | "link" | "div" | "button" | "custom";

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

  useEffect(() => {
    if (typeof outsideIsOpen !== "undefined" && outsideIsOpen !== null)
      setIsOpen(outsideIsOpen);
  }, [outsideIsOpen]);

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
      {...props}
    >
      <DropdownHeader
        type={type}
        handleClick={handleClick}
        className={className}
        header={header}
      />
      <Menu>{children}</Menu>
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
