import React, { FC, ReactNode, useEffect, useState } from "react";

import { ConditionalWrapper } from "src/Conditional";
import { Dropdown } from "src/Dropdown";
import { appendClass as ac } from "src/utils";

export type Variant = {
  variant: string;
  display: string;
  component: ReactNode;
  selected?: boolean;
};

export type VariantSelectorProps = {
  variants: Variant[];
  name?: string;
  title?: ReactNode;
  inline?: boolean;
  onChange?: (value: Variant) => void;
  disableable?: boolean;
  enableTitleAppend?: string;
  className?: string;
  list?: boolean;
  variant?: string;
};

type HeaderProps = {
  variants: Variant[];
  selectedIdx: number;
  setIdx: (idx: number) => void;
  placeholder?: string;
};

const DropdownHeader: FC<HeaderProps> = ({
  variants,
  selectedIdx,
  setIdx,
  placeholder = "Select",
}) => (
  <Dropdown
    label={
      <a className="flex-center-vertical">
        {variants[selectedIdx]?.display || placeholder}
      </a>
    }
    alwaysClose
  >
    {variants.map((v, idx) => (
      <a
        key={v.variant}
        onClick={() => setIdx(idx)}
        className={
          variants[selectedIdx]?.variant === v.variant ? "selected" : ""
        }
      >
        {v.display}
      </a>
    ))}
  </Dropdown>
);

const ListHeader: FC<HeaderProps> = ({ variants, selectedIdx, setIdx }) => (
  <ul className="list list--inline divider--vertical">
    {variants.map((v, idx) => (
      <li key={v.variant}>
        <ConditionalWrapper
          condition={variants[selectedIdx]?.variant !== v.variant}
          wrapper={<a key={v.variant} onClick={() => setIdx(idx)} />}
        >
          {v.display}
        </ConditionalWrapper>
      </li>
    ))}
  </ul>
);

export const VariantSelector: FC<VariantSelectorProps> = ({
  disableable = false,
  title = null,
  inline = false,
  onChange = null,
  enableTitleAppend = null,
  className = null,
  list = false,
  variant = null,
  variants,
  name = "",
}) => {
  const [variantIdx, setIdx] = useState(() => {
    const idx = variants.findIndex((v) => v.selected || v.variant === variant);
    return !disableable && idx < 0 ? 0 : idx;
  });

  useEffect(() => {
    const idx = variants.findIndex((v) => v.variant === variant);
    setIdx((curr) => (idx < 0 || idx === curr ? curr : idx));
  }, [variant, variants]);

  useEffect(() => {
    if (variantIdx >= 0 && typeof onChange === "function")
      onChange(variants[variantIdx]);
  }, [variantIdx]);

  const dd = (el, t) =>
    React.createElement(
      el,
      { className: "secondary-tabs" },
      t ? <span className="half-margin-right">{t}</span> : null,
      list ? (
        <ListHeader
          variants={variants}
          selectedIdx={variantIdx}
          setIdx={setIdx}
        />
      ) : (
        <DropdownHeader
          variants={variants}
          selectedIdx={variantIdx}
          setIdx={setIdx}
        />
      )
    );

  return (
    <div
      className={`form-group${ac(inline, " inline-variants")}${ac(className)}`}
    >
      {disableable ? (
        <span className="flex-center-vertical">
          <label className="switch" htmlFor={`${name}.disableable`}>
            <input
              type="checkbox"
              onChange={() => setIdx((p) => (p >= 0 ? -1 : 0))}
              checked={variantIdx >= 0}
              id={`${name}.disableable`}
            />
            <span className="switch__input" />
            <span className="switch__label">{title}</span>
          </label>
          {variantIdx >= 0 ? dd("span", enableTitleAppend) : null}
        </span>
      ) : (
        dd("div", title)
      )}
      {disableable && variantIdx < 0 ? null : (
        <div className="tabs-wrap panel base-padding-top">
          {variants[variantIdx].component}
        </div>
      )}
    </div>
  );
};
