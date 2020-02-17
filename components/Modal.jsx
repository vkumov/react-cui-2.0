import React from "react";
import Transition from "react-transition-group/Transition";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

import { Button } from "./Button";
import "../css/modal.css";

import { eventManager, EVENTS } from "../utils";

export const ModalHeader = ({ className, children, ...props }) => (
  <div
    className={`modal__header${className ? ` ${className}` : ""}`}
    {...props}
  >
    {children}
  </div>
);

export const ModalBody = ({ className, children, ...props }) => (
  <div className={`modal__body${className ? ` ${className}` : ""}`} {...props}>
    {children}
  </div>
);

export const ModalFooter = ({ className, children, ...props }) => (
  <div
    className={`modal__footer${className ? ` ${className}` : ""}`}
    {...props}
  >
    {children}
  </div>
);

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
  ...props
}) => {
  props.autoClose = autoClose;
  props.onRequestClose = autoClose && closeHandle ? closeHandle : undefined;

  return (
    <Transition
      in={isOpen}
      mountOnEnter
      unmountOnExit
      timeout={animationDuration}
      {...transitionEvents}
    >
      {state => (
        <ReactModal
          {...props}
          overlayClassName="modal-backdrop"
          isOpen={["entering", "entered"].includes(state)}
          className={`modal${size ? ` modal--${size}` : ""}${
            left ? " modal--left" : ""
          }`}
          closeTimeoutMS={
            typeof animationDuration === "object"
              ? animationDuration.exiting
              : animationDuration
          }
        >
          <div className="modal__dialog" onClick={e => e.stopPropagation()}>
            <div className="modal__content">
              {closeIcon && closeHandle ? (
                <a className="modal__close" onClick={closeHandle}>
                  <span className="icon-close" />
                </a>
              ) : null}
              {title ? (
                <ModalHeader>
                  <h1 className="modal__title">{title}</h1>
                </ModalHeader>
              ) : null}
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
      exiting: PropTypes.number
    })
  ]),
  children: PropTypes.node.isRequired,
  transitionEvents: PropTypes.objectOf(PropTypes.func)
};

Modal.defaultProps = {
  size: false,
  autoClose: true,
  animationDuration: 250,
  closeIcon: false,
  title: null,
  closeHandle: null,
  left: false,
  transitionEvents: null
};

Modal.Small = props => <Modal {...props} size="small" />;
Modal.Large = props => <Modal {...props} size="large" />;
Modal.Full = props => <Modal {...props} size="full" />;
Modal.Fluid = props => <Modal {...props} size="fluid" />;

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
  autoClose
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
  autoClose: PropTypes.bool
};

ConfirmationModal.defaultProps = {
  isOpen: false,
  confirmType: "primary",
  autoClose: true,
  confirmText: "Confirm"
};

export const ConfirmationListener = () => {
  const [modal, setModal] = React.useState(null);
  const [modalShown, setModalShown] = React.useState(false);

  React.useEffect(() => {
    eventManager.on(EVENTS.SHOW_REQ, m => setModal(m));
  }, []);
  React.useEffect(() => {
    if (modal) setModalShown(true);
  }, [modal]);

  const onClose = () => setModalShown(false);

  if (!modal) return null;

  return (
    <ConfirmationModal
      isOpen={modalShown}
      prompt={modal.prompt}
      confirmHandle={async () => {
        await modal.onConfirm();
        onClose();
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
    confirmType
  });
};
