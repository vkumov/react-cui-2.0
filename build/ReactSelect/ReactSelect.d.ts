/// <reference types="react" />
import { Props as SelectProps } from "react-select";
import "../../css/react-select.css";
import { CUISelectProps } from "./types";
export declare type ReactSelectProps = SelectProps & CUISelectProps;
export declare const ReactSelect: ({ label, className, ...props }: ReactSelectProps) => JSX.Element;
