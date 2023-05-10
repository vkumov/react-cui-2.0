import React, {
  forwardRef,
  type FC,
  type HTMLProps,
  type MutableRefObject,
  type ReactNode,
} from "react";
import cx from "classnames";

import { ConditionalWrapper, DisplayIf } from "src/Conditional";
import { usePrevious } from "src/hooks/usePrevious";

type TabId = number | string;

const firstDefined = (...args) =>
  args.find((el) => typeof el !== "undefined" && el !== null);

interface TabProps {
  id: TabId;
  active?: boolean;
  title: ReactNode;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  unmountInactive?: boolean;
}

export const Tab: FC<TabProps> = ({
  active = false,
  className = null,
  activeClassName = null,
  unmountInactive = false,
  children,
}) => {
  if (!active && unmountInactive) return null;
  return (
    <div
      className={cx(
        "tab-pane",
        {
          active,
          [activeClassName]: activeClassName && active,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

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

export const TabsHeader = forwardRef<HTMLUListElement, TabsHeaderProps>(
  (
    {
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
    },
    ref
  ) => (
    <ul
      ref={ref}
      className={cx("tabs", tabsClassName, {
        "tabs--centered": center,
        "tabs--right": right,
        "tabs--embossed": embossed,
        "tabs--justified": justified,
        "tabs--bordered": bordered,
        "tabs--vertical": vertical,
        "tabs--inline": inline,
      })}
      style={sticky ? { position: "sticky", top: "0" } : {}}
    >
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement<TabProps>(child)) return child;

        const {
          props: { id, title },
        } = child;
        return (
          <li
            className={cx("tab", {
              active: isActive(openTab, id, idx),
            })}
            key={firstDefined(id, idx)}
          >
            <a onClick={() => onTabChange(firstDefined(id, idx))}>{title}</a>
          </li>
        );
      })}
    </ul>
  )
);

TabsHeader.displayName = "TabsHeader";

interface ColumnSizes {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

type ColumnSize = number | string | ColumnSizes;

type Column = {
  columnWidth?: ColumnSize;
} & React.HTMLProps<HTMLDivElement>;

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
  leftColumn?: Column;
  rightColumn?: Column;
  rowProps?: HTMLProps<HTMLDivElement>;
  sticky?: boolean;
  inline?: boolean;
  renderHeader?: (header: JSX.Element) => JSX.Element;
  renderBody?: (body: JSX.Element, tab: TabId) => JSX.Element;
  onTabChange?: (tab: TabId) => void;
  beforeTabChange?: (
    oldTab: TabId,
    newTab: TabId
  ) => boolean | Promise<boolean>;
  bodyRef?: MutableRefObject<HTMLDivElement>;
  headerRef?: MutableRefObject<HTMLUListElement>;
}

const composeColumnSize = (columnWidth: ColumnSize): string => {
  if (typeof columnWidth === "string" || typeof columnWidth === "number")
    return `col-${columnWidth}`;

  return Object.keys(columnWidth)
    .map((k) => `col-${k}-${columnWidth[k]}`)
    .join(" ");
};

const ColumnWrap: FC<Column> = ({ columnWidth, className, ...props }) => (
  <div className={cx(composeColumnSize(columnWidth), className)} {...props} />
);

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
  leftColumn = { columnWidth: 3 },
  rightColumn = { columnWidth: 9 },
  rowProps: { className: rowClassName, ...rowProps } = {},
  beforeTabChange = null,
  children,
  bodyRef,
  headerRef,
}) => {
  const [openTab, setOpenTab] = React.useState(defaultTab || null);
  const prevTab = usePrevious(openTab);

  React.useEffect(() => {
    setOpenTab(defaultTab);
  }, [defaultTab]);

  React.useEffect(() => {
    (async () => {
      if (openTab === prevTab) return;
      if (
        typeof beforeTabChange === "function" &&
        !(await beforeTabChange(prevTab, openTab))
      )
        setOpenTab(prevTab);
      if (typeof onTabChange === "function") onTabChange(openTab);
    })();
  }, [openTab, prevTab]);

  const header = (
    <ConditionalWrapper
      condition={vertical}
      wrapper={<ColumnWrap {...leftColumn} />}
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
          onTabChange={setOpenTab}
          ref={headerRef}
        >
          {children}
        </TabsHeader>
      )}
    </ConditionalWrapper>
  );

  const body = (
    <ConditionalWrapper
      condition={vertical}
      wrapper={<ColumnWrap {...rightColumn} />}
    >
      {renderBody(
        <div
          className={`tab-content${
            contentClassName ? ` ${contentClassName}` : ""
          }`}
          ref={bodyRef}
        >
          {React.Children.map(children, (child, idx) =>
            React.isValidElement(child)
              ? React.cloneElement<any>(child, {
                  active: isActive(openTab, child.props.id, idx),
                })
              : child
          )}
        </div>,
        openTab
      )}
    </ConditionalWrapper>
  );

  return (
    <ConditionalWrapper
      condition={vertical}
      wrapper={
        <div
          className={cx("row", rowClassName)}
          style={sticky ? { position: "relative" } : {}}
          {...rowProps}
        />
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
