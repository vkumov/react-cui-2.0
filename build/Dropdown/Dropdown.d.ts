import React, { type ComponentProps, type HTMLProps, type ReactElement, type ReactNode } from "react";
import { FloatingPortal, type Placement, type Strategy } from "@floating-ui/react";
type MenuElementProps = {
    selected?: boolean;
    icon?: string | ReactElement;
    submenu?: boolean;
} & HTMLProps<HTMLAnchorElement>;
export declare const MenuElement: React.ForwardRefExoticComponent<Omit<MenuElementProps, "ref"> & React.RefAttributes<any>>;
export declare const Menu: React.ForwardRefExoticComponent<Omit<{
    nested?: boolean;
} & {
    label: ReactNode;
    placement?: Placement;
    noChevron?: boolean;
    strategy?: Strategy;
    alwaysClose?: boolean;
    onOpen?: () => unknown;
    onClose?: () => unknown;
    isOpen?: boolean;
    withSizeLimit?: boolean;
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
} & {
    children?: React.ReactNode;
} & Pick<MenuElementProps, "icon"> & Omit<React.HTMLProps<HTMLButtonElement>, "label">, "ref"> & React.RefAttributes<any>>;
export declare const Dropdown: React.ForwardRefExoticComponent<{
    label: ReactNode;
    placement?: Placement;
    noChevron?: boolean;
    strategy?: Strategy;
    alwaysClose?: boolean;
    onOpen?: () => unknown;
    onClose?: () => unknown;
    isOpen?: boolean;
    withSizeLimit?: boolean;
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
} & {
    children?: React.ReactNode;
} & React.RefAttributes<any>>;
export declare const MenuDivider: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const MenuGroup: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement> & {
    header?: ReactNode;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
