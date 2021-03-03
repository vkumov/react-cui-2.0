import { FC, ReactNode } from "react";
declare type ElementProps = {
    selected?: boolean;
    icon?: string;
    children: ReactNode;
    className?: string;
    [x: string]: unknown;
};
declare type GroupProps = {
    children: ReactNode;
};
declare type GroupHeaderProps = {
    header: ReactNode;
};
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
};
export interface DropdownParts {
    Element: FC<ElementProps>;
    Divider: FC;
    Group: FC<GroupProps>;
    GroupHeader: FC<GroupHeaderProps>;
}
declare const Dropdown: DropdownParts & FC<DropdownProps>;
export { Dropdown };
