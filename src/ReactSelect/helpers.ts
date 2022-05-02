import type { ReactNode } from "react";

export type Option = { label: ReactNode; value: string };
export type OptionGroup = { label: ReactNode; options: Option[] };

export const isGrouped = (v: Option | OptionGroup): v is OptionGroup => {
  return "options" in v;
};

export const findOption = (
  value: any,
  options: (Option | OptionGroup)[]
): Option => {
  let found: Option;
  for (const it of options) {
    if (isGrouped(it)) found = findOption(value, it.options);
    else found = it.value === value ? it : null;

    if (found) return found;
  }
};
