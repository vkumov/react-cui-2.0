import React, { type ComponentProps, type FC, type ReactNode } from "react";
import {
  FloatingFocusManager,
  FloatingNode,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingTree,
  useInteractions,
  useRole,
  type ReferenceType,
  type UseDismissProps,
} from "@floating-ui/react";
import cx from "classnames";
import { Transition } from "react-transition-group";
import useEvent from "react-use-event-hook";

import { ConditionalWrapper } from "src/Conditional";
import {
  FloatingProvider,
  FloatingTreeWrapper,
  useFloatingContext,
} from "src/FloatingProvider";
import { useCustomDismiss } from "src/hooks/useCustomDismiss";

import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
import { ModalHeader } from "./Header";
import sts from "./Modal.module.scss";
import { useModalProvider } from "./ModalProvider";

/**
 * Modal
 */

export type ModalSize = "small" | "default" | "large" | "full" | "fluid";

export interface ModalProps {
  size?: ModalSize;
  closeIcon?: boolean;
  closeHandle?: () => void;
  children?: ReactNode;
  title?: ReactNode;
  isOpen: boolean;
  autoClose?: boolean;
  left?: boolean;
  animationDuration?: ComponentProps<typeof Transition>["timeout"];
  dialogProps?: ComponentProps<"div">;
  contentProps?: ComponentProps<"div">;
  maximize?: boolean;
  refElement?: ReferenceType;
  root?: ComponentProps<typeof FloatingPortal>["root"];
  portalId?: ComponentProps<typeof FloatingPortal>["id"];
  lockScroll?: ComponentProps<typeof FloatingOverlay>["lockScroll"];
  ancestorScroll?: UseDismissProps["ancestorScroll"];
}

type ModalSizes = {
  Small: FC<ModalProps>;
  Large: FC<ModalProps>;
  Full: FC<ModalProps>;
  Fluid: FC<ModalProps>;
};

type ModalComponents = {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
};

export const Modal: ModalSizes & ModalComponents & FC<ModalProps> = ({
  size = null,
  autoClose = true,
  animationDuration = 250,
  closeIcon = false,
  title = null,
  closeHandle = null,
  left = false,
  dialogProps = null,
  contentProps = null,
  maximize = false,
  children,
  isOpen,
  refElement,
  root: rootProvided,
  lockScroll,
  ancestorScroll,
  portalId,
}) => {
  const [maximized, setMaximized] = React.useState(false);

  const nodeId = useFloatingNodeId();
  const modalCtx = useModalProvider();
  const notifyCtx = useEvent((o: boolean) => {
    if (!modalCtx) return;
    if (o) modalCtx.addRendered(nodeId);
    else modalCtx.removeRendered(nodeId);
  });

  React.useEffect(() => {
    setMaximized(false);
    notifyCtx(isOpen);
    return () => notifyCtx(false);
  }, [isOpen, notifyCtx]);
  const realSize = React.useMemo(
    () => (maximized ? "full" : size),
    [maximized, size]
  );

  const { reference, floating, context } = useFloating({
    open: isOpen,
    onOpenChange: (state) => (!state ? void closeHandle() : void 0),
    nodeId,
  });
  const floatingTree = useFloatingTree();

  React.useEffect(() => {
    if (refElement) reference(refElement);
  }, [refElement]);

  const outsidePress = useEvent((): boolean => {
    if (!modalCtx) return true;
    if (modalCtx.lastRendered() === nodeId) return true;
    return false;
  });

  const { getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context, { role: "dialog" }),
    useDismiss(context, {
      enabled: autoClose,
      escapeKey: false,
      ancestorScroll,
      bubbles: false,
      outsidePress: outsidePress,
    }),
    useCustomDismiss(context, { enabled: autoClose, modal: true }),
  ]);

  const overlayRef = React.useRef(null);
  const contentRef = React.useRef(null);

  const { id, root } = useFloatingContext({
    root: rootProvided,
    portalId,
    fallbackPortalId: "--cui-modal-portal",
  });

  return (
    <Transition
      in={isOpen}
      mountOnEnter
      unmountOnExit
      appear
      timeout={animationDuration}
      nodeRef={overlayRef}
    >
      {(state) => (
        <FloatingTreeWrapper
          withPortal={!floatingTree}
          portalId={id}
          portalRoot={root}
        >
          <FloatingNode id={nodeId}>
            <FloatingOverlay
              className={cx("modal-backdrop", {
                "modal-backdrop--before-close": state === "exiting",
              })}
              lockScroll={lockScroll}
              ref={overlayRef}
              id={nodeId}
            >
              <FloatingFocusManager context={context} modal>
                <div
                  className={cx("modal", "modal_transitions", {
                    [`modal--${realSize}`]: Boolean(realSize),
                    "modal--left": Boolean(left),
                  })}
                >
                  <div
                    ref={floating}
                    {...getFloatingProps({
                      ...dialogProps,
                      className: cx("modal__dialog", {
                        [sts.modal__dialog__appear]: state === "entering",
                        [sts.modal__dialog__open]: state === "entered",
                        [dialogProps?.className]: dialogProps?.className,
                      }),
                    })}
                  >
                    <FloatingProvider rootRef={contentRef}>
                      <div
                        className="modal__content"
                        ref={contentRef}
                        {...contentProps}
                      >
                        {!!(closeIcon && closeHandle) || maximize ? (
                          <ConditionalWrapper
                            condition={!!(closeIcon && closeHandle) && maximize}
                            wrapper={<div className="modal__close" />}
                          >
                            {Boolean(maximize) && (
                              <a
                                className={cx({
                                  modal__close: !(closeIcon && closeHandle),
                                  "qtr-margin-right": closeIcon && closeHandle,
                                })}
                                onClick={() => setMaximized((curr) => !curr)}
                              >
                                <span
                                  className={
                                    maximized
                                      ? "icon-minimize"
                                      : "icon-maximize"
                                  }
                                />
                              </a>
                            )}
                            {Boolean(closeIcon && closeHandle) && (
                              <a
                                className={!maximize ? "modal__close" : ""}
                                onClick={closeHandle}
                              >
                                <span className="icon-close" />
                              </a>
                            )}
                          </ConditionalWrapper>
                        ) : null}
                        {Boolean(title) && (
                          <ModalHeader>
                            <h1 className="modal__title">{title}</h1>
                          </ModalHeader>
                        )}
                        {children}
                      </div>
                    </FloatingProvider>
                  </div>
                </div>
              </FloatingFocusManager>
            </FloatingOverlay>
          </FloatingNode>
        </FloatingTreeWrapper>
      )}
    </Transition>
  );
};

Modal.Small = (props) => <Modal {...props} size="small" />;
Modal.Large = (props) => <Modal {...props} size="large" />;
Modal.Full = (props) => <Modal {...props} size="full" />;
Modal.Fluid = (props) => <Modal {...props} size="fluid" />;

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
