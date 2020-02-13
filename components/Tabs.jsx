import React from "react";
import PropTypes from "prop-types";

import { ConditionalWrapper } from "./ConditionalWrapper";

const tabIdProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const firstDefined = (...args) =>
  args.find(el => typeof el !== "undefined" && el !== null);

export const Tab = ({ children, active }) => (
  <div className={`tab-pane${active ? " active" : ""}`}>{children}</div>
);

Tab.propTypes = {
  id: tabIdProp.isRequired,
  active: PropTypes.bool.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

Tab.defaultProps = {};

const tabsChildrenProp = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.instanceOf(Tab)),
  PropTypes.instanceOf(Tab)
]);

const isActive = (openTab, id, idx) =>
  openTab === null ? idx === 0 : openTab === firstDefined(id, idx);

export const TabsHeader = ({
  tabsClassName,
  center,
  right,
  justified,
  embossed,
  bordered,
  vertical,
  openTab,
  onTabChange,
  children
}) => (
  <ul
    className={`tabs${tabsClassName ? ` ${tabsClassName}` : ""}${
      center ? " tabs--centered" : ""
    }${right ? " tabs--right" : ""}${justified ? " tabs--justified" : ""}${
      embossed ? " tabs--embossed" : ""
    }${bordered ? " tabs--bordered" : ""}${vertical ? " tabs--vertical" : ""}`}
  >
    {React.Children.map(children, ({ props: { id, title } }, idx) => (
      <li
        className={`tab${isActive(openTab, id, idx) ? " active" : ""}`}
        key={firstDefined(id, idx)}
      >
        <a onClick={() => onTabChange(firstDefined(id, idx))}>{title}</a>
      </li>
    ))}
  </ul>
);

TabsHeader.propTypes = {
  tabsClassName: PropTypes.string,
  center: PropTypes.bool,
  right: PropTypes.bool,
  justified: PropTypes.bool,
  embossed: PropTypes.bool,
  bordered: PropTypes.bool,
  vertical: PropTypes.bool,
  openTab: tabIdProp.isRequired,
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
  vertical: false
};

export const Tabs = ({
  children,
  defaultTab,
  tabsClassName,
  contentClassName,
  center,
  right,
  justified,
  embossed,
  bordered,
  vertical
}) => {
  const [openTab, setOpenTab] = React.useState(defaultTab || null);

  const header = (
    <ConditionalWrapper
      condition={vertical}
      wrapper={<div className="col-md-3" />}
    >
      <TabsHeader
        tabsClassName={tabsClassName}
        center={center}
        right={right}
        justified={justified}
        embossed={embossed}
        bordered={bordered}
        vertical={vertical}
        openTab={openTab}
        onTabChange={id => setOpenTab(id)}
      >
        {children}
      </TabsHeader>
    </ConditionalWrapper>
  );

  const body = (
    <ConditionalWrapper
      condition={vertical}
      wrapper={<div className="col-md-9" />}
    >
      <div
        className={`tab-content${
          contentClassName ? ` ${contentClassName}` : ""
        }`}
      >
        {React.Children.map(children, (child, idx) =>
          React.cloneElement(child, {
            active: isActive(openTab, child.props.id, idx)
          })
        )}
      </div>
    </ConditionalWrapper>
  );

  return (
    <ConditionalWrapper condition={vertical} wrapper={<div className="row" />}>
      {!right && !vertical ? header : null}
      {body}
      {right && vertical ? header : null}
    </ConditionalWrapper>
  );
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
  vertical: PropTypes.bool
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
  vertical: false
};
