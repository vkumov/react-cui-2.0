import type { ReactNode } from "react";
import type { GroupBase, OptionsOrGroups } from "react-select";

export type Option<V = string> = { label?: ReactNode; value: V };
export type OptionGroup<O> = { label?: ReactNode; options: readonly O[] };

export function isGrouped<O extends { value: any }>(
  v: O | OptionGroup<O>
): v is OptionGroup<O> {
  return "options" in v;
}

export function findOption<V, O extends { value: V } = Option<V>>(
  value: V,
  options: readonly (O | OptionGroup<O>)[]
): O {
  let found: O;
  for (const it of options) {
    if (isGrouped<O>(it)) found = findOption<V, O>(value, it.options);
    else found = it.value === value ? it : null;

    if (found) return found;
  }
}

export function findOptions<V, O extends { value: V } = Option<V>>(
  values: V[],
  options: OptionsOrGroups<O, GroupBase<O>>
): O[] {
  const found: O[] = [];

  if (!Array.isArray(values) || values.length <= 0) return found;

  for (const v of values) {
    const fv = findOption(v, options);
    if (fv) found.push(fv);
    else found.push({ value: v, label: v } as any);
  }
  return found;
}
