import React from "react";
import PropTypes from "prop-types";
import "../css/select.css";
declare type SelectProps = {
    id?: string;
    label?: string;
    title?: string;
    prompt?: string;
    multiple?: boolean;
    inline?: boolean | "both";
    up?: boolean;
    disabled?: boolean;
    width?: number;
    compressed?: boolean;
    [x: string]: any;
};
declare type SelectState = {
    isOpen: boolean;
    title: string | string[];
};
export declare class Select extends React.Component<SelectProps, SelectState> {
    static propTypes: {
        id: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        prompt: PropTypes.Requireable<string>;
        multiple: PropTypes.Requireable<boolean>;
        inline: PropTypes.Requireable<string | boolean>;
        up: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        width: PropTypes.Requireable<number>;
        compressed: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prompt: string;
        multiple: boolean;
        inline: boolean;
        id: any;
        label: any;
        title: any;
        width: any;
        up: boolean;
        disabled: boolean;
        compressed: boolean;
    };
    node: HTMLElement;
    constructor(props: SelectProps);
    handleClick: () => void;
    handleOutsideClick: (e: any) => void;
    handleOptionClick: (e: any, newValue: any, title: any) => void;
    isSelected: (checkValue: any) => boolean;
    renderOption: (child: any) => JSX.Element;
    renderOptgroup: (child: any) => JSX.Element;
    renderChildren: (children: any) => JSX.Element;
    findTitle: (where?: any) => string;
    getShowValue: () => string | string[];
    render(): JSX.Element;
}
export {};
