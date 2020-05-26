import React from 'react';
import PropTypes from 'prop-types';
import '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { useFormikContext, getIn } from 'formik';
import { ConditionalWrapper } from './Conditional.js';
import { Dropdown } from './Dropdown.js';

/* eslint-disable jsx-a11y/click-events-have-key-events */

const DropdownHeader = ({
  variants,
  selectedIdx,
  setIdx
}) => React.createElement(Dropdown, {
  type: "link",
  tail: true,
  header: variants[selectedIdx].display,
  alwaysClose: true,
  className: "flex-center-vertical",
  stopPropagation: true
}, variants.map((v, idx) => React.createElement("a", {
  key: v.variant,
  onClick: () => setIdx(idx),
  className: variants[selectedIdx].variant === v.variant ? "selected" : ""
}, v.display)));

DropdownHeader.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedIdx: PropTypes.number.isRequired,
  setIdx: PropTypes.func.isRequired
};

const ListHeader = ({
  variants,
  selectedIdx,
  setIdx
}) => React.createElement("ul", {
  className: "list list--inline divider--vertical"
}, variants.map((v, idx) => React.createElement("li", {
  key: v.variant
}, React.createElement(ConditionalWrapper, {
  condition: variants[selectedIdx].variant !== v.variant,
  wrapper: React.createElement("a", {
    key: v.variant,
    onClick: () => setIdx(idx)
  })
}, v.display))));

ListHeader.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.any).isRequired,
  selectedIdx: PropTypes.number.isRequired,
  setIdx: PropTypes.func.isRequired
};

const VariantSelector = ({
  variants,
  varPrefix,
  title,
  inline,
  onChange,
  disableable,
  enableTitleAppend,
  className,
  list
}) => {
  const {
    values,
    setFieldValue,
    unregisterField
  } = useFormikContext();
  const variant = React.useMemo(() => getIn(values, `${varPrefix}.variant`, undefined), [values, varPrefix]);
  const [variantIdx, setIdx] = React.useState(() => {
    const idx = variants.findIndex(v => v.selected || v.variant === variant);
    return !disableable && idx < 0 ? 0 : idx;
  });
  React.useEffect(() => {
    const idx = variants.findIndex(v => v.variant === variant);
    setIdx(curr => idx < 0 || idx === curr ? curr : idx);
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

  const dd = (el, t) => React.createElement(el, {
    className: "secondary-tabs"
  }, t ? React.createElement("span", {
    className: "half-margin-right"
  }, t) : null, list ? React.createElement(ListHeader, {
    variants: variants,
    selectedIdx: variantIdx,
    setIdx: setIdx
  }) : React.createElement(DropdownHeader, {
    variants: variants,
    selectedIdx: variantIdx,
    setIdx: setIdx
  }));

  return React.createElement("div", {
    className: `form-group${appendClass(inline, " inline-variants")}${appendClass(className)}`
  }, disableable ? React.createElement("span", {
    className: "flex-center-vertical"
  }, React.createElement("label", {
    className: "switch",
    htmlFor: `${varPrefix}.disableable`
  }, React.createElement("input", {
    type: "checkbox",
    onChange: () => setIdx(p => p >= 0 ? -1 : 0),
    checked: variantIdx >= 0,
    id: `${varPrefix}.disableable`
  }), React.createElement("span", {
    className: "switch__input"
  }), React.createElement("span", {
    className: "switch__label"
  }, title)), variantIdx >= 0 ? dd("span", enableTitleAppend) : null) : dd("div", title), disableable && variantIdx < 0 ? null : React.createElement("div", {
    className: "tabs-wrap panel base-padding-top"
  }, variants[variantIdx].component));
};

VariantSelector.propTypes = {
  variants: PropTypes.arrayOf(PropTypes.shape({
    variant: PropTypes.string,
    display: PropTypes.string,
    component: PropTypes.node
  })).isRequired,
  varPrefix: PropTypes.string.isRequired,
  title: PropTypes.node,
  inline: PropTypes.bool,
  onChange: PropTypes.func,
  disableable: PropTypes.bool,
  enableTitleAppend: PropTypes.string,
  className: PropTypes.string,
  list: PropTypes.bool
};
VariantSelector.defaultProps = {
  disableable: false,
  title: null,
  inline: false,
  onChange: null,
  enableTitleAppend: null,
  className: null,
  list: false
};

export { VariantSelector };
