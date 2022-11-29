import type { ReactNode } from "react";
export type Option<V = string> = {
    label: ReactNode;
    value: V;
};
export type OptionGroup<O> = {
    label: ReactNode;
    options: O[];
};
export declare function isGrouped<O extends {
    value: any;
}>(v: O | OptionGroup<O>): v is OptionGroup<O>;
export declare function findOption<V, O extends {
    value: V;
} = Option<V>>(value: V, options: (O | OptionGroup<O>)[]): O;
