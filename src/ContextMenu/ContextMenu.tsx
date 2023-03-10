import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type FC,
  type MutableRefObject,
  type ReactNode,
} from "react";
import {
  FloatingFocusManager,
  FloatingNode,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useInteractions,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from "@floating-ui/react";
import cx from "classnames";
import { Transition } from "react-transition-group";
import useEvent from "react-use-event-hook";

import { FloatingTreeWrapper, useFloatingContext } from "src/FloatingProvider";

import styles from "../Dropdown/Dropdown.module.scss";

interface ContextMenuProps {
  contextMenuRef: MutableRefObject<HTMLElement | null>;
  onContextMenu?: (e: globalThis.MouseEvent) => boolean | Promise<boolean>;
  children: ReactNode;
  portalId?: ComponentProps<typeof FloatingPortal>["id"];
}

const ContextMenuInner: FC<ContextMenuProps> = ({
  contextMenuRef,
  onContextMenu,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const listContentRef = useRef(
    Children.map(children, (child) =>
      isValidElement(child) ? child.props.label : null
    ) as Array<string | null>
  );

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  // const nested ??= parentId != null;

  const { x, y, refs, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [
      offset({ mainAxis: 5, alignmentAxis: 4 }),
      flip({ padding: { bottom: 50 } }),
      shift(),
    ],
    placement: "right-start",
    strategy: "fixed",
    whileElementsMounted: autoUpdate,
    nodeId,
  });

  const { getFloatingProps, getItemProps } = useInteractions([
    useRole(context, { role: "menu" }),
    useDismiss(context, { bubbles: false }),
    useListNavigation(context, {
      listRef: listItemsRef,
      activeIndex,
      nested: false,
      onNavigate: setActiveIndex,
    }),
    useTypeahead(context, {
      listRef: listContentRef,
      onMatch: open ? setActiveIndex : undefined,
      activeIndex,
    }),
  ]);

  const onRightClick = useEvent((e: globalThis.MouseEvent) => {
    e.preventDefault();
    const pos = {
      x: e.clientX,
      y: e.clientY,
      width: 0,
      height: 0,
      top: e.clientY,
      right: e.clientX,
      bottom: e.clientY,
      left: e.clientX,
    };
    const makePop = () => {
      refs.setPositionReference({
        getBoundingClientRect() {
          return pos;
        },
      });

      setOpen(true);
    };

    if (onContextMenu) {
      const awaitResult = async () => {
        if (await onContextMenu(e)) makePop();
      };

      awaitResult();
    } else makePop();
  });

  useEffect(() => {
    function onTreeClick() {
      setOpen(false);
    }

    tree?.events.on("click", onTreeClick);
    return () => {
      tree?.events.off("click", onTreeClick);
    };
  }, [parentId, tree, refs]);

  useEffect(() => {
    if (!contextMenuRef.current) return;

    const el = contextMenuRef.current;

    el.addEventListener("contextmenu", onRightClick);
    return () => {
      el.removeEventListener("contextmenu", onRightClick);
    };
  }, [contextMenuRef, onRightClick]);

  const floatingNodeRef = useRef<HTMLElement>(null);
  const mergedFloatingRef = useMergeRefs([floatingNodeRef, refs.setFloating]);

  return (
    <Transition
      in={open}
      mountOnEnter
      unmountOnExit
      appear
      timeout={{ enter: 100, exit: 250 }}
      nodeRef={floatingNodeRef}
    >
      {(state) => (
        <FloatingFocusManager context={context} initialFocus={refs.floating}>
          <FloatingNode id={nodeId}>
            <div
              {...getFloatingProps({
                className: cx("dropdown", styles.dropdown, {
                  [styles.disappear]: state === "exiting" || state === "exited",
                  [styles.appear]: state === "entering",
                  [styles.active]: state === "entered",
                }),
                ref: mergedFloatingRef,
                style: {
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                },
              })}
            >
              <div className="dropdown__menu" style={{ position: "unset" }}>
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
                        // onPointerEnter() {
                        //   if (allowHover) {
                        //     setActiveIndex(index);
                        //   }
                        // },
                      })
                    )
                )}
              </div>
            </div>
          </FloatingNode>
        </FloatingFocusManager>
      )}
    </Transition>
  );
};

export const ContextMenu: FC<ContextMenuProps> = ({
  children,
  contextMenuRef,
  onContextMenu,
  portalId,
}) => {
  const { root, id } = useFloatingContext({
    portalId,
    fallbackPortalId: "--cui-context-menu-portal",
  });

  const tree = useFloatingTree();

  return (
    <FloatingTreeWrapper withPortal={!tree} portalRoot={root} portalId={id}>
      <ContextMenuInner
        contextMenuRef={contextMenuRef}
        onContextMenu={onContextMenu}
      >
        {children}
      </ContextMenuInner>
    </FloatingTreeWrapper>
  );
};
