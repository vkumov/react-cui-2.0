import React, {
  type FC,
  type ReactNode,
  type HTMLProps,
  type PropsWithChildren,
  type ComponentProps,
  type MutableRefObject,
  type ReactElement,
  cloneElement,
  forwardRef,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { useMergeRefs } from "use-callback-ref";
import {
  type Placement,
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
import cx from "classnames";
import { Transition, TransitionStatus } from "react-transition-group";

import { useLockedBody } from "src/hooks/useLockedBody";
import { useFloatingContext } from "src/FloatingProvider";

import styles from "./Popover.module.scss";
import { PopoverProvider, usePopoverContext } from "./context";

export { usePopoverContext };

const Overlay: FC<
  PropsWithChildren<{ show: boolean; background?: string; className?: string }>
> = ({
  show,
  children,
  background = "var(--cui-background-color)",
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Transition
      in={show}
      mountOnEnter
      unmountOnExit
      timeout={250}
      nodeRef={ref}
    >
      {(state) => (
        <div
          style={{
            background,
          }}
          className={cx(styles.overlay, className, {
            [styles.disappear]: state === "exiting" || state === "exited",
          })}
          ref={ref}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export const GenericPopover = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement> & {
    wrapperClassName?: string;
    state: TransitionStatus;
    offset?: Parameters<typeof offset>[0];
  }
>(function GenericPopoverRefed(
  {
    className,
    children,
    wrapperClassName,
    state,
    offset: offsetOptions,
    ...props
  },
  ref
) {
  const ownRef = useRef<HTMLDivElement>(null);
  const merged = useMergeRefs([ref, ownRef]);

  useEffect(() => {
    const r = ownRef.current;

    if (r && offsetOptions && typeof offsetOptions !== "function")
      r.style.setProperty(
        "--offset",
        `${
          typeof offsetOptions === "number"
            ? offsetOptions
            : offsetOptions.mainAxis ?? 4
        }px`
      );

    return () => {
      if (r) r.style.setProperty("--offset", "4px");
    };
  }, [offsetOptions]);

  return (
    <div
      ref={merged}
      className={cx(styles.wrapper, wrapperClassName, {
        [styles.disappear]: state === "exiting" || state === "exited",
      })}
      {...props}
    >
      <div
        className={cx(
          "panel panel--bordered panel--raised",
          styles.body,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
});

export type PopoverProps = PropsWithChildren<{
  onOpen?: () => unknown;
  onClose?: () => unknown;
  showClassName?: string;
  overlay?: ReactNode;
  showOverlay?: boolean;
  placement?: Placement;
  portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
  offset?: Parameters<typeof offset>[0];
  lockBody?: boolean;
  lockRootId?: string;
  element: ReactElement;
  closeRef?: MutableRefObject<() => unknown>;
  initialFocus?: ComponentProps<typeof FloatingFocusManager>["initialFocus"];
  guardsFocus?: ComponentProps<typeof FloatingFocusManager>["guards"];
  modalFocus?: ComponentProps<typeof FloatingFocusManager>["modal"];
  closeOnFocusOut?: ComponentProps<
    typeof FloatingFocusManager
  >["closeOnFocusOut"];
}>;

export const Popover: FC<PopoverProps> = ({
  children,
  element,
  onClose,
  onOpen,
  showClassName,
  overlay: overlayProvided,
  showOverlay: overlayShowProvided,
  placement,
  portalRoot,
  offset: offsetOptions = 4,
  closeRef,
  initialFocus,
  guardsFocus,
  modalFocus,
  closeOnFocusOut,
}) => {
  const [show, setShow] = useLockedBody(false, "root");

  const { x, y, reference, floating, strategy, context } = useFloating({
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

  const [overlayShow, setOverlayShow] = useState(overlayShowProvided);
  const [overlay, setOverlay] = useState(overlayProvided);

  const ref = useMergeRefs([reference, (element as any).ref]);

  const transitionRef = useRef<HTMLDivElement>(null);
  const floatingRef = useMergeRefs<HTMLDivElement>([transitionRef, floating]);

  const rootCtx = useFloatingContext();
  portalRoot ??= rootCtx?.rootRef?.current || undefined;

  const closeCb = useCallback(() => setShow(false), [setShow]);
  if (closeRef) closeRef.current = closeCb;

  return (
    <>
      {cloneElement(
        element,
        getReferenceProps({
          ref,
          ...element.props,
          className: cx(
            element.props.className,
            showClassName ? { [showClassName]: show } : undefined
          ),
        })
      )}
      <FloatingPortal root={portalRoot}>
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
              initialFocus={initialFocus}
              guards={guardsFocus}
              modal={modalFocus}
              closeOnFocusOut={closeOnFocusOut}
            >
              <GenericPopover
                ref={floatingRef}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                }}
                state={state}
                offset={offsetOptions}
                {...getFloatingProps()}
              >
                <PopoverProvider
                  setOverlayState={setOverlayShow}
                  setOverlay={setOverlay}
                >
                  <Overlay show={overlayShow || false}>{overlay}</Overlay>
                  {children}
                </PopoverProvider>
              </GenericPopover>
            </FloatingFocusManager>
          )}
        </Transition>
      </FloatingPortal>
    </>
  );
};
