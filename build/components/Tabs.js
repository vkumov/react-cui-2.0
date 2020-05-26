import React from 'react';
import PropTypes from 'prop-types';
import { a as appendClass } from '../index-be24eb93.js';
import { ConditionalWrapper, DisplayIf } from './Conditional.js';

/* eslint-disable jsx-a11y/click-events-have-key-events */
const tabIdProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const firstDefined = (...args) => args.find(el => typeof el !== "undefined" && el !== null);

const Tab = ({
  children,
  active
}) => React.createElement("div", {
  className: `tab-pane${active ? " active" : ""}`
}, children);
Tab.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: tabIdProp.isRequired,
  active: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};
Tab.defaultProps = {
  active: false
};
const tabsChildrenProp = PropTypes.oneOfType([PropTypes.arrayOf(Tab), Tab]);

const isActive = (openTab, id, idx) => openTab === null ? idx === 0 : openTab === firstDefined(id, idx);

const TabsHeader = ({
  tabsClassName,
  center,
  right,
  justified,
  embossed,
  bordered,
  vertical,
  sticky,
  inline,
  openTab,
  onTabChange,
  children
}) => React.createElement("ul", {
  className: `tabs${appendClass(tabsClassName)}${appendClass(center, "tabs--centered")}${appendClass(right, "tabs--right")}${appendClass(justified, "tabs--justified")}${appendClass(embossed, "tabs--embossed")}${appendClass(bordered, "tabs--bordered")}${appendClass(vertical, "tabs--vertical")}${appendClass(inline, "tabs--inline")}`,
  style: sticky ? {
    position: "sticky",
    top: "0"
  } : {}
}, React.Children.map(children, ({
  props: {
    id,
    title
  }
}, idx) => React.createElement("li", {
  className: `tab${appendClass(isActive(openTab, id, idx), "active")}`,
  key: firstDefined(id, idx)
}, React.createElement("a", {
  onClick: () => onTabChange(firstDefined(id, idx))
}, title))));
TabsHeader.propTypes = {
  tabsClassName: PropTypes.string,
  center: PropTypes.bool,
  right: PropTypes.bool,
  justified: PropTypes.bool,
  embossed: PropTypes.bool,
  bordered: PropTypes.bool,
  vertical: PropTypes.bool,
  sticky: PropTypes.bool,
  inline: PropTypes.bool,
  openTab: tabIdProp,
  onTabChange: PropTypes.func.isRequired,
  children: tabsChildrenProp.isRequired
};
TabsHeader.defaultProps = {
  tabsClassName: PropTypes.string,
  center: false,
  right: false,
  justified: false,
  embossed: false,
  bordered: false,
  vertical: false,
  inline: false,
  openTab: null,
  sticky: false
};
const Tabs = ({
  children,
  defaultTab,
  tabsClassName,
  contentClassName,
  center,
  right,
  justified,
  embossed,
  bordered,
  vertical,
  sticky,
  inline,
  renderHeader,
  renderBody,
  onTabChange
}) => {
  const [openTab, setOpenTab] = React.useState(defaultTab || null);
  const changeTab = React.useCallback(id => {
    if (typeof onTabChange === "function") onTabChange(id);
    setOpenTab(id);
  }, [onTabChange]);
  const header = React.createElement(ConditionalWrapper, {
    condition: vertical,
    wrapper: React.createElement("div", {
      className: "col-md-3"
    })
  }, renderHeader(React.createElement(TabsHeader, {
    tabsClassName: tabsClassName,
    center: center,
    right: right,
    justified: justified,
    embossed: embossed,
    bordered: bordered,
    vertical: vertical,
    sticky: sticky,
    inline: inline,
    openTab: openTab,
    onTabChange: changeTab
  }, children)));
  const body = React.createElement(ConditionalWrapper, {
    condition: vertical,
    wrapper: React.createElement("div", {
      className: "col-md-9"
    })
  }, renderBody(React.createElement("div", {
    className: `tab-content${contentClassName ? ` ${contentClassName}` : ""}`
  }, React.Children.map(children, (child, idx) => React.cloneElement(child, {
    active: isActive(openTab, child.props.id, idx)
  })))));
  return React.createElement(ConditionalWrapper, {
    condition: vertical,
    wrapper: React.createElement("div", {
      className: "row",
      style: sticky ? {
        position: "relative"
      } : {}
    })
  }, React.createElement(DisplayIf, {
    condition: vertical && !right
  }, header), body, React.createElement(DisplayIf, {
    condition: vertical && right
  }, header));
};
Tabs.propTypes = {
  children: tabsChildrenProp.isRequired,
  defaultTab: tabIdProp,
  tabsClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  center: PropTypes.bool,
  right: PropTypes.bool,
  justified: PropTypes.bool,
  embossed: PropTypes.bool,
  bordered: PropTypes.bool,
  vertical: PropTypes.bool,
  sticky: PropTypes.bool,
  inline: PropTypes.bool,
  renderHeader: PropTypes.func,
  renderBody: PropTypes.func,
  onTabChange: PropTypes.func
};
Tabs.defaultProps = {
  defaultTab: null,
  tabsClassName: null,
  contentClassName: null,
  center: false,
  right: false,
  justified: false,
  embossed: false,
  bordered: false,
  vertical: false,
  sticky: false,
  inline: false,
  renderHeader: header => header,
  renderBody: body => body,
  onTabChange: null
};

export { Tab, Tabs, TabsHeader };
