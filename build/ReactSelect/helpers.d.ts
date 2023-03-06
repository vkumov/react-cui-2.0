import { ReactNode } from 'react';
import { GroupBase, OptionsOrGroups } from 'react-select';

type Option<V = string> = {
    label?: ReactNode;
    value: V;
};
type OptionGroup<O> = GroupBase<O>;
declare function isGrouped<O extends {
    value: any;
}>(v: O | OptionGroup<O>): v is OptionGroup<O>;
declare function findOption<V, O extends {
    value: V;
} = Option<V>>(value: V, options: readonly (O | OptionGroup<O>)[]): O;
declare function findOptions<V, O extends {
    value: V;
} = Option<V>>(values: V[], options: OptionsOrGroups<O, GroupBase<O>>): O[];

export { Option, OptionGroup, findOption, findOptions, isGrouped };
