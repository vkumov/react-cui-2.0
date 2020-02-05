import React from "react";
import Transition from "react-transition-group/Transition";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

import { Button } from "./Button";

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
  isOpen: PropTypes.bool,
  autoClose: PropTypes.bool,
  left: PropTypes.bool,
  animationDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      entering: PropTypes.number,
      exiting: PropTypes.number
    })
  ]),
  children: PropTypes.node.isRequired
};

Modal.defaultProps = {
  size: false,
  autoClose: true,
  animationDuration: 500,
  closeIcon: false,
  title: null,
  isOpen: false,
  closeHandle: null,
  left: false
};

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
        <Button.White onClick={closeHandle}>Close</Button.White>
        <Button
          color={confirmType}
          disabled={doing}
          onClick={async () => {
            setDoing(true);
            if (await confirmHandle()) setDoing(false);
          }}
        >
          {confirmText || "Confirm"}
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
  prompt: PropTypes.any.isRequired,
  confirmType: PropTypes.string,
  confirmText: PropTypes.string,
  autoClose: PropTypes.bool
};

ConfirmationModal.defaultProps = {
  confirmType: "primary",
  autoClose: true
};
