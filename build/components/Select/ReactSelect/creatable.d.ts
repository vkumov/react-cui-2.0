/// <reference types="react" />
import type { GroupBase } from "react-select/dist/declarations/src/types";
import { CreatableProps } from "react-select/creatable";
import "../../../css/react-select.css";
import { CUISelectProps } from "./types";
export declare type CreatableReactSelectProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase<Option> = GroupBase<Option>> = CreatableProps<Option, IsMulti, Group> & CUISelectProps;
export declare const CreatableReactSelect: ({ label, className, ...props }: CreatableReactSelectProps) => JSX.Element;
