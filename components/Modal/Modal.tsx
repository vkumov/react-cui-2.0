import React, { FC, ReactNode, PropsWithChildren } from "react";
import Transition from "react-transition-group/Transition";
import ReactModal, { Props as ReactModalProps } from "react-modal";

import { ConditionalWrapper, DisplayIf as If } from "../Conditional";

import { appendClass as ac } from "../../utils";

import { ModalHeader } from "./Header";
import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";

/**
 * Modal
 */

export type ModalSize = "small" | "default" | "large" | "full" | "fluid";

export type ModalProps = PropsWithChildren<{
  size?: ModalSize;
  closeIcon?: boolean;
  closeHandle?: (e) => void;
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
}> &
  ReactModalProps;

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
  ...props
}) => {
  const [maximized, setMaximized] = React.useState(false);
  React.useEffect(() => setMaximized(false), [isOpen]);
  const realSize = React.useMemo(() => (maximized ? "full" : size), [
    maximized,
    size,
  ]);

  const maximizeCb = React.useCallback(() => {
    setMaximized((curr) => !curr);
  }, []);

  return (
    <Transition
      in={isOpen}
      mountOnEnter
      unmountOnExit
      timeout={animationDuration}
      {...transitionEvents}
    >
      {(state) => (
        <ReactModal
          {...props}
          onRequestClose={autoClose && closeHandle ? closeHandle : undefined}
          overlayClassName="modal-backdrop"
          isOpen={["entering", "entered"].includes(state)}
          className={`modal${ac(realSize, `modal--${realSize}`)}${ac(
            left,
            "modal--left"
          )}`}
          closeTimeoutMS={
            typeof animationDuration === "object"
              ? animationDuration.exit
              : animationDuration
          }
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
                  <If condition={maximize}>
                    <a
                      className={`${ac(
                        !(closeIcon && closeHandle),
                        "modal__close"
                      )}${ac(closeIcon && closeHandle, "qtr-margin-right")}`}
                      onClick={maximizeCb}
                    >
                      <span
                        className={
                          maximized ? "icon-minimize" : "icon-maximize"
                        }
                      />
                    </a>
                  </If>
                  <If condition={!!(closeIcon && closeHandle)}>
                    <a
                      className={!maximize ? "modal__close" : ""}
                      onClick={closeHandle}
                    >
                      <span className="icon-close" />
                    </a>
                  </If>
                </ConditionalWrapper>
              </If>
              <If condition={!!title}>
                <ModalHeader>
                  <h1 className="modal__title">{title}</h1>
                </ModalHeader>
              </If>
              {children}
            </div>
          </div>
        </ReactModal>
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
