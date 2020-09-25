import React, { ReactNode, FC } from "react";
import PropTypes from "prop-types";

import { useFormikContext, getIn } from "formik";
import { Dropdown } from "./Dropdown";
import { ConditionalWrapper } from "./Conditional";
import { appendClass as ac } from "../utils";

const DropdownHeader = ({ variants, selectedIdx, setIdx }) => (
  <Dropdown
    type="link"
    header={variants[selectedIdx].display}
    alwaysClose
    className="flex-center-vertical"
    stopPropagation
  >
    {variants.map((v, idx) => (
      <a
        key={v.variant}
        onClick={() => setIdx(idx)}
        className={
          variants[selectedIdx].variant === v.variant ? "selected" : ""
        }
      >
        {v.display}
      </a>
    ))}
  </Dropdown>
);

DropdownHeader.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedIdx: PropTypes.number.isRequired,
  setIdx: PropTypes.func.isRequired,
};

const ListHeader = ({ variants, selectedIdx, setIdx }) => (
  <ul className="list list--inline divider--vertical">
    {variants.map((v, idx) => (
      <li key={v.variant}>
        <ConditionalWrapper
          condition={variants[selectedIdx].variant !== v.variant}
          wrapper={<a key={v.variant} onClick={() => setIdx(idx)} />}
        >
          {v.display}
        </ConditionalWrapper>
      </li>
    ))}
  </ul>
);

ListHeader.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedIdx: PropTypes.number.isRequired,
  setIdx: PropTypes.func.isRequired,
};

interface Variant {
  variant: string;
  display: string;
  component: ReactNode;
  selected?: boolean;
}

type VariantSelectorProps = {
  variants: Variant[];
  varPrefix: string;
  title?: ReactNode;
  inline?: boolean;
  onChange?: (value: Variant) => void;
  disableable?: boolean;
  enableTitleAppend?: string;
  className?: string;
  list?: boolean;
};

const VariantSelector: FC<VariantSelectorProps> = ({
  disableable = false,
  title = null,
  inline = false,
  onChange = null,
  enableTitleAppend = null,
  className = null,
  list = false,
  variants,
  varPrefix,
}) => {
  const { values, setFieldValue, unregisterField } = useFormikContext();
  const variant = React.useMemo(
    () => getIn(values, `${varPrefix}.variant`, undefined),
    [values, varPrefix]
  );
  const [variantIdx, setIdx] = React.useState(() => {
    const idx = variants.findIndex((v) => v.selected || v.variant === variant);
    return !disableable && idx < 0 ? 0 : idx;
  });

  React.useEffect(() => {
    const idx = variants.findIndex((v) => v.variant === variant);
    setIdx((curr) => (idx < 0 || idx === curr ? curr : idx));
  }, [variant, variants]);

  React.useEffect(() => {
    if (variantIdx >= 0) {
      setFieldValue(`${varPrefix}.variant`, variants[variantIdx].variant);
      if (onChange) onChange(variants[variantIdx]);
    } else {
      setFieldValue(varPrefix, undefined);
      unregisterField(varPrefix);
    }
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
          <label className="switch" htmlFor={`${varPrefix}.disableable`}>
            <input
              type="checkbox"
              onChange={() => setIdx((p) => (p >= 0 ? -1 : 0))}
              checked={variantIdx >= 0}
              id={`${varPrefix}.disableable`}
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

VariantSelector.propTypes = {
  variants: PropTypes.arrayOf(
    PropTypes.exact({
      variant: PropTypes.string,
      display: PropTypes.string,
      component: PropTypes.node,
      selected: PropTypes.bool,
    })
  ).isRequired,
  varPrefix: PropTypes.string.isRequired,
  title: PropTypes.node,
  inline: PropTypes.bool,
  onChange: PropTypes.func,
  disableable: PropTypes.bool,
  enableTitleAppend: PropTypes.string,
  className: PropTypes.string,
  list: PropTypes.bool,
};

export { VariantSelector };
