import React, { ReactNode } from "react";
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
    up: boolean;
};
declare type DropdownState = {
    isOpen: boolean;
};
declare class Dropdown extends React.Component<DropdownProps, DropdownState> {
    static propTypes: {
        [key in keyof DropdownProps]: unknown;
    };
    static defaultProps: {
        type: string;
        openTo: boolean;
        className: any;
        header: any;
        alwaysClose: boolean;
        onOpen: any;
        onClose: any;
        stopPropagation: boolean;
        divClassName: any;
        up: boolean;
    };
    static Element: React.FC<ElementProps>;
    static Divider: React.FC<{}>;
    static Group: React.FC<GroupProps>;
    static GroupHeader: React.FC<GroupHeaderProps>;
    node: HTMLElement;
    constructor(props: DropdownProps);
    handleClick: (e: any) => void;
    handleOutsideClick: (e: any) => void;
    render(): JSX.Element;
}
export { Dropdown };
