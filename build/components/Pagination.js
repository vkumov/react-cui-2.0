import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';

const PaginationContext = React.createContext({});

const Button = ({
  active,
  content,
  disabled,
  position
}) => React.createElement(PaginationContext.Consumer, null, ({
  changePage
}) => React.createElement("li", {
  className: active ? "active" : ""
}, React.createElement("a", {
  className: disabled ? "disabled" : "",
  onClick: e => changePage(e, position)
}, content)));

Button.propTypes = {
  active: PropTypes.bool,
  content: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  position: PropTypes.number.isRequired
};
Button.defaultProps = {
  active: false,
  disabled: false
};

const FirstPrev = () => {
  const {
    perPage,
    firstAndLast,
    position,
    icons,
    prev,
    beginAt
  } = React.useContext(PaginationContext);
  const disabled = position < perPage + beginAt;
  const r = [];
  if (icons && firstAndLast) r.push(React.createElement(Button, {
    content: React.createElement("span", {
      className: "icon-chevron-left-double"
    }),
    disabled: disabled,
    key: "first-page",
    position: beginAt
  }));
  r.push(React.createElement(Button, {
    content: icons ? React.createElement("span", {
      className: "icon-chevron-left"
    }) : prev,
    disabled: disabled,
    key: "previous-page",
    position: position - perPage
  }));
  return r;
};

const NextLast = () => {
  const {
    beginAt,
    perPage,
    total,
    firstAndLast,
    position,
    icons,
    next
  } = React.useContext(PaginationContext);
  const pages = Math.floor(total / perPage) + 1;
  const disabled = position > total - perPage + beginAt;
  const r = [];
  r.push(React.createElement(Button, {
    content: icons ? React.createElement("span", {
      className: "icon-chevron-right"
    }) : next,
    disabled: disabled,
    key: "next-page",
    position: position + perPage
  }));
  if (icons && firstAndLast) r.push(React.createElement(Button, {
    content: React.createElement("span", {
      className: "icon-chevron-right-double"
    }),
    disabled: disabled,
    key: "last-page",
    position: (pages - 1) * perPage + beginAt
  }));
  return r;
};

const Pages = ({
  start,
  finish
}) => React.createElement(PaginationContext.Consumer, null, ({
  perPage,
  active,
  beginAt
}) => [...Array(finish - start + 1)].map((v, i) => {
  const current = start + i;
  return React.createElement(Button, {
    active: active === current,
    content: `${current}`,
    key: `${current}-page`,
    position: (current - 1) * perPage + beginAt
  });
}));

Pages.propTypes = {
  start: PropTypes.number.isRequired,
  finish: PropTypes.number.isRequired
};

const Pagination = (_ref) => {
  let {
    size,
    rounded,
    icons,
    next,
    prev,
    position,
    perPage,
    total,
    onPageChange,
    className,
    firstAndLast,
    beginAt
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["size", "rounded", "icons", "next", "prev", "position", "perPage", "total", "onPageChange", "className", "firstAndLast", "beginAt"]);

  const pages = Math.ceil(total / perPage);
  const active = Math.floor(position / perPage) + 1;

  const changePage = (e, newPosition) => {
    if (typeof onPageChange === "function") onPageChange(e, newPosition);
  };

  return React.createElement(PaginationContext.Provider, {
    value: {
      active,
      beginAt,
      changePage,
      firstAndLast,
      icons,
      next,
      perPage,
      position,
      prev,
      total
    }
  }, React.createElement("ul", _extends({
    className: `pagination${size !== "default" ? ` pagination--${size}` : ""}${rounded ? " pagination--rounded" : ""}${className ? ` ${className}` : ""}`
  }, rest), React.createElement(FirstPrev, null), active < 4 || pages === 4 ? React.createElement(React.Fragment, null, React.createElement(Pages, {
    start: 1,
    finish: Math.min(pages, 4)
  }), pages > 4 ? React.createElement(React.Fragment, null, React.createElement("li", null, React.createElement("span", {
    className: "icon-more"
  })), React.createElement(Button, {
    content: pages,
    key: `${pages}-page`,
    position: (pages - 1) * perPage + beginAt
  })) : null) : React.createElement(React.Fragment, null, React.createElement(Button, {
    active: active === beginAt,
    content: "1",
    key: "1-page",
    position: beginAt
  }), React.createElement("li", null, React.createElement("span", {
    className: "icon-more"
  })), active < pages - 2 ? React.createElement(React.Fragment, null, React.createElement(Pages, {
    start: active - 1,
    finish: active + 1
  }), React.createElement("li", null, React.createElement("span", {
    className: "icon-more"
  })), React.createElement(Button, {
    active: active === pages,
    content: pages,
    key: `${pages}-page`,
    position: (pages - 1) * perPage + beginAt
  })) : React.createElement(Pages, {
    start: pages - 3,
    finish: pages
  })), React.createElement(NextLast, null)));
};

Pagination.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  rounded: PropTypes.bool,
  icons: PropTypes.bool,
  next: PropTypes.node,
  prev: PropTypes.node,
  position: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  total: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  firstAndLast: PropTypes.bool,
  beginAt: PropTypes.number,
  className: PropTypes.string
};
Pagination.defaultProps = {
  beginAt: 1,
  rounded: false,
  firstAndLast: true,
  icons: false,
  next: "Next",
  perPage: 1,
  prev: "Previous",
  size: "default",
  className: null
};

export { Pagination };
