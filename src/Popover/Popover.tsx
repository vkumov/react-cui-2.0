import {
  cloneElement,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentProps,
  type FC,
  type MutableRefObject,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from "react";
import {
  FloatingFocusManager,
  FloatingNode,
  FloatingOverlay,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingTree,
  useInteractions,
  useMergeRefs,
  type Placement,
} from "@floating-ui/react";
import cx from "classnames";
import { Transition } from "react-transition-group";

import { FloatingTreeWrapper, useFloatingContext } from "src/FloatingProvider";
import { useCustomDismiss } from "src/hooks/useCustomDismiss";
import { useLockedBody } from "src/hooks/useLockedBody";

import { GenericPopover } from "./GenericPopover";
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

export type PopoverProps = PropsWithChildren<
  {
    onOpen?: () => unknown;
    onClose?: () => unknown;
    showClassName?: string;
    overlay?: ReactNode;
    showOverlay?: boolean;
    placement?: Placement;
    offset?: Parameters<typeof offset>[0];
    lockBody?: boolean;
    lockRootId?: string;
    element: ReactElement;
    closeRef?: MutableRefObject<(() => unknown) | undefined | null>;
    initialFocus?: ComponentProps<typeof FloatingFocusManager>["initialFocus"];
    guardsFocus?: ComponentProps<typeof FloatingFocusManager>["guards"];
    modalFocus?: ComponentProps<typeof FloatingFocusManager>["modal"];
    closeOnFocusOut?: ComponentProps<
      typeof FloatingFocusManager
    >["closeOnFocusOut"];
    portalRoot?: ComponentProps<typeof FloatingTreeWrapper>["portalRoot"];
    portalId?: ComponentProps<typeof FloatingTreeWrapper>["portalId"];
    explicitPortal?: boolean;
    autoDismiss?: boolean;
  } & Pick<
    ComponentProps<typeof GenericPopover>,
    "wrapperClassName" | "className"
  >
>;

export interface PopoverHandlers {
  close: () => void;
  open: () => void;
  setAutoDismiss: (enabled: boolean) => void;
}

const popoverHandlersContext =
  createContext<MutableRefObject<PopoverHandlers>>(null);

export const usePopoverHandlers = () => {
  const ref = useContext(popoverHandlersContext);
  if (!ref) throw Error("usePopoverHandlers can be used only inside Popover");

  return ref.current;
};

export const Popover = forwardRef<PopoverHandlers | null, PopoverProps>(
  function (
    {
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
      portalId,
      wrapperClassName,
      className,
      explicitPortal,
      autoDismiss: providedAutoDismiss = true,
    },
    impRef
  ) {
    const [show, setShow] = useLockedBody(false, "root");
    const [autoDismiss, setAutoDismiss] = useState(providedAutoDismiss);

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();

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
      nodeId,
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
      useClick(context),
      useDismiss(context, {
        escapeKey: false,
        bubbles: false,
        enabled: autoDismiss,
      }),
      useCustomDismiss(context, { enabled: autoDismiss }),
    ]);

    const [overlayShow, setOverlayShow] = useState(overlayShowProvided);
    const [overlay, setOverlay] = useState(overlayProvided);

    const ref = useMergeRefs([reference, (element as any).ref]);

    const transitionRef = useRef<HTMLDivElement>(null);
    const floatingRef = useMergeRefs<HTMLDivElement>([transitionRef, floating]);

    const { root, id } = useFloatingContext({
      root: portalRoot,
      portalId,
      fallbackPortalId: "--cui-popover-portal",
    });

    const closeCb = useCallback(() => setShow(false), [setShow]);
    if (closeRef) closeRef.current = closeCb;

    const handlersRef = useRef<PopoverHandlers>(null);
    useImperativeHandle(
      useMergeRefs([impRef, handlersRef]),
      () => ({
        close: () => setShow(false),
        open: () => setShow(true),
        setAutoDismiss,
      }),
      [setShow]
    );

    return (
      <popoverHandlersContext.Provider value={handlersRef}>
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
        <FloatingTreeWrapper
          withPortal={explicitPortal || !tree}
          portalId={id}
          portalRoot={root}
        >
          <FloatingNode id={nodeId}>
            <Transition
              in={show}
              mountOnEnter
              unmountOnExit
              timeout={250}
              nodeRef={transitionRef}
            >
              {(state) => (
                <FloatingOverlay
                  style={{ zIndex: "calc(var(--cui-max-zindex, 1000) + 2)" }}
                  id={nodeId}
                >
                  <FloatingFocusManager
                    context={context}
                    initialFocus={initialFocus ?? (floatingRef as any)}
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
                      wrapperClassName={wrapperClassName}
                      {...getFloatingProps({ className })}
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
                </FloatingOverlay>
              )}
            </Transition>
          </FloatingNode>
        </FloatingTreeWrapper>
      </popoverHandlersContext.Provider>
    );
  }
);
