/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import Transition from "react-transition-group/Transition";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

import { ConditionalWrapper, DisplayIf as If } from "./Conditional";
import { Button } from "./Button";
import "../css/modal.css";

import { eventManager, EVENTS, appendClass as ac } from "../utils";

export const ModalHeader = ({ className, children, ...props }) => (
  <div
    className={`modal__header${className ? ` ${className}` : ""}`}
    {...props}
  >
    {children}
  </div>
);

ModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalHeader.defaultProps = {
  className: null,
};

export const ModalBody = ({ className, children, ...props }) => (
  <div className={`modal__body${className ? ` ${className}` : ""}`} {...props}>
    {children}
  </div>
);

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalBody.defaultProps = {
  className: null,
};

export const ModalFooter = ({ className, children, ...props }) => (
  <div
    className={`modal__footer${className ? ` ${className}` : ""}`}
    {...props}
  >
    {children}
  </div>
);

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalFooter.defaultProps = {
  className: null,
};

export const Modal = ({
  size,
  closeIcon,
  closeHandle,
  title,
  left,
  children,
  autoClose,
  isOpen,
  animationDuration,
  transitionEvents,
  dialogProps,
  contentProps,
  maximize,
  ...props
}) => {
  const [maximized, setMaximized] = React.useState(false);
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
          autoClose={autoClose}
          onRequestClose={autoClose && closeHandle ? closeHandle : undefined}
          overlayClassName="modal-backdrop"
          isOpen={["entering", "entered"].includes(state)}
          className={`modal${ac(realSize, `modal--${realSize}`)}${ac(
            left,
            "modal--left"
          )}`}
          closeTimeoutMS={
            typeof animationDuration === "object"
              ? animationDuration.exiting
              : animationDuration
          }
        >
          <div
            className="modal__dialog"
            {...dialogProps}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal__content" {...contentProps}>
              <If condition={(closeIcon && closeHandle) || maximize}>
                <ConditionalWrapper
                  condition={closeIcon && closeHandle && maximize}
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
                      <span className="icon-maximize" />
                    </a>
                  </If>
                  <If condition={closeIcon && closeHandle}>
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

Modal.propTypes = {
  size: PropTypes.oneOf([false, "small", "default", "large", "full", "fluid"]),
  closeIcon: PropTypes.bool,
  closeHandle: PropTypes.func,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  autoClose: PropTypes.bool,
  left: PropTypes.bool,
  animationDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      entering: PropTypes.number,
      exiting: PropTypes.number,
    }),
  ]),
  children: PropTypes.node.isRequired,
  transitionEvents: PropTypes.objectOf(PropTypes.func),
  dialogProps: PropTypes.shape({}),
  contentProps: PropTypes.shape({}),
  maximize: PropTypes.bool,
};

Modal.defaultProps = {
  size: false,
  autoClose: true,
  animationDuration: 250,
  closeIcon: false,
  title: null,
  closeHandle: null,
  left: false,
  transitionEvents: null,
  dialogProps: null,
  contentProps: null,
  maximize: false,
};

Modal.Small = (props) => <Modal {...props} size="small" />;
Modal.Large = (props) => <Modal {...props} size="large" />;
Modal.Full = (props) => <Modal {...props} size="full" />;
Modal.Fluid = (props) => <Modal {...props} size="fluid" />;

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export const ConfirmationModal = ({
  isOpen,
  confirmHandle,
  closeHandle,
  prompt,
  confirmType,
  confirmText,
  autoClose,
}) => {
  const [doing, setDoing] = React.useState(false);

  return (
    <Modal
      isOpen={isOpen}
      closeIcon
      closeHandle={closeHandle}
      autoClose={autoClose}
      title="Confirmation"
    >
      <ModalBody>
        <p>{prompt}</p>
      </ModalBody>
      <ModalFooter>
        <Button.Ghost onClick={closeHandle}>Close</Button.Ghost>
        <Button
          color={confirmType}
          disabled={doing}
          onClick={async () => {
            setDoing(true);
            if (await confirmHandle()) setDoing(false);
          }}
        >
          {confirmText}
          {doing ? (
            <span className="icon-animation spin qtr-margin-left" />
          ) : null}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool,
  confirmHandle: PropTypes.func.isRequired,
  closeHandle: PropTypes.func.isRequired,
  prompt: PropTypes.node.isRequired,
  confirmType: PropTypes.string,
  confirmText: PropTypes.string,
  autoClose: PropTypes.bool,
};

ConfirmationModal.defaultProps = {
  isOpen: false,
  confirmType: "primary",
  autoClose: true,
  confirmText: "Confirm",
};

export const ConfirmationListener = () => {
  const [modal, setModal] = React.useState(null);
  const [modalShown, setModalShown] = React.useState(false);

  React.useEffect(() => {
    eventManager.on(EVENTS.SHOW_MODAL, (m) => setModal(m));
  }, []);
  React.useEffect(() => {
    if (modal) setModalShown(true);
  }, [modal]);

  const onClose = () => setModalShown(false);

  if (!modal) return null;

  if (modal.notification)
    return (
      <Modal
        isOpen={modalShown}
        closeIcon
        closeHandle={onClose}
        title={modal.title}
      >
        <ModalBody>{modal.body}</ModalBody>
        <ModalFooter>
          <Button color={modal.buttonColor || "ghost"} onClick={onClose}>
            {modal.button}
          </Button>
        </ModalFooter>
      </Modal>
    );

  return (
    <ConfirmationModal
      isOpen={modalShown}
      prompt={modal.prompt}
      confirmHandle={async () => {
        const r = await modal.onConfirm();
        if (r) onClose();
        return true;
      }}
      closeHandle={onClose}
      confirmText={modal.confirmText}
      confirmType={modal.confirmType}
    />
  );
};

export const confirmation = (
  prompt,
  onConfirm,
  confirmType = "primary",
  confirmText = "Confirm"
) => {
  if (!prompt) throw new Error("Prompt must be specified");
  if (!onConfirm || typeof onConfirm !== "function")
    throw new Error("onConfirm must be specified and must be a function");

  eventManager.emit(EVENTS.SHOW_MODAL, {
    prompt,
    onConfirm,
    confirmText,
    confirmType,
  });
};

export const notificationModal = (
  title,
  body,
  buttonColor = "ghost",
  button = "OK"
) => {
  if (!title || !body) throw new Error("Title and body must be specified");

  eventManager.emit(EVENTS.SHOW_MODAL, {
    notification: true,
    title,
    body,
    buttonColor,
    button,
  });
};
