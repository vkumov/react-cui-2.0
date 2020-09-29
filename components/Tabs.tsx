import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";

import { ConditionalWrapper, DisplayIf } from "./Conditional";
import { appendClass as ac } from "../utils";

const tabIdProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
type TabId = number | string;

const firstDefined = (...args) =>
  args.find((el) => typeof el !== "undefined" && el !== null);

interface TabProps {
  id: TabId;
  active?: boolean;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Tab: FC<TabProps> = ({
  active = false,
  className = null,
  children,
}) => (
  <div className={`tab-pane${ac(active, "active")}${ac(className)}`}>
    {children}
  </div>
);

Tab.propTypes = {
  id: tabIdProp.isRequired,
  active: PropTypes.bool,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const tabsChildrenProp = PropTypes.node;

const isActive = (openTab, id: TabId, idx: number) =>
  openTab === null ? idx === 0 : openTab === firstDefined(id, idx);

interface TabsHeaderProps {
  tabsClassName?: string;
  center?: boolean;
  right?: boolean;
  justified?: boolean;
  embossed?: boolean;
  bordered?: boolean;
  vertical?: boolean;
  sticky?: boolean;
  inline?: boolean;
  openTab?: TabId;
  onTabChange: (tab: TabId) => void;
  children: ReactNode;
}

export const TabsHeader: FC<TabsHeaderProps> = ({
  tabsClassName = null,
  center = false,
  right = false,
  justified = false,
  embossed = false,
  bordered = false,
  vertical = false,
  inline = false,
  openTab = null,
  sticky = false,
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
    style={sticky ? { position: "sticky", top: "0" } : {}}
  >
    {React.Children.map(children, (child, idx) => {
      if (!React.isValidElement<TabProps>(child)) return child;

      const {
        props: { id, title },
      } = child;
      return (
        <li
          className={`tab${ac(isActive(openTab, id, idx), "active")}`}
          key={firstDefined(id, idx)}
        >
          <a onClick={() => onTabChange(firstDefined(id, idx))}>{title}</a>
        </li>
      );
    })}
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
  sticky: PropTypes.bool,
  inline: PropTypes.bool,
  openTab: tabIdProp,
  onTabChange: PropTypes.func.isRequired,
  children: tabsChildrenProp.isRequired,
};

interface TabsProps {
  children: ReactNode;
  defaultTab?: TabId;
  tabsClassName?: string;
  contentClassName?: string;
  center?: boolean;
  right?: boolean;
  justified?: boolean;
  embossed?: boolean;
  bordered?: boolean;
  vertical?: boolean;
  sticky?: boolean;
  inline?: boolean;
  renderHeader?: (header: JSX.Element) => JSX.Element;
  renderBody?: (body: JSX.Element) => JSX.Element;
  onTabChange?: (tab: TabId) => void;
}

export const Tabs: FC<TabsProps> = ({
  defaultTab = null,
  tabsClassName = null,
  contentClassName = null,
  center = false,
  right = false,
  justified = false,
  embossed = false,
  bordered = false,
  vertical = false,
  sticky = false,
  inline = false,
  renderHeader = (header) => header,
  renderBody = (body) => body,
  onTabChange = null,
  children,
}) => {
  const [openTab, setOpenTab] = React.useState(defaultTab || null);
  const changeTab = React.useCallback(
    (id) => {
      if (typeof onTabChange === "function") onTabChange(id);
      setOpenTab(id);
    },
    [onTabChange]
  );

  React.useEffect(() => changeTab(defaultTab), [defaultTab, changeTab]);

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
          sticky={sticky}
          inline={inline}
          openTab={openTab}
          onTabChange={changeTab}
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
            React.isValidElement(child)
              ? React.cloneElement(child, {
                  active: isActive(openTab, child.props.id, idx),
                })
              : child
          )}
        </div>
      )}
    </ConditionalWrapper>
  );

  return (
    <ConditionalWrapper
      condition={vertical}
      wrapper={
        <div className="row" style={sticky ? { position: "relative" } : {}} />
      }
    >
      <DisplayIf condition={(vertical && !right) || !vertical}>
        {header}
      </DisplayIf>
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
  sticky: PropTypes.bool,
  inline: PropTypes.bool,
  renderHeader: PropTypes.func,
  renderBody: PropTypes.func,
  onTabChange: PropTypes.func,
};