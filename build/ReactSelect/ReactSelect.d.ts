import React, { type ReactNode, type Ref } from "react";
import { type GroupBase, type Props as SelectProps } from "react-select";
import type SelectGeneric from "react-select/dist/declarations/src/Select";
import type { LabelColor } from "../Label";

type CUISelectProps = {
    label?: ReactNode;
    multiValueColor?: LabelColor;
    error?: ReactNode | boolean;
};
export type ReactSelectProps<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = CUISelectProps & SelectProps<Option, IsMulti, Group>;
declare function UnrefedSelect<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ label, className, error, ...props }: ReactSelectProps<Option, IsMulti, Group>, ref: Ref<SelectGeneric<Option, IsMulti, Group>>): JSX.Element;
export declare const ReactSelect: <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: CUISelectProps & Omit<import("react-select/dist/declarations/src/Select").PublicBaseSelectProps<Option, IsMulti, Group>, "inputValue" | "menuIsOpen" | "onChange" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "value"> & Partial<import("react-select/dist/declarations/src/Select").PublicBaseSelectProps<Option, IsMulti, Group>> & import("react-select/dist/declarations/src/useStateManager").StateManagerAdditionalProps<Option> & {
    ref?: React.ForwardedRef<SelectGeneric<Option, IsMulti, Group>>;
}) => ReturnType<typeof UnrefedSelect>;
export {};
