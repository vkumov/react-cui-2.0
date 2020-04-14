/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

import { useFormikContext, getIn } from "formik";
import { Dropdown } from "./Dropdown";
import { appendClass as ac } from "../utils";

const VariantSelector = ({
  variants,
  varPrefix,
  title,
  inline,
  onChange,
  disableable,
  enableTitleAppend,
  className,
}) => {
  const { values, setFieldValue, unregisterField } = useFormikContext();
  const variant = React.useMemo(
    () => getIn(values, `${varPrefix}.variant`, undefined),
    [values, varPrefix]
  );
  const [curIdx, setIdx] = React.useState(() => {
    const idx = variants.findIndex((v) => v.selected || v.variant === variant);
    return !disableable && idx < 0 ? 0 : idx;
  });

  React.useEffect(() => {
    const idx = variants.findIndex((v) => v.variant === variant);
    if (idx < 0 || idx === curIdx) return;
    setIdx(idx);
  }, [variant, variants, curIdx]);

  React.useEffect(() => {
    if (curIdx >= 0) {
      setFieldValue(`${varPrefix}.variant`, variants[curIdx].variant);
      if (onChange) onChange(variants[curIdx]);
    } else {
      setFieldValue(varPrefix, undefined);
      unregisterField(varPrefix);
    }
  }, [curIdx]);

  const dd = (el, t) =>
    React.createElement(
      el,
      { className: "secondary-tabs" },
      t ? <span className="half-margin-right">{t}</span> : null,
      <Dropdown
        type="link"
        tail
        header={variants[curIdx].display}
        alwaysClose
        className="flex-center-vertical"
        stopPropagation
      >
        {variants.map((v, idx) => (
          <a
            key={v.variant}
            onClick={() => setIdx(idx)}
            className={variants[curIdx].variant === v.variant ? "selected" : ""}
          >
            {v.display}
          </a>
        ))}
      </Dropdown>
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
              checked={curIdx >= 0}
              id={`${varPrefix}.disableable`}
            />
            <span className="switch__input" />
            <span className="switch__label">{title}</span>
          </label>
          {curIdx >= 0 ? dd("span", enableTitleAppend) : null}
        </span>
      ) : (
        dd("div", title)
      )}
      {disableable && curIdx < 0 ? null : (
        <div className="tabs-wrap panel">{variants[curIdx].component}</div>
      )}
    </div>
  );
};

VariantSelector.propTypes = {
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.string,
      display: PropTypes.string,
      component: PropTypes.node,
    })
  ).isRequired,
  varPrefix: PropTypes.string.isRequired,
  title: PropTypes.node,
  inline: PropTypes.bool,
  onChange: PropTypes.func,
  disableable: PropTypes.bool,
  enableTitleAppend: PropTypes.string,
  className: PropTypes.string,
};

VariantSelector.defaultProps = {
  disableable: false,
  title: null,
  inline: false,
  onChange: null,
  enableTitleAppend: null,
  className: null,
};

export { VariantSelector };
