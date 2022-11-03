import React, { type FC, type ReactNode, type PropsWithChildren } from "react";
import Transition from "react-transition-group/Transition";

import {
  FloatingFocusManager,
  FloatingPortal,
  FloatingOverlay,
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  type ReferenceType,
} from "@floating-ui/react-dom-interactions";

import { ConditionalWrapper, DisplayIf as If } from "src/Conditional";
import { appendClass as ac } from "src/utils";

import { ModalHeader } from "./Header";
import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
import { useFloatingContext } from "../FloatingProvider";

/**
 * Modal
 */

export type ModalSize = "small" | "default" | "large" | "full" | "fluid";

export type ModalProps = PropsWithChildren<{
  size?: ModalSize;
  closeIcon?: boolean;
  closeHandle?: () => void;
  title?: ReactNode;
  isOpen: boolean;
  autoClose?: boolean;
  left?: boolean;
  animationDuration?:
    | number
    | { appear?: number; enter?: number; exit?: number };
  transitionEvents?: Record<string, unknown>;
  dialogProps?: React.ComponentProps<"div">;
  contentProps?: React.ComponentProps<"div">;
  maximize?: boolean;
  refElement?: ReferenceType;
  root?: Parameters<typeof FloatingPortal>[0]["root"];
  lockScroll?: Parameters<typeof FloatingOverlay>[0]["lockScroll"];
  ancestorScroll?: Parameters<typeof useDismiss>[1]["ancestorScroll"];
}>;
// & ReactModalProps;

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
  transitionEvents = null,
  dialogProps = null,
  contentProps = null,
  maximize = false,
  children,
  isOpen,
  refElement,
  root: rootProvided,
  lockScroll,
  ancestorScroll,
}) => {
  const [maximized, setMaximized] = React.useState(false);

  React.useEffect(() => setMaximized(false), [isOpen]);
  const realSize = React.useMemo(
    () => (maximized ? "full" : size),
    [maximized, size]
  );

  const modalContext = useFloatingContext();
  const root: HTMLElement | null | undefined =
    rootProvided ?? modalContext ? modalContext.rootRef.current : undefined;

  const { reference, floating, context } = useFloating({
    open: isOpen,
    onOpenChange: (state) => (!state ? void closeHandle() : void 0),
  });

  React.useEffect(() => {
    if (refElement) reference(refElement);
  }, [refElement]);

  const click = useClick(context);
  const role = useRole(context, { role: "dialog" });
  const dismiss = useDismiss(context, {
    enabled: autoClose,
    ancestorScroll,
  });

  const { getFloatingProps } = useInteractions([click, role, dismiss]);

  const nodeRef = React.useRef(null);

  return (
    <Transition
      in={isOpen}
      mountOnEnter
      unmountOnExit
      timeout={animationDuration}
      nodeRef={nodeRef}
      {...transitionEvents}
    >
      {(state) => (
        <FloatingPortal root={root}>
          <FloatingOverlay
            className={`modal-backdrop${ac(
              state === "exiting",
              "modal-backdrop--before-close"
            )}`}
            lockScroll={lockScroll}
            ref={nodeRef}
            onClick={() => (autoClose ? closeHandle() : void 0)}
          >
            <FloatingFocusManager context={context}>
              <div
                ref={floating}
                {...getFloatingProps({
                  className: `modal${ac(realSize, `modal--${realSize}`)}${ac(
                    left,
                    "modal--left"
                  )}`,
                  onClick: () => (autoClose ? closeHandle() : void 0),
                })}
              >
                <div
                  className="modal__dialog"
                  {...dialogProps}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="modal__content" {...contentProps}>
                    <If condition={!!(closeIcon && closeHandle) || maximize}>
                      <ConditionalWrapper
                        condition={!!(closeIcon && closeHandle) && maximize}
                        wrapper={<div className="modal__close" />}
                      >
                        {Boolean(maximize) && (
                          <a
                            className={`${ac(
                              !(closeIcon && closeHandle),
                              "modal__close"
                            )}${ac(
                              closeIcon && closeHandle,
                              "qtr-margin-right"
                            )}`}
                            onClick={() => setMaximized((curr) => !curr)}
                          >
                            <span
                              className={
                                maximized ? "icon-minimize" : "icon-maximize"
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
                    </If>
                    {Boolean(title) && (
                      <ModalHeader>
                        <h1 className="modal__title">{title}</h1>
                      </ModalHeader>
                    )}
                    {children}
                  </div>
                </div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
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
