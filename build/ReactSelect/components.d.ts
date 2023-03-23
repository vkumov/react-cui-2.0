/// <reference types="react" />
import { MultiValueGenericProps, MultiValueRemoveProps, GroupProps, GroupHeadingProps } from 'react-select';

declare const MultiValueContainer: (props: MultiValueGenericProps<any>) => JSX.Element;
declare const MultiValueLabel: (props: MultiValueGenericProps) => JSX.Element;
declare const MultiValueRemove: ({ innerProps: props, }: MultiValueRemoveProps) => JSX.Element;
declare function Group<Option = unknown, IsMulti extends boolean = boolean>({ className, children, Heading, headingProps, innerProps, ...props }: GroupProps<Option, IsMulti>): JSX.Element;
declare function GroupHeading<Option = unknown, IsMulti extends boolean = boolean>({ className, children }: GroupHeadingProps<Option, IsMulti>): JSX.Element;

export { Group, GroupHeading, MultiValueContainer, MultiValueLabel, MultiValueRemove };
