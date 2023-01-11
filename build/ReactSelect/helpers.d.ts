import { ReactNode } from 'react';

type Option<V = string> = {
    label: ReactNode;
    value: V;
};
type OptionGroup<O> = {
    label: ReactNode;
    options: O[];
};
declare function isGrouped<O extends {
    value: any;
}>(v: O | OptionGroup<O>): v is OptionGroup<O>;
declare function findOption<V, O extends {
    value: V;
} = Option<V>>(value: V, options: (O | OptionGroup<O>)[]): O;

export { Option, OptionGroup, findOption, isGrouped };
