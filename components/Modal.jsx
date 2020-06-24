/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import Transition from "react-transition-group/Transition";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

import { Input } from "./Input";
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
      <ModalBody>{prompt}</ModalBody>
      <ModalFooter>
        <Button.Light onClick={closeHandle}>Close</Button.Light>
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

export const PromptModal = ({
  title,
  question,
  onSave: cb,
  onClose,
  initial,
  type,
  isOpen,
  hint,
  validate,
}) => {
  const [val, setVal] = React.useState(initial);
  const onSave = React.useCallback(() => {
    if (typeof validate === "function" && !validate(val)) return;
    onClose();
    cb(val);
  }, [onClose, cb, val, validate]);

  React.useLayoutEffect(() => setVal(initial), [initial]);

  return (
    <Modal isOpen={isOpen} closeIcon closeHandle={onClose} title={title}>
      <ModalBody>
        <Input
          type={type}
          form={{ errors: {}, touched: {} }}
          field={{
            onChange: (e) => setVal(e.target.value),
            name: "promptInput",
            value: val,
          }}
          label={
            <>
              {question}
              <If condition={!!hint && typeof hint === "string"}>
                <span
                  data-balloon={hint}
                  data-balloon-length="large"
                  data-balloon-pos="up"
                >
                  <span
                    className="icon-question-circle qtr-margin-left"
                    style={{ cursor: "help" }}
                  />
                </span>
              </If>
            </>
          }
        />
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={onClose}>
          Close
        </Button>
        <Button color="primary" onClick={onSave}>
          OK
        </Button>
      </ModalFooter>
    </Modal>
  );
};

PromptModal.propTypes = {
  title: PropTypes.node.isRequired,
  question: PropTypes.node.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  initial: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  hint: PropTypes.node,
  validate: PropTypes.func,
};

PromptModal.defaultProps = {
  onClose: null,
  initial: null,
  type: "text",
  hint: null,
  validate: null,
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

  if (modal.modalType === "notification")
    return (
      <Modal
        isOpen={modalShown}
        closeIcon
        closeHandle={onClose}
        title={modal.title}
      >
        <ModalBody>{modal.body}</ModalBody>
        <ModalFooter>
          <Button color={modal.buttonColor || "light"} onClick={onClose}>
            {modal.button}
          </Button>
        </ModalFooter>
      </Modal>
    );

  if (modal.modalType === "prompt") {
    if (typeof modal.options !== "undefined") {
      const {
        initial = "",
        type = "text",
        hint = undefined,
        validate = undefined,
      } = modal.options;
      return (
        <PromptModal
          isOpen={modalShown}
          onClose={onClose}
          onSave={modal.cb}
          title={modal.title}
          question={modal.question}
          initial={initial}
          type={type}
          hint={hint}
          validate={validate}
        />
      );
    }

    return (
      <PromptModal
        isOpen={modalShown}
        onClose={onClose}
        onSave={modal.cb}
        title={modal.title}
        question={modal.question}
        initial={modal.initial}
        type={modal.type}
        hint={modal.hint}
      />
    );
  }

  if (modal.modalType === "confirmation")
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

  return null;
};

export { ConfirmationListener as DynamicModal };

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
    modalType: "confirmation",
    prompt: <p>{prompt}</p>,
    onConfirm,
    confirmText,
    confirmType,
  });
};

export const notificationModal = (
  title,
  body,
  buttonColor = "light",
  button = "OK"
) => {
  if (!title || !body) throw new Error("Title and body must be specified");

  eventManager.emit(EVENTS.SHOW_MODAL, {
    modalType: "notification",
    title,
    body,
    buttonColor,
    button,
  });
};

export { notificationModal as notification };

export const prompt = (
  title,
  question,
  cb,
  initial = "",
  type = "text",
  hint = undefined
) => {
  if (!title || !question)
    throw new Error("Title and question must be specified");

  if (typeof initial === "object") {
    eventManager.emit(EVENTS.SHOW_MODAL, {
      modalType: "prompt",
      title,
      question,
      cb,
      options: initial,
    });
    return;
  }

  eventManager.emit(EVENTS.SHOW_MODAL, {
    modalType: "prompt",
    title,
    initial,
    type,
    question,
    cb,
    hint,
  });
};
