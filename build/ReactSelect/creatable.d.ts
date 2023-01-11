import * as react_select_dist_declarations_src_useCreatable from 'react-select/dist/declarations/src/useCreatable';
import * as react_select_dist_declarations_src_useStateManager from 'react-select/dist/declarations/src/useStateManager';
import * as react_select_dist_declarations_src_types from 'react-select/dist/declarations/src/types';
import { GroupBase } from 'react-select/dist/declarations/src/types';
import * as react_select_dist_declarations_src_filters from 'react-select/dist/declarations/src/filters';
import * as react_select_dist_declarations_src_components from 'react-select/dist/declarations/src/components';
import * as react_select from 'react-select';
import * as react_select_dist_declarations_src_Select from 'react-select/dist/declarations/src/Select';
import react_select_dist_declarations_src_Select__default from 'react-select/dist/declarations/src/Select';
import React, { ReactNode, Ref } from 'react';
import { CreatableProps } from 'react-select/creatable';

type LabelColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";

type CUISelectProps = {
    label?: ReactNode;
    multiValueColor?: LabelColor;
    error?: ReactNode | boolean;
};
type CreatableReactSelectProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> = CreatableProps<Option, IsMulti, Group> & CUISelectProps;
declare function UnrefedSelect<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ label, className, error, ...props }: CreatableReactSelectProps<Option, IsMulti, Group>, ref: Ref<react_select_dist_declarations_src_Select__default<Option, IsMulti, Group>>): JSX.Element;
declare const CreatableReactSelect: <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: Omit<Pick<react_select_dist_declarations_src_Select.Props<Option, IsMulti, Group>, "aria-errormessage" | "aria-invalid" | "aria-label" | "aria-labelledby" | "ariaLiveMessages" | "autoFocus" | "className" | "classNamePrefix" | "delimiter" | "formatOptionLabel" | "hideSelectedOptions" | "id" | "inputValue" | "inputId" | "instanceId" | "isClearable" | "isOptionSelected" | "menuPortalTarget" | "name" | "onBlur" | "onChange" | "onFocus" | "onInputChange" | "onKeyDown" | "onMenuOpen" | "onMenuClose" | "onMenuScrollToTop" | "onMenuScrollToBottom" | "theme" | "value" | "form" | "required"> & {
    'aria-live'?: "off" | "assertive" | "polite";
    backspaceRemovesValue?: boolean;
    blurInputOnSelect?: boolean;
    captureMenuScroll?: boolean;
    classNames?: react_select.ClassNamesConfig<Option, IsMulti, Group>;
    closeMenuOnSelect?: boolean;
    closeMenuOnScroll?: boolean | ((event: Event) => boolean);
    components?: Partial<react_select_dist_declarations_src_components.SelectComponents<Option, IsMulti, Group>>;
    controlShouldRenderValue?: boolean;
    escapeClearsValue?: boolean;
    filterOption?: (option: react_select_dist_declarations_src_filters.FilterOptionOption<Option>, inputValue: string) => boolean;
    formatGroupLabel?: (group: Group) => React.ReactNode;
    getOptionLabel?: react_select_dist_declarations_src_types.GetOptionLabel<Option>;
    getOptionValue?: react_select_dist_declarations_src_types.GetOptionValue<Option>;
    isDisabled?: boolean;
    isLoading?: boolean;
    isOptionDisabled?: (option: Option, selectValue: react_select_dist_declarations_src_types.Options<Option>) => boolean;
    isMulti?: IsMulti;
    isRtl?: boolean;
    isSearchable?: boolean;
    loadingMessage?: (obj: {
        inputValue: string;
    }) => React.ReactNode;
    minMenuHeight?: number;
    maxMenuHeight?: number;
    menuIsOpen?: boolean;
    menuPlacement?: react_select_dist_declarations_src_types.MenuPlacement;
    menuPosition?: react_select_dist_declarations_src_types.MenuPosition;
    menuShouldBlockScroll?: boolean;
    menuShouldScrollIntoView?: boolean;
    noOptionsMessage?: (obj: {
        inputValue: string;
    }) => React.ReactNode;
    openMenuOnFocus?: boolean;
    openMenuOnClick?: boolean;
    options?: react_select_dist_declarations_src_types.OptionsOrGroups<Option, Group>;
    pageSize?: number;
    placeholder?: React.ReactNode;
    screenReaderStatus?: (obj: {
        count: number;
    }) => string;
    styles?: react_select.StylesConfig<Option, IsMulti, Group>;
    tabIndex?: number;
    tabSelectsValue?: boolean;
    unstyled?: boolean;
} & {}, "inputValue" | "menuIsOpen" | "onChange" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "value"> & Partial<Pick<react_select_dist_declarations_src_Select.Props<Option, IsMulti, Group>, "aria-errormessage" | "aria-invalid" | "aria-label" | "aria-labelledby" | "ariaLiveMessages" | "autoFocus" | "className" | "classNamePrefix" | "delimiter" | "formatOptionLabel" | "hideSelectedOptions" | "id" | "inputValue" | "inputId" | "instanceId" | "isClearable" | "isOptionSelected" | "menuPortalTarget" | "name" | "onBlur" | "onChange" | "onFocus" | "onInputChange" | "onKeyDown" | "onMenuOpen" | "onMenuClose" | "onMenuScrollToTop" | "onMenuScrollToBottom" | "theme" | "value" | "form" | "required"> & {
    'aria-live'?: "off" | "assertive" | "polite";
    backspaceRemovesValue?: boolean;
    blurInputOnSelect?: boolean;
    captureMenuScroll?: boolean;
    classNames?: react_select.ClassNamesConfig<Option, IsMulti, Group>;
    closeMenuOnSelect?: boolean;
    closeMenuOnScroll?: boolean | ((event: Event) => boolean);
    components?: Partial<react_select_dist_declarations_src_components.SelectComponents<Option, IsMulti, Group>>;
    controlShouldRenderValue?: boolean;
    escapeClearsValue?: boolean;
    filterOption?: (option: react_select_dist_declarations_src_filters.FilterOptionOption<Option>, inputValue: string) => boolean;
    formatGroupLabel?: (group: Group) => React.ReactNode;
    getOptionLabel?: react_select_dist_declarations_src_types.GetOptionLabel<Option>;
    getOptionValue?: react_select_dist_declarations_src_types.GetOptionValue<Option>;
    isDisabled?: boolean;
    isLoading?: boolean;
    isOptionDisabled?: (option: Option, selectValue: react_select_dist_declarations_src_types.Options<Option>) => boolean;
    isMulti?: IsMulti;
    isRtl?: boolean;
    isSearchable?: boolean;
    loadingMessage?: (obj: {
        inputValue: string;
    }) => React.ReactNode;
    minMenuHeight?: number;
    maxMenuHeight?: number;
    menuIsOpen?: boolean;
    menuPlacement?: react_select_dist_declarations_src_types.MenuPlacement;
    menuPosition?: react_select_dist_declarations_src_types.MenuPosition;
    menuShouldBlockScroll?: boolean;
    menuShouldScrollIntoView?: boolean;
    noOptionsMessage?: (obj: {
        inputValue: string;
    }) => React.ReactNode;
    openMenuOnFocus?: boolean;
    openMenuOnClick?: boolean;
    options?: react_select_dist_declarations_src_types.OptionsOrGroups<Option, Group>;
    pageSize?: number;
    placeholder?: React.ReactNode;
    screenReaderStatus?: (obj: {
        count: number;
    }) => string;
    styles?: react_select.StylesConfig<Option, IsMulti, Group>;
    tabIndex?: number;
    tabSelectsValue?: boolean;
    unstyled?: boolean;
} & {}> & react_select_dist_declarations_src_useStateManager.StateManagerAdditionalProps<Option> & react_select_dist_declarations_src_useCreatable.CreatableAdditionalProps<Option, Group> & CUISelectProps & {
    ref?: React.ForwardedRef<react_select_dist_declarations_src_Select__default<Option, IsMulti, Group>>;
}) => ReturnType<typeof UnrefedSelect>;

export { CreatableReactSelect, CreatableReactSelectProps };
