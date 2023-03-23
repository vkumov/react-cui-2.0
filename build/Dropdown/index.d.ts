import React, { ReactNode, ComponentProps, ReactElement, HTMLProps } from 'react';
import { Placement, Strategy, FloatingPortal } from '@floating-ui/react';

type MenuElementProps = {
    selected?: boolean;
    icon?: string | ReactElement;
    submenu?: boolean;
} & HTMLProps<HTMLAnchorElement>;
declare const MenuElement: React.ForwardRefExoticComponent<Omit<MenuElementProps, "ref"> & React.RefAttributes<any>>;
declare const Menu: React.ForwardRefExoticComponent<Omit<{
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
} & Omit<React.HTMLProps<HTMLButtonElement>, "label">, "ref"> & React.RefAttributes<any>>;
declare const Dropdown: React.ForwardRefExoticComponent<{
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
declare const MenuDivider: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuGroup: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement> & {
    header?: ReactNode;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;

export { Dropdown, Menu, MenuDivider, MenuElement, MenuGroup };
