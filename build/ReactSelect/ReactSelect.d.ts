import React from "react";
import { Props as SelectProps } from "react-select";
import "../../css/react-select.css";
import type { ReactNode } from "react";
import type { LabelColor } from "src/Label";
declare type CUISelectProps = {
    label?: ReactNode;
    multiValueColor?: LabelColor;
    error?: ReactNode | boolean;
};
export declare type ReactSelectProps = SelectProps & CUISelectProps;
export declare const ReactSelect: React.ForwardRefExoticComponent<Omit<Pick<import("react-select/dist/declarations/src/Select").Props<unknown, boolean, import("react-select").GroupBase<unknown>>, "aria-errormessage" | "aria-invalid" | "aria-label" | "aria-labelledby" | "ariaLiveMessages" | "autoFocus" | "className" | "classNamePrefix" | "delimiter" | "formatOptionLabel" | "hideSelectedOptions" | "id" | "inputValue" | "inputId" | "instanceId" | "isClearable" | "isOptionSelected" | "menuPortalTarget" | "name" | "onBlur" | "onChange" | "onFocus" | "onInputChange" | "onKeyDown" | "onMenuOpen" | "onMenuClose" | "onMenuScrollToTop" | "onMenuScrollToBottom" | "theme" | "value" | "form"> & {
    'aria-live'?: "off" | "assertive" | "polite";
    backspaceRemovesValue?: boolean;
    blurInputOnSelect?: boolean;
    captureMenuScroll?: boolean;
    closeMenuOnSelect?: boolean;
    closeMenuOnScroll?: boolean | ((event: Event) => boolean);
    components?: Partial<import("react-select/dist/declarations/src/components").SelectComponents<unknown, boolean, import("react-select").GroupBase<unknown>>>;
    controlShouldRenderValue?: boolean;
    escapeClearsValue?: boolean;
    filterOption?: (option: import("react-select/dist/declarations/src/filters").FilterOptionOption<unknown>, inputValue: string) => boolean;
    formatGroupLabel?: (group: import("react-select").GroupBase<unknown>) => React.ReactNode;
    getOptionLabel?: import("react-select").GetOptionLabel<unknown>;
    getOptionValue?: import("react-select").GetOptionValue<unknown>;
    isDisabled?: boolean;
    isLoading?: boolean;
    isOptionDisabled?: (option: unknown, selectValue: import("react-select").Options<unknown>) => boolean;
    isMulti?: boolean;
    isRtl?: boolean;
    isSearchable?: boolean;
    loadingMessage?: (obj: {
        inputValue: string;
    }) => React.ReactNode;
    minMenuHeight?: number;
    maxMenuHeight?: number;
    menuIsOpen?: boolean;
    menuPlacement?: import("react-select").MenuPlacement;
    menuPosition?: import("react-select").MenuPosition;
    menuShouldBlockScroll?: boolean;
    menuShouldScrollIntoView?: boolean;
    noOptionsMessage?: (obj: {
        inputValue: string;
    }) => React.ReactNode;
    openMenuOnFocus?: boolean;
    openMenuOnClick?: boolean;
    options?: import("react-select").OptionsOrGroups<unknown, import("react-select").GroupBase<unknown>>;
    pageSize?: number;
    placeholder?: React.ReactNode;
    screenReaderStatus?: (obj: {
        count: number;
    }) => string;
    styles?: import("react-select").StylesConfig<unknown, boolean, import("react-select").GroupBase<unknown>>;
    tabIndex?: number;
    tabSelectsValue?: boolean;
} & {}, "inputValue" | "menuIsOpen" | "onChange" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "value"> & Partial<Pick<import("react-select/dist/declarations/src/Select").Props<unknown, boolean, import("react-select").GroupBase<unknown>>, "aria-errormessage" | "aria-invalid" | "aria-label" | "aria-labelledby" | "ariaLiveMessages" | "autoFocus" | "className" | "classNamePrefix" | "delimiter" | "formatOptionLabel" | "hideSelectedOptions" | "id" | "inputValue" | "inputId" | "instanceId" | "isClearable" | "isOptionSelected" | "menuPortalTarget" | "name" | "onBlur" | "onChange" | "onFocus" | "onInputChange" | "onKeyDown" | "onMenuOpen" | "onMenuClose" | "onMenuScrollToTop" | "onMenuScrollToBottom" | "theme" | "value" | "form"> & {
    'aria-live'?: "off" | "assertive" | "polite";
    backspaceRemovesValue?: boolean;
    blurInputOnSelect?: boolean;
    captureMenuScroll?: boolean;
    closeMenuOnSelect?: boolean;
    closeMenuOnScroll?: boolean | ((event: Event) => boolean);
    components?: Partial<import("react-select/dist/declarations/src/components").SelectComponents<unknown, boolean, import("react-select").GroupBase<unknown>>>;
    controlShouldRenderValue?: boolean;
    escapeClearsValue?: boolean;
    filterOption?: (option: import("react-select/dist/declarations/src/filters").FilterOptionOption<unknown>, inputValue: string) => boolean;
    formatGroupLabel?: (group: import("react-select").GroupBase<unknown>) => React.ReactNode;
    getOptionLabel?: import("react-select").GetOptionLabel<unknown>;
    getOptionValue?: import("react-select").GetOptionValue<unknown>;
    isDisabled?: boolean;
    isLoading?: boolean;
    isOptionDisabled?: (option: unknown, selectValue: import("react-select").Options<unknown>) => boolean;
    isMulti?: boolean;
    isRtl?: boolean;
    isSearchable?: boolean;
    loadingMessage?: (obj: {
        inputValue: string;
    }) => React.ReactNode;
    minMenuHeight?: number;
    maxMenuHeight?: number;
    menuIsOpen?: boolean;
    menuPlacement?: import("react-select").MenuPlacement;
    menuPosition?: import("react-select").MenuPosition;
    menuShouldBlockScroll?: boolean;
    menuShouldScrollIntoView?: boolean;
    noOptionsMessage?: (obj: {
        inputValue: string;
    }) => React.ReactNode;
    openMenuOnFocus?: boolean;
    openMenuOnClick?: boolean;
    options?: import("react-select").OptionsOrGroups<unknown, import("react-select").GroupBase<unknown>>;
    pageSize?: number;
    placeholder?: React.ReactNode;
    screenReaderStatus?: (obj: {
        count: number;
    }) => string;
    styles?: import("react-select").StylesConfig<unknown, boolean, import("react-select").GroupBase<unknown>>;
    tabIndex?: number;
    tabSelectsValue?: boolean;
} & {}> & import("react-select/dist/declarations/src/useStateManager").StateManagerAdditionalProps<unknown> & CUISelectProps & React.RefAttributes<any>>;
export {};
