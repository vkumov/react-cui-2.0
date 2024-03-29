import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type FC,
  type HTMLProps,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from "react";
import {
  FloatingFocusManager,
  FloatingNode,
  FloatingOverlay,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
  type Placement,
  type Strategy,
} from "@floating-ui/react";
import cx from "classnames";
import { Transition } from "react-transition-group";
import useEvent from "react-use-event-hook";

import { FloatingTreeWrapper, useFloatingContext } from "src/FloatingProvider";
import { useCustomDismiss } from "src/hooks/useCustomDismiss";

import styles from "./Dropdown.module.scss";

type MenuElementProps = {
  selected?: boolean;
  icon?: string | ReactElement;
  submenu?: boolean;
} & HTMLProps<HTMLAnchorElement>;

export const MenuElement = forwardRef<any, MenuElementProps>(
  ({ selected, className, icon, children, submenu, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className={cx(className, {
          selected: selected && !submenu,
          [styles.submenu]: submenu,
        })}
      >
        {icon ? (
          isValidElement(icon) ? (
            <>
              {icon}
              {isValidElement(children) ? (
                children
              ) : (
                <span className="qtr-margin-left">{children}</span>
              )}
            </>
          ) : (
            <>
              <span className={icon as string} />
              <span className="qtr-margin-left">{children}</span>
            </>
          )
        ) : (
          children
        )}
      </a>
    );
  }
);

MenuElement.displayName = "MenuElement";

type DropdownProps = PropsWithChildren<{
  label: ReactNode;
  placement?: Placement;
  noChevron?: boolean;
  strategy?: Strategy;
  alwaysClose?: boolean;
  onOpen?: () => unknown;
  onClose?: () => unknown;
  isOpen?: boolean;
  withSizeLimit?: boolean;
  portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
  portalId?: ComponentProps<typeof FloatingPortal>["id"];
  explicitPortal?: boolean;
}>;

type MenuComponentProps = {
  nested?: boolean;
} & DropdownProps &
  Pick<MenuElementProps, "icon">;

const TreeClickHandleWrapper: FC<
  PropsWithChildren<{ onClick: () => void }>
> = ({ onClick, children }) => {
  const tree = useFloatingTree();

  useEffect(() => {
    const t = tree;
    t?.events.on("click", onClick);
    return () => {
      t?.events.off("click", onClick);
    };
  }, [tree, onClick]);

  return <>{children}</>;
};

export const Menu = forwardRef<
  any,
  MenuComponentProps & Omit<HTMLProps<HTMLButtonElement>, "label">
>(
  (
    {
      children,
      label,
      noChevron,
      placement,
      strategy: providedStrategy,
      alwaysClose,
      onOpen,
      onClose,
      isOpen,
      nested,
      withSizeLimit,
      portalId,
      portalRoot,
      icon,
      explicitPortal,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(isOpen ?? false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [allowHover, setAllowHover] = useState(false);

    useEffect(() => {
      if (typeof isOpen !== "undefined") setOpen(isOpen);
    }, [isOpen]);

    const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);
    const listContentRef = useRef(
      Children.map(children, (child) =>
        isValidElement(child) ? child.props.label : null
      ) as Array<string | null>
    );

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    nested ??= parentId != null;

    const { root, id } = useFloatingContext({
      root: portalRoot,
      portalId,
      fallbackPortalId: "--cui-dropdown-portal",
    });

    const { x, y, strategy, refs, context } = useFloating<HTMLButtonElement>({
      open,
      onOpenChange: (st) => {
        if (typeof onOpen === "function" && st) onOpen();
        if (typeof onClose === "function" && !st) onClose();
        setOpen(st);
      },
      middleware: [
        offset({ mainAxis: nested ? 0 : 2, alignmentAxis: nested ? -5 : 0 }),
        flip(),
        shift(),
        withSizeLimit
          ? size({
              apply({ availableHeight, availableWidth, elements }) {
                Object.assign(elements.floating.style, {
                  maxWidth: `${availableWidth}px`,
                  maxHeight: `${availableHeight - 4}px`,
                });
              },
            })
          : undefined,
      ].filter(Boolean),
      placement: nested ? "right-start" : placement,
      nodeId,
      whileElementsMounted: autoUpdate,
      strategy: providedStrategy,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([
        useHover(context, {
          handleClose: safePolygon({ requireIntent: true }),
          enabled: nested && allowHover,
          delay: { open: 75 },
        }),
        useClick(context, {
          toggle: !nested,
          event: "mousedown",
          ignoreMouse: nested,
        }),
        useRole(context, { role: "menu" }),
        useDismiss(context, {
          bubbles: true,
          outsidePress: true,
          escapeKey: false,
        }),
        useCustomDismiss(context),
        useListNavigation(context, {
          listRef: listItemsRef,
          activeIndex,
          nested,
          onNavigate: setActiveIndex,
        }),
        useTypeahead(context, {
          listRef: listContentRef,
          onMatch: open ? setActiveIndex : undefined,
          activeIndex,
        }),
      ]);

    const onTreeClick = useEvent(() => {
      if (alwaysClose) setOpen(false);

      if (parentId === null) {
        refs.domReference.current?.focus();
      }
    });

    useEffect(() => {
      function onPointerMove() {
        setAllowHover(true);
      }

      function onKeyDown() {
        setAllowHover(false);
      }

      window.addEventListener("pointermove", onPointerMove, {
        once: true,
        capture: true,
      });
      window.addEventListener("keydown", onKeyDown, true);
      return () => {
        window.removeEventListener("pointermove", onPointerMove, {
          capture: true,
        });
        window.removeEventListener("keydown", onKeyDown, true);
      };
    }, [allowHover]);

    const floatingNodeRef = useRef<HTMLElement>(null);
    const mergedFloatingRef = useMergeRefs([floatingNodeRef, refs.setFloating]);
    const mergedReferenceRef = useMergeRefs([ref, refs.setReference]);

    useEffect(() => {
      const onClick = (e: MouseEvent) => {
        if (!floatingNodeRef.current) return;
        if (floatingNodeRef.current.contains(e.target as Node)) {
          if (tree) tree.events.emit("click");
          else onTreeClick();
        }
      };

      document.addEventListener("click", onClick);
      return () => {
        document.removeEventListener("click", onClick);
      };
    }, [tree, onTreeClick]);

    return (
      <>
        {isValidElement(label) ? (
          cloneElement(label, {
            ...getReferenceProps({
              ...props,
              ref: mergedReferenceRef,
              onClick(event) {
                event.stopPropagation();
                (event.currentTarget as HTMLButtonElement).focus();
              },
              ...(nested
                ? {
                    className: cx("menu_item", label.props.className, {
                      open,
                    }),
                    role: "menuitem",
                    onKeyDown(event) {
                      if (
                        event.key === "ArrowUp" ||
                        event.key === "ArrowDown"
                      ) {
                        setOpen(false);
                      }
                    },
                  }
                : {
                    className: cx(styles.menu_root, label.props.className, {
                      open,
                      [styles.with_chevron]: !noChevron,
                    }),
                  }),
            }),
          })
        ) : (
          <MenuElement
            submenu={nested}
            icon={icon}
            {...getReferenceProps({
              ...props,
              ref: mergedReferenceRef,
              onClick(event) {
                event.stopPropagation();
                (event.currentTarget as HTMLButtonElement).focus();
              },
              ...(nested
                ? {
                    className: cx("menu_item", { open }),
                    role: "menuitem",
                    onKeyDown(event) {
                      if (
                        event.key === "ArrowUp" ||
                        event.key === "ArrowDown"
                      ) {
                        setOpen(false);
                      }
                    },
                  }
                : {
                    className: cx(styles.menu_root, {
                      open,
                      [styles.with_chevron]: !noChevron,
                    }),
                  }),
            })}
          >
            {label}
          </MenuElement>
        )}
        <Transition
          in={open}
          mountOnEnter
          unmountOnExit
          appear
          timeout={{ enter: 100, exit: 250 }}
          nodeRef={floatingNodeRef}
        >
          {(state) => (
            <FloatingTreeWrapper
              withPortal={explicitPortal || !tree}
              force={explicitPortal ? true : undefined}
              portalId={id}
              portalRoot={root}
            >
              <FloatingNode id={nodeId}>
                <TreeClickHandleWrapper onClick={onTreeClick}>
                  <FloatingOverlay
                    style={{
                      zIndex: nested
                        ? 50
                        : "calc(var(--cui-max-zindex, 1000) + 2)",
                      overflow: "visible",
                    }}
                  >
                    <FloatingFocusManager
                      context={context}
                      modal={!nested}
                      returnFocus={!nested}
                      order={["reference", "content"]}
                    >
                      <div
                        {...getFloatingProps({
                          className: cx("dropdown", styles.dropdown, {
                            [styles.disappear]:
                              state === "exiting" || state === "exited",
                            [styles.appear]: state === "entering",
                            [styles.active]: state === "entered",
                          }),
                          ref: mergedFloatingRef,
                          style: {
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                          },
                          onKeyDown(event) {
                            if (event.key === "Tab") {
                              setOpen(false);
                            }
                          },
                        })}
                      >
                        <div
                          className="dropdown__menu"
                          onClick={
                            alwaysClose
                              ? () => {
                                  tree?.events.emit("click");
                                }
                              : undefined
                          }
                        >
                          {Children.map(
                            children,
                            (child, index) =>
                              isValidElement(child) &&
                              cloneElement(
                                child,
                                getItemProps({
                                  ...child.props,
                                  tabIndex: -1,
                                  role: "menuitem",
                                  className: cx(
                                    "menu_item",
                                    child.props.className
                                  ),
                                  ref(node: HTMLButtonElement) {
                                    listItemsRef.current[index] = node;
                                  },
                                  onPointerEnter() {
                                    if (allowHover) {
                                      setActiveIndex(index);
                                    }
                                  },
                                })
                              )
                          )}
                        </div>
                      </div>
                    </FloatingFocusManager>
                  </FloatingOverlay>
                </TreeClickHandleWrapper>
              </FloatingNode>
            </FloatingTreeWrapper>
          )}
        </Transition>
      </>
    );
  }
);

Menu.displayName = "Menu";

export const Dropdown = forwardRef<any, DropdownProps>(
  ({ children, placement = "bottom-start", ...props }, ref) => {
    return (
      <Menu placement={placement} {...props} nested={false} ref={ref}>
        {children}
      </Menu>
    );
  }
);

Dropdown.displayName = "Dropdown";

export const MenuDivider = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div {...props} className={cx("divider", className)} ref={ref} />
));

MenuDivider.displayName = "MenuDivider";

export const MenuGroup = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement> & { header?: ReactNode }
>(({ className, header, children, ...props }, ref) => (
  <div className={cx("dropdown__group", className)} {...props} ref={ref}>
    {header ? <div className="dropdown__group-header">{header}</div> : null}
    {children}
  </div>
));

MenuGroup.displayName = "MenuGroup";
