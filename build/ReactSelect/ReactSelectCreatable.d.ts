import React, { type Ref } from "react";
import type { GroupBase } from "react-select/dist/declarations/src/types";
import type SelectGeneric from "react-select/dist/declarations/src/Select";
import { type CreatableProps } from "react-select/creatable";
import "../../css/react-select.css";
import type { ReactNode } from "react";
import type { LabelColor } from "../Label";
declare type CUISelectProps = {
  label?: ReactNode;
  multiValueColor?: LabelColor;
  error?: ReactNode | boolean;
};
export declare type CreatableReactSelectProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> = CreatableProps<Option, IsMulti, Group> & CUISelectProps;
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
  }: CreatableReactSelectProps<Option, IsMulti, Group>,
  ref: Ref<SelectGeneric<Option, IsMulti, Group>>
): JSX.Element;
export declare const CreatableReactSelect: <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Omit<
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
      getOptionLabel?: import("react-select/dist/declarations/src/types").GetOptionLabel<Option>;
      getOptionValue?: import("react-select/dist/declarations/src/types").GetOptionValue<Option>;
      isDisabled?: boolean;
      isLoading?: boolean;
      isOptionDisabled?: (
        option: Option,
        selectValue: import("react-select/dist/declarations/src/types").Options<Option>
      ) => boolean;
      isMulti?: IsMulti;
      isRtl?: boolean;
      isSearchable?: boolean;
      loadingMessage?: (obj: { inputValue: string }) => React.ReactNode;
      minMenuHeight?: number;
      maxMenuHeight?: number;
      menuIsOpen?: boolean;
      menuPlacement?: import("react-select/dist/declarations/src/types").MenuPlacement;
      menuPosition?: import("react-select/dist/declarations/src/types").MenuPosition;
      menuShouldBlockScroll?: boolean;
      menuShouldScrollIntoView?: boolean;
      noOptionsMessage?: (obj: { inputValue: string }) => React.ReactNode;
      openMenuOnFocus?: boolean;
      openMenuOnClick?: boolean;
      options?: import("react-select/dist/declarations/src/types").OptionsOrGroups<
        Option,
        Group
      >;
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
        getOptionLabel?: import("react-select/dist/declarations/src/types").GetOptionLabel<Option>;
        getOptionValue?: import("react-select/dist/declarations/src/types").GetOptionValue<Option>;
        isDisabled?: boolean;
        isLoading?: boolean;
        isOptionDisabled?: (
          option: Option,
          selectValue: import("react-select/dist/declarations/src/types").Options<Option>
        ) => boolean;
        isMulti?: IsMulti;
        isRtl?: boolean;
        isSearchable?: boolean;
        loadingMessage?: (obj: { inputValue: string }) => React.ReactNode;
        minMenuHeight?: number;
        maxMenuHeight?: number;
        menuIsOpen?: boolean;
        menuPlacement?: import("react-select/dist/declarations/src/types").MenuPlacement;
        menuPosition?: import("react-select/dist/declarations/src/types").MenuPosition;
        menuShouldBlockScroll?: boolean;
        menuShouldScrollIntoView?: boolean;
        noOptionsMessage?: (obj: { inputValue: string }) => React.ReactNode;
        openMenuOnFocus?: boolean;
        openMenuOnClick?: boolean;
        options?: import("react-select/dist/declarations/src/types").OptionsOrGroups<
          Option,
          Group
        >;
        pageSize?: number;
        placeholder?: React.ReactNode;
        screenReaderStatus?: (obj: { count: number }) => string;
        styles?: import("react-select").StylesConfig<Option, IsMulti, Group>;
        tabIndex?: number;
        tabSelectsValue?: boolean;
      } & {}
    > &
    import("react-select/dist/declarations/src/useStateManager").StateManagerAdditionalProps<Option> &
    import("react-select/dist/declarations/src/useCreatable").CreatableAdditionalProps<
      Option,
      Group
    > &
    CUISelectProps & {
      ref?: React.ForwardedRef<SelectGeneric<Option, IsMulti, Group>>;
    }
) => ReturnType<typeof UnrefedSelect>;
export {};
