/// <reference types="react" />
import type { MultiValueGenericProps, MultiValueRemoveProps, GroupHeadingProps, GroupProps } from "react-select";
export declare const MultiValueContainer: (props: MultiValueGenericProps<any>) => JSX.Element;
export declare const MultiValueLabel: (props: MultiValueGenericProps) => JSX.Element;
export declare const MultiValueRemove: ({ innerProps: { className, ...props }, }: MultiValueRemoveProps) => JSX.Element;
export declare function Group<Option = unknown, IsMulti extends boolean = boolean>({ className, children, Heading, headingProps, innerProps, ...props }: GroupProps<Option, IsMulti>): JSX.Element;
export declare function GroupHeading<Option = unknown, IsMulti extends boolean = boolean>({ className, children, ...props }: GroupHeadingProps<Option, IsMulti>): JSX.Element;
