import React, {
  ComponentProps,
  ComponentType,
  createElement,
  ReactNode,
  useCallback,
  useRef,
} from "react";
import {
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  autoUpdate,
} from "@floating-ui/react";
import { Transition } from "react-transition-group";
import { useMergeRefs } from "use-callback-ref";

import { useLockedBody } from "src/hooks/useLockedBody";
import { useFloatingContext } from "src/FloatingProvider";

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
}: Options) {
  const [show, setShow] = useLockedBody(false, "root");

  const { x, y, reference, floating, strategy, context, refs } = useFloating({
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

  const dismiss = useDismiss(context);
  const click = useClick(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  const closeCb = useCallback(() => setShow(false), [setShow]);
  const openCb = useCallback(() => setShow(true), [setShow]);

  const transitionRef = useRef<HTMLDivElement>(null);
  const floatingRef = useMergeRefs<HTMLDivElement>([transitionRef, floating]);

  const rootCtx = useFloatingContext();
  portalRoot ??= rootCtx?.rootRef?.current || undefined;

  const render = (body: ReactNode) => {
    return (
      <Transition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={250}
        nodeRef={transitionRef}
      >
        {(state) => (
          <FloatingPortal root={portalRoot}>
            <FloatingFocusManager
              context={context}
              initialFocus={initialFocus}
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
          </FloatingPortal>
        )}
      </Transition>
    );
  };

  return {
    getReferenceProps,
    reference,
    render,
    isShown: show,
    refs,
    close: closeCb,
    open: openCb,
  };
}
