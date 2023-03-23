import * as react_select_dist_declarations_src_useCreatable from 'react-select/dist/declarations/src/useCreatable';
import * as react_select_dist_declarations_src_useStateManager from 'react-select/dist/declarations/src/useStateManager';
import * as react_select_dist_declarations_src_Select from 'react-select/dist/declarations/src/Select';
import react_select_dist_declarations_src_Select__default from 'react-select/dist/declarations/src/Select';
import React, { ReactNode, Ref } from 'react';
import { CreatableProps } from 'react-select/creatable';
import { GroupBase } from 'react-select/dist/declarations/src/types';

type LabelColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";

type CUISelectProps = {
    label?: ReactNode;
    multiValueColor?: LabelColor;
    error?: ReactNode | boolean;
};
type CreatableReactSelectProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> = CreatableProps<Option, IsMulti, Group> & CUISelectProps;
declare function UnrefedSelect<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ label, className, error, ...props }: CreatableReactSelectProps<Option, IsMulti, Group>, ref: Ref<react_select_dist_declarations_src_Select__default<Option, IsMulti, Group>>): JSX.Element;
declare const CreatableReactSelect: <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: Omit<react_select_dist_declarations_src_Select.PublicBaseSelectProps<Option, IsMulti, Group>, "inputValue" | "menuIsOpen" | "onChange" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "value"> & Partial<react_select_dist_declarations_src_Select.PublicBaseSelectProps<Option, IsMulti, Group>> & react_select_dist_declarations_src_useStateManager.StateManagerAdditionalProps<Option> & react_select_dist_declarations_src_useCreatable.CreatableAdditionalProps<Option, Group> & CUISelectProps & {
    ref?: React.ForwardedRef<react_select_dist_declarations_src_Select__default<Option, IsMulti, Group>>;
}) => ReturnType<typeof UnrefedSelect>;

export { CreatableReactSelect, CreatableReactSelectProps };
