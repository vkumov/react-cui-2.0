import { FC, HTMLProps, ReactNode } from "react";
import { Divider, Element, Group, GroupHeader, Menu } from "./Menu";
declare type DropdownType = "icon" | "link" | "div" | "button" | "custom";
declare type DropdownProps = {
    type?: DropdownType;
    className?: string;
    header?: ReactNode;
    openTo?: "left" | "right" | "center";
    alwaysClose?: boolean;
    onOpen?: (e: any) => void;
    onClose?: (e: any) => void;
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
declare const Dropdown: DropdownParts & FC<DropdownProps>;
export { Dropdown, Element as DropdownElement, Divider as DropdownDivider, Group as DropdownGroup, GroupHeader as DropdownGroupHeader, };
