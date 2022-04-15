import { FC, HTMLProps, ReactNode } from "react";
declare type ElementProps = {
    selected?: boolean;
    icon?: string;
    children: ReactNode;
} & HTMLProps<HTMLAnchorElement>;
declare const Element: FC<ElementProps>;
declare const Divider: FC;
declare type GroupProps = {
    children: ReactNode;
};
declare const Group: FC<GroupProps>;
declare type GroupHeaderProps = {
    header: ReactNode;
};
declare const GroupHeader: FC<GroupHeaderProps>;
declare type DropdownProps = {
    type?: "icon" | "link" | "div" | "button" | "custom";
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
};
export interface DropdownParts {
    Element: FC<ElementProps>;
    Divider: FC;
    Group: FC<GroupProps>;
    GroupHeader: FC<GroupHeaderProps>;
}
declare const Dropdown: DropdownParts & FC<DropdownProps>;
export { Dropdown, Element as DropdownElement, Divider as DropdownDivider, Group as DropdownGroup, GroupHeader as DropdownGroupHeader, };
