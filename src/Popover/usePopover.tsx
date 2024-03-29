import React, {
  createElement,
  useCallback,
  useRef,
  type ComponentProps,
  type ComponentType,
  type ReactNode,
} from "react";
import {
  FloatingFocusManager,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useMergeRefs,
} from "@floating-ui/react";
import { Transition } from "react-transition-group";

import { useFloatingContext } from "src/FloatingProvider";
import { useCustomDismiss } from "src/hooks/useCustomDismiss";
import { useLockedBody } from "src/hooks/useLockedBody";

import { PopoverProps } from ".";
import { GenericPopover } from "./GenericPopover";

type Options = {
  onOpen?: () => unknown;
  onClose?: () => unknown;
  popoverComponent?: ComponentType<ComponentProps<typeof GenericPopover>>;
} & Pick<
  PopoverProps,
  | "initialFocus"
  | "guardsFocus"
  | "modalFocus"
  | "closeOnFocusOut"
  | "offset"
  | "portalRoot"
  | "placement"
  | "portalId"
>;

export function usePopover({
  onClose,
  onOpen,
  popoverComponent = GenericPopover,
  placement,
  initialFocus,
  guardsFocus,
  modalFocus,
  closeOnFocusOut,
  offset: offsetOptions = 4,
  portalRoot,
  portalId,
}: Options) {
  const [show, setShow] = useLockedBody(false, "root");

  const { x, y, strategy, context, refs } = useFloating({
    placement,
    middleware: [
      offset(offsetOptions),
      flip(),
      shift({ padding: { left: 8, right: 8 } }),
    ],
    open: show,
    onOpenChange: (newOpen) => {
      if (newOpen && typeof onOpen === "function") onOpen();
      if (!newOpen && typeof onClose === "function") onClose();
      setShow(newOpen);
    },
    whileElementsMounted: autoUpdate,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useDismiss(context, { bubbles: false, escapeKey: false }),
    useCustomDismiss(context),
  ]);

  const closeCb = useCallback(() => setShow(false), [setShow]);
  const openCb = useCallback(() => setShow(true), [setShow]);

  const transitionRef = useRef<HTMLDivElement>(null);
  const floatingRef = useMergeRefs<HTMLDivElement>([
    transitionRef,
    refs.setFloating,
  ]);

  const { root, id } = useFloatingContext({
    root: portalRoot,
    portalId,
    fallbackPortalId: "--cui-popover-portal",
  });

  const render = (body: ReactNode) => {
    return (
      <FloatingPortal root={root} id={id}>
        <Transition
          in={show}
          mountOnEnter
          unmountOnExit
          timeout={250}
          nodeRef={transitionRef}
        >
          {(state) => (
            <FloatingFocusManager
              context={context}
              initialFocus={initialFocus ?? (refs.setFloating as any)}
              guards={guardsFocus}
              modal={modalFocus}
              closeOnFocusOut={closeOnFocusOut}
            >
              {createElement(
                popoverComponent,
                {
                  ref: floatingRef,
                  state,
                  offset: offsetOptions,
                  ...getFloatingProps({
                    style: { position: strategy, top: y ?? 0, left: x ?? 0 },
                  }),
                },
                body
              )}
            </FloatingFocusManager>
          )}
        </Transition>
      </FloatingPortal>
    );
  };

  return {
    getReferenceProps,
    render,
    isShown: show,
    refs,
    close: closeCb,
    open: openCb,
  };
}
