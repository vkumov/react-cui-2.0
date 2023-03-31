import React, { type ReactNode, type Ref } from "react";
import { type CreatableProps } from "react-select/creatable";
import type SelectGeneric from "react-select/dist/declarations/src/Select";
import type { GroupBase } from "react-select/dist/declarations/src/types";
import type { LabelColor } from "../Label";

type CUISelectProps = {
    label?: ReactNode;
    multiValueColor?: LabelColor;
    error?: ReactNode | boolean;
};
export type CreatableReactSelectProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> = CreatableProps<Option, IsMulti, Group> & CUISelectProps;
declare function UnrefedSelect<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ label, className, error, ...props }: CreatableReactSelectProps<Option, IsMulti, Group>, ref: Ref<SelectGeneric<Option, IsMulti, Group>>): JSX.Element;
export declare const CreatableReactSelect: <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: Omit<import("react-select/dist/declarations/src/Select").PublicBaseSelectProps<Option, IsMulti, Group>, "inputValue" | "menuIsOpen" | "onChange" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "value"> & Partial<import("react-select/dist/declarations/src/Select").PublicBaseSelectProps<Option, IsMulti, Group>> & import("react-select/dist/declarations/src/useStateManager").StateManagerAdditionalProps<Option> & import("react-select/dist/declarations/src/useCreatable").CreatableAdditionalProps<Option, Group> & CUISelectProps & {
    ref?: React.ForwardedRef<SelectGeneric<Option, IsMulti, Group>>;
}) => ReturnType<typeof UnrefedSelect>;
export {};
