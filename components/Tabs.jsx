import React from "react";
import PropTypes from "prop-types";

import { ConditionalWrapper, DisplayIf } from "./Conditional";
import { appendClass as ac } from "../utils";

const tabIdProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const firstDefined = (...args) =>
  args.find((el) => typeof el !== "undefined" && el !== null);

export const Tab = ({ children, active }) => (
  <div className={`tab-pane${active ? " active" : ""}`}>{children}</div>
);

Tab.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: tabIdProp.isRequired,
  active: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

Tab.defaultProps = { active: false };

const tabsChildrenProp = PropTypes.oneOfType([PropTypes.arrayOf(Tab), Tab]);

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
  inline,
  openTab,
  onTabChange,
  children,
}) => (
  <ul
    className={`tabs${ac(tabsClassName)}${ac(center, "tabs--centered")}${ac(
      right,
      "tabs--right"
    )}${ac(justified, "tabs--justified")}${ac(embossed, "tabs--embossed")}${ac(
      bordered,
      "tabs--bordered"
    )}${ac(vertical, "tabs--vertical")}${ac(inline, "tabs--inline")}`}
  >
    {React.Children.map(children, ({ props: { id, title } }, idx) => (
      <li
        className={`tab${ac(isActive(openTab, id, idx), "active")}`}
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
  inline: PropTypes.bool,
  openTab: tabIdProp,
  onTabChange: PropTypes.func.isRequired,
  children: tabsChildrenProp.isRequired,
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
  vertical,
  inline,
  renderHeader,
  renderBody,
}) => {
  const [openTab, setOpenTab] = React.useState(defaultTab || null);

  const header = (
    <ConditionalWrapper
      condition={vertical}
      wrapper={<div className="col-md-3" />}
    >
      {renderHeader(
        <TabsHeader
          tabsClassName={tabsClassName}
          center={center}
          right={right}
          justified={justified}
          embossed={embossed}
          bordered={bordered}
          vertical={vertical}
          inline={inline}
          openTab={openTab}
          onTabChange={(id) => setOpenTab(id)}
        >
          {children}
        </TabsHeader>
      )}
    </ConditionalWrapper>
  );

  const body = (
    <ConditionalWrapper
      condition={vertical}
      wrapper={<div className="col-md-9" />}
    >
      {renderBody(
        <div
          className={`tab-content${
            contentClassName ? ` ${contentClassName}` : ""
          }`}
        >
          {React.Children.map(children, (child, idx) =>
            React.cloneElement(child, {
              active: isActive(openTab, child.props.id, idx),
            })
          )}
        </div>
      )}
    </ConditionalWrapper>
  );

  return (
    <ConditionalWrapper condition={vertical} wrapper={<div className="row" />}>
      <DisplayIf condition={vertical && !right}>{header}</DisplayIf>
      {body}
      <DisplayIf condition={vertical && right}>{header}</DisplayIf>
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
  vertical: PropTypes.bool,
  inline: PropTypes.bool,
  renderHeader: PropTypes.func,
  renderBody: PropTypes.func,
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
  inline: false,
  renderHeader: (header) => header,
  renderBody: (body) => body,
};
