import type { ReactNode } from "react";

export type Option<V = string> = { label: ReactNode; value: V };
export type OptionGroup<O> = { label: ReactNode; options: O[] };

export function isGrouped<O extends { value: any }>(
  v: O | OptionGroup<O>
): v is OptionGroup<O> {
  return "options" in v;
}

export function findOption<V, O extends { value: V } = Option<V>>(
  value: V,
  options: (O | OptionGroup<O>)[]
): O {
  let found: O;
  for (const it of options) {
    if (isGrouped<O>(it)) found = findOption<V, O>(value, it.options);
    else found = it.value === value ? it : null;

    if (found) return found;
  }
}
