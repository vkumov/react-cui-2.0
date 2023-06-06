/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';
import { MultiValueGenericProps, MultiValueRemoveProps, GroupProps, GroupHeadingProps } from 'react-select';

declare const MultiValueContainer: (props: MultiValueGenericProps<any>) => JSX.Element;
declare const MultiValueLabel: (props: MultiValueGenericProps) => JSX.Element;
declare const MultiValueRemove: ({ innerProps: props, }: MultiValueRemoveProps) => JSX.Element;
declare function Group<Option = unknown, IsMulti extends boolean = boolean>({ className, children, Heading, headingProps, innerProps, ...props }: GroupProps<Option, IsMulti>): react_jsx_runtime.JSX.Element;
declare function GroupHeading<Option = unknown, IsMulti extends boolean = boolean>({ className, children }: GroupHeadingProps<Option, IsMulti>): react_jsx_runtime.JSX.Element;

export { Group, GroupHeading, MultiValueContainer, MultiValueLabel, MultiValueRemove };
