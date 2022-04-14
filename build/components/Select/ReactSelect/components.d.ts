/// <reference types="react" />
import type { MultiValueGenericProps, MultiValueRemoveProps } from "react-select";
import "../../../css/react-select.css";
export declare const MultiValueContainer: (props: MultiValueGenericProps<any>) => JSX.Element;
export declare const MultiValueLabel: (props: MultiValueGenericProps) => JSX.Element;
export declare const MultiValueRemove: ({ innerProps: { className, ...props }, }: MultiValueRemoveProps) => JSX.Element;
