import React, { FC, ReactNode, PropsWithChildren } from "react";
import Transition from "react-transition-group/Transition";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

import { Input } from "./Input";
import { ConditionalWrapper, DisplayIf as If } from "./Conditional";
import { Button, ButtonColor } from "./Button";
import "../css/modal.css";

import { eventManager, EVENTS, appendClass as ac } from "../utils";

/**
 * Modal Header
 */

type ModalHeaderProps = {
  className?: string;
  children: ReactNode;
};

export const ModalHeader: FC<ModalHeaderProps> = ({
  className = null,
  children,
  ...props
}) => (
  <div className={`modal__header${ac(className)}`} {...props}>
    {children}
  </div>
);

ModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * Modal Body
 */

type ModalBodyProps = {
  className?: string;
  children: ReactNode;
};

export const ModalBody: FC<ModalBodyProps> = ({
  className = null,
  children,
  ...props
}) => (
  <div className={`modal__body${ac(className)}`} {...props}>
    {children}
  </div>
);

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * Modal Footer
 */

type ModalFooterProps = {
  className?: string;
  children: ReactNode;
};

export const ModalFooter: FC<ModalFooterProps> = ({
  className = null,
  children,
  ...props
}) => (
  <div className={`modal__footer${ac(className)}`} {...props}>
    {children}
  </div>
);

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * Modal
 */

type ModalProps = {
  size?: "small" | "default" | "large" | "full" | "fluid";
  closeIcon?: boolean;
  closeHandle?: (e) => void;
  title?: ReactNode;
  isOpen: boolean;
  autoClose?: boolean;
  left?: boolean;
  animationDuration?:
    | number
    | {
        entering: number;
        exiting: number;
      };
  children: ReactNode;
  transitionEvents?: Record<string, unknown>;
  dialogProps?: React.ComponentProps<"div">;
  contentProps?: React.ComponentProps<"div">;
  maximize?: boolean;
};

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
  size: PropTypes.oneOf(["small", "default", "large", "full", "fluid"]),
  closeIcon: PropTypes.bool,
  closeHandle: PropTypes.func,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  autoClose: PropTypes.bool,
  left: PropTypes.bool,
  animationDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.exact({
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

Modal.Small = (props) => <Modal {...props} size="small" />;
Modal.Large = (props) => <Modal {...props} size="large" />;
Modal.Full = (props) => <Modal {...props} size="full" />;
Modal.Fluid = (props) => <Modal {...props} size="fluid" />;

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

/**
 * Confirmation Modal
 */

type ConfirmationModalProps = {
  isOpen?: boolean;
  confirmHandle: (() => Promise<boolean>) | (() => boolean);
  closeHandle: (e) => void;
  prompt: ReactNode;
  confirmType?: ButtonColor;
  confirmText?: string;
  autoClose?: boolean;
};

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen = false,
  confirmType = "primary",
  autoClose = true,
  confirmText = "Confirm",
  confirmHandle,
  closeHandle,
  prompt,
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
  confirmText: PropTypes.string,
  autoClose: PropTypes.bool,
};

/**
 * Prompt Modal
 */

interface PromptModalProps<T extends React.ReactText> {
  title: ReactNode;
  question: ReactNode;
  onSave: (value: T) => void | Promise<void>;
  onClose?: (e?) => void;
  initial?: T;
  type?: string;
  isOpen: boolean;
  hint?: ReactNode;
  validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
}

export function PromptModal<T extends React.ReactText>({
  title,
  question,
  onSave: cb,
  onClose,
  initial,
  type,
  isOpen,
  hint,
  validate,
}: PropsWithChildren<PromptModalProps<T>>): JSX.Element {
  const [val, setVal] = React.useState<T>(initial);
  const onSave = React.useCallback(async () => {
    if (typeof validate === "function" && !(await validate(val))) return;

    onClose();
    cb(val);
  }, [onClose, cb, val, validate]);

  React.useLayoutEffect(() => setVal(initial), [initial]);

  return (
    <Modal isOpen={isOpen} closeIcon closeHandle={onClose} title={title}>
      <ModalBody>
        <Input
          type={type}
          form={{ errors: {}, touched: {}, values: { promptInput: val } }}
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
}

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

export const ConfirmationListener: FC = () => {
  const [modals, setModals] = React.useState([]);

  const addModal = React.useCallback(
    (modal) =>
      setModals((curr) => [...curr, { id: Date.now(), shown: true, ...modal }]),
    []
  );

  const hideModal = React.useCallback((id) => {
    setModals((curr) =>
      curr.map((m) => (m.id === id ? { ...m, shown: false } : m))
    );
  }, []);

  const deleteModal = React.useCallback((id) => {
    setModals((curr) => curr.filter((m) => m.id !== id));
  }, []);

  const closeModal = React.useCallback(
    (id) => {
      hideModal(id);
      setTimeout(() => deleteModal(id), 500);
    },
    [hideModal, deleteModal]
  );

  React.useEffect(() => {
    eventManager.on(EVENTS.SHOW_MODAL, (m) => addModal(m));
  }, [addModal]);

  if (!modals.length) return null;

  return (
    <>
      {modals.map((modal) => {
        if (modal.modalType === "notification")
          return (
            <Modal
              key={modal.id}
              isOpen={modal.shown}
              closeIcon
              closeHandle={() => closeModal(modal.id)}
              title={modal.title}
            >
              <ModalBody>{modal.body}</ModalBody>
              <ModalFooter>
                <Button
                  color={modal.buttonColor || "light"}
                  onClick={() => closeModal(modal.id)}
                >
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
                key={modal.id}
                isOpen={modal.shown}
                onClose={() => closeModal(modal.id)}
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
              key={modal.id}
              isOpen={modal.shown}
              onClose={() => closeModal(modal.id)}
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
              key={modal.id}
              isOpen={modal.shown}
              prompt={modal.prompt}
              confirmHandle={async () => {
                const r = await modal.onConfirm();
                if (r) closeModal(modal.id);
                return true;
              }}
              closeHandle={() => closeModal(modal.id)}
              confirmText={modal.confirmText}
              confirmType={modal.confirmType}
            />
          );

        return null;
      })}
    </>
  );
};

export { ConfirmationListener as DynamicModal };

export const confirmation = (
  prompt: ReactNode,
  onConfirm: () => boolean | Promise<boolean>,
  confirmType: ButtonColor = "primary",
  confirmText = "Confirm"
): void => {
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
  title: ReactNode,
  body: ReactNode,
  buttonColor: ButtonColor = "light",
  button = "OK"
): void => {
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
  title: React.ReactText,
  question: ReactNode,
  cb: (value: unknown) => void | Promise<void>,
  initial = "",
  type = "text",
  hint = undefined
): void => {
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
