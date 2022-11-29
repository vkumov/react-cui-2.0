import React, { type Ref, type ReactNode } from "react";
import { type Props as SelectProps, type GroupBase } from "react-select";
import type SelectGeneric from "react-select/dist/declarations/src/Select";
import type { LabelColor } from "../Label";
import "../../css/react-select.css";
type CUISelectProps = {
  label?: ReactNode;
  multiValueColor?: LabelColor;
  error?: ReactNode | boolean;
};
export type ReactSelectProps<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> = CUISelectProps & SelectProps<Option, IsMulti, Group>;
declare function UnrefedSelect<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  {
    label,
    className,
    error,
    ...props
  }: ReactSelectProps<Option, IsMulti, Group>,
  ref: Ref<SelectGeneric<Option, IsMulti, Group>>
): JSX.Element;
export declare const ReactSelect: <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: CUISelectProps &
    Omit<
      Pick<
        import("react-select/dist/declarations/src/Select").Props<
          Option,
          IsMulti,
          Group
        >,
        | "aria-errormessage"
        | "aria-invalid"
        | "aria-label"
        | "aria-labelledby"
        | "ariaLiveMessages"
        | "autoFocus"
        | "className"
        | "classNamePrefix"
        | "delimiter"
        | "formatOptionLabel"
        | "hideSelectedOptions"
        | "id"
        | "inputValue"
        | "inputId"
        | "instanceId"
        | "isClearable"
        | "isOptionSelected"
        | "menuPortalTarget"
        | "name"
        | "onBlur"
        | "onChange"
        | "onFocus"
        | "onInputChange"
        | "onKeyDown"
        | "onMenuOpen"
        | "onMenuClose"
        | "onMenuScrollToTop"
        | "onMenuScrollToBottom"
        | "theme"
        | "value"
        | "form"
        | "required"
      > & {
        "aria-live"?: "off" | "assertive" | "polite";
        backspaceRemovesValue?: boolean;
        blurInputOnSelect?: boolean;
        captureMenuScroll?: boolean;
        closeMenuOnSelect?: boolean;
        closeMenuOnScroll?: boolean | ((event: Event) => boolean);
        components?: Partial<
          import("react-select/dist/declarations/src/components").SelectComponents<
            Option,
            IsMulti,
            Group
          >
        >;
        controlShouldRenderValue?: boolean;
        escapeClearsValue?: boolean;
        filterOption?: (
          option: import("react-select/dist/declarations/src/filters").FilterOptionOption<Option>,
          inputValue: string
        ) => boolean;
        formatGroupLabel?: (group: Group) => React.ReactNode;
        getOptionLabel?: import("react-select").GetOptionLabel<Option>;
        getOptionValue?: import("react-select").GetOptionValue<Option>;
        isDisabled?: boolean;
        isLoading?: boolean;
        isOptionDisabled?: (
          option: Option,
          selectValue: import("react-select").Options<Option>
        ) => boolean;
        isMulti?: IsMulti;
        isRtl?: boolean;
        isSearchable?: boolean;
        loadingMessage?: (obj: { inputValue: string }) => React.ReactNode;
        minMenuHeight?: number;
        maxMenuHeight?: number;
        menuIsOpen?: boolean;
        menuPlacement?: import("react-select").MenuPlacement;
        menuPosition?: import("react-select").MenuPosition;
        menuShouldBlockScroll?: boolean;
        menuShouldScrollIntoView?: boolean;
        noOptionsMessage?: (obj: { inputValue: string }) => React.ReactNode;
        openMenuOnFocus?: boolean;
        openMenuOnClick?: boolean;
        options?: import("react-select").OptionsOrGroups<Option, Group>;
        pageSize?: number;
        placeholder?: React.ReactNode;
        screenReaderStatus?: (obj: { count: number }) => string;
        styles?: import("react-select").StylesConfig<Option, IsMulti, Group>;
        tabIndex?: number;
        tabSelectsValue?: boolean;
      } & {},
      | "inputValue"
      | "menuIsOpen"
      | "onChange"
      | "onInputChange"
      | "onMenuOpen"
      | "onMenuClose"
      | "value"
    > &
    Partial<
      Pick<
        import("react-select/dist/declarations/src/Select").Props<
          Option,
          IsMulti,
          Group
        >,
        | "aria-errormessage"
        | "aria-invalid"
        | "aria-label"
        | "aria-labelledby"
        | "ariaLiveMessages"
        | "autoFocus"
        | "className"
        | "classNamePrefix"
        | "delimiter"
        | "formatOptionLabel"
        | "hideSelectedOptions"
        | "id"
        | "inputValue"
        | "inputId"
        | "instanceId"
        | "isClearable"
        | "isOptionSelected"
        | "menuPortalTarget"
        | "name"
        | "onBlur"
        | "onChange"
        | "onFocus"
        | "onInputChange"
        | "onKeyDown"
        | "onMenuOpen"
        | "onMenuClose"
        | "onMenuScrollToTop"
        | "onMenuScrollToBottom"
        | "theme"
        | "value"
        | "form"
        | "required"
      > & {
        "aria-live"?: "off" | "assertive" | "polite";
        backspaceRemovesValue?: boolean;
        blurInputOnSelect?: boolean;
        captureMenuScroll?: boolean;
        closeMenuOnSelect?: boolean;
        closeMenuOnScroll?: boolean | ((event: Event) => boolean);
        components?: Partial<
          import("react-select/dist/declarations/src/components").SelectComponents<
            Option,
            IsMulti,
            Group
          >
        >;
        controlShouldRenderValue?: boolean;
        escapeClearsValue?: boolean;
        filterOption?: (
          option: import("react-select/dist/declarations/src/filters").FilterOptionOption<Option>,
          inputValue: string
        ) => boolean;
        formatGroupLabel?: (group: Group) => React.ReactNode;
        getOptionLabel?: import("react-select").GetOptionLabel<Option>;
        getOptionValue?: import("react-select").GetOptionValue<Option>;
        isDisabled?: boolean;
        isLoading?: boolean;
        isOptionDisabled?: (
          option: Option,
          selectValue: import("react-select").Options<Option>
        ) => boolean;
        isMulti?: IsMulti;
        isRtl?: boolean;
        isSearchable?: boolean;
        loadingMessage?: (obj: { inputValue: string }) => React.ReactNode;
        minMenuHeight?: number;
        maxMenuHeight?: number;
        menuIsOpen?: boolean;
        menuPlacement?: import("react-select").MenuPlacement;
        menuPosition?: import("react-select").MenuPosition;
        menuShouldBlockScroll?: boolean;
        menuShouldScrollIntoView?: boolean;
        noOptionsMessage?: (obj: { inputValue: string }) => React.ReactNode;
        openMenuOnFocus?: boolean;
        openMenuOnClick?: boolean;
        options?: import("react-select").OptionsOrGroups<Option, Group>;
        pageSize?: number;
        placeholder?: React.ReactNode;
        screenReaderStatus?: (obj: { count: number }) => string;
        styles?: import("react-select").StylesConfig<Option, IsMulti, Group>;
        tabIndex?: number;
        tabSelectsValue?: boolean;
      } & {}
    > &
    import("react-select/dist/declarations/src/useStateManager").StateManagerAdditionalProps<Option> & {
      ref?: React.ForwardedRef<SelectGeneric<Option, IsMulti, Group>>;
    }
) => ReturnType<typeof UnrefedSelect>;
export {};
