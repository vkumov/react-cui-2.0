import {
  type Strategy,
  type Placement,
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingNode,
  FloatingPortal,
  FloatingTree,
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
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import React, {
  type PropsWithChildren,
  type ReactNode,
  type ReactElement,
  type HTMLProps,
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import cx from "classnames";
import { useMergeRefs } from "use-callback-ref";
import { Transition } from "react-transition-group";

import { useFloatingContext } from "src/FloatingProvider";

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
              <span className={icon} />
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
  portalRoot?: HTMLElement | null | undefined;
  alwaysClose?: boolean;
  onOpen?: () => unknown;
  withSizeLimit?: boolean;
}>;

type MenuComponentProps = {
  nested?: boolean;
} & DropdownProps;

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
      portalRoot,
      alwaysClose,
      onOpen,
      nested,
      withSizeLimit,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [allowHover, setAllowHover] = useState(false);

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

    const { x, y, reference, floating, strategy, refs, context } =
      useFloating<HTMLButtonElement>({
        open,
        onOpenChange: (st) => {
          if (typeof onOpen === "function") onOpen();
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
          handleClose: safePolygon({ restMs: 25 }),
          enabled: nested && allowHover,
          delay: { open: 75 },
        }),
        useClick(context, {
          toggle: !nested,
          event: "mousedown",
          ignoreMouse: nested,
        }),
        useRole(context, { role: "menu" }),
        useDismiss(context),
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

    useEffect(() => {
      function onTreeClick() {
        if (alwaysClose) setOpen(false);

        if (parentId === null) {
          refs.domReference.current?.focus();
        }
      }

      tree?.events.on("click", onTreeClick);
      return () => {
        tree?.events.off("click", onTreeClick);
      };
    }, [parentId, tree, refs, alwaysClose]);

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
    const mergedReferenceRef = useMergeRefs([ref, reference]);

    const rootCtx = useFloatingContext();
    portalRoot ??= rootCtx?.rootRef?.current || undefined;

    return (
      <FloatingNode id={nodeId}>
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
        <FloatingPortal root={portalRoot}>
          <Transition
            in={open}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 100, exit: 250 }}
            nodeRef={floatingNodeRef}
          >
            {(state) => (
              <FloatingFocusManager
                context={context}
                modal={!nested}
                returnFocus={!nested}
                order={["reference", "content"]}
              >
                <div
                  {...getFloatingProps({
                    className: cx("dropdown", styles.active, styles.dropdown, {
                      [styles.disappear]:
                        state === "exiting" || state === "exited",
                    }),
                    ref(r) {
                      floatingNodeRef.current = r;
                      floating(r);
                    },
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
                            tabIndex: -1,
                            role: "menuitem",
                            className: "menu_item",
                            ref(node: HTMLButtonElement) {
                              listItemsRef.current[index] = node;
                            },
                            onClick(e) {
                              if (child.props.onClick) child.props.onClick(e);
                              else tree?.events.emit("click");
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
            )}
          </Transition>
        </FloatingPortal>
      </FloatingNode>
    );
  }
);

Menu.displayName = "Menu";

export const Dropdown = forwardRef<any, DropdownProps>(
  ({ children, placement = "bottom-start", ...props }, ref) => {
    return (
      <FloatingTree>
        <Menu placement={placement} {...props} nested={false} ref={ref}>
          {children}
        </Menu>
      </FloatingTree>
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
