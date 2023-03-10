import React, { cloneElement, type ComponentProps, type FC } from "react";
import type { FloatingPortal } from "@floating-ui/react";
import { nanoid } from "nanoid";
import useEvent from "react-use-event-hook";

import { Button } from "src/Button";
import { FloatingTreeWrapper } from "src/FloatingProvider";
import {
  eventManager,
  type EventModalProps as EMP,
  type FullBodyProps,
} from "src/utils/eventManager";

import { ModalBody } from "./Body";
import { ConfirmationModal } from "./ConfirmationModal";
import { ModalFooter } from "./Footer";
import { Modal } from "./Modal";
import { PromptModal } from "./PromptModal";

export type DynamicModalProps = {
  root?: ComponentProps<typeof FloatingPortal>["root"];
  id?: ComponentProps<typeof FloatingPortal>["id"];
  closeTimeout?: number;
};

type EventModalProps = EMP & { id: string; shown: boolean };

type IsLastProps = { isLast: boolean };

function assertUnreachable(x: never): null {
  throw new Error(`Unexpected value ${x}`);
}

const CustomWrapper: FC<
  Extract<EventModalProps, { modalType: "dynamic" }> &
    FullBodyProps &
    IsLastProps
> = ({
  fullBody,
  body,
  buttons,
  modalProps,
  id,
  shown,
  title,
  close,
  isLast,
}) => {
  return (
    <Modal
      {...modalProps}
      key={id}
      isOpen={shown}
      closeHandle={close}
      title={title}
      autoClose={isLast ? modalProps?.autoClose : false}
    >
      {fullBody ? (
        typeof fullBody === "function" ? (
          fullBody({ close })
        ) : (
          cloneElement(fullBody, { close })
        )
      ) : (
        <>
          <ModalBody>{body}</ModalBody>
          <ModalFooter>
            {buttons.map((button, idx) => (
              <Button
                key={idx}
                color={button.color || "light"}
                onClick={(e) => {
                  if (typeof button.onClick === "function")
                    button.onClick(e, close);
                  else close();
                }}
              >
                {button.text}
              </Button>
            ))}
          </ModalFooter>
        </>
      )}
    </Modal>
  );
};

const NotificationWrapper: FC<
  Extract<EventModalProps, { modalType: "notification" }> &
    FullBodyProps &
    IsLastProps
> = ({ id, body, button, close, isLast, shown, buttonColor, title }) => {
  return (
    <Modal
      key={id}
      isOpen={shown}
      closeIcon
      closeHandle={close}
      title={title}
      autoClose={isLast ? undefined : false} // override default behavior only if it's not last rendered modal
    >
      <ModalBody>{body}</ModalBody>
      <ModalFooter>
        <Button color={buttonColor || "light"} onClick={close}>
          {button}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const PromptWrapper: FC<
  Extract<EventModalProps, { modalType: "prompt" }> &
    FullBodyProps &
    IsLastProps
> = ({
  cb,
  close,
  id,
  isLast,
  question,
  shown,
  hint,
  initial,
  options,
  title,
  type,
}) => {
  let validate: (typeof options)["validate"];

  if (typeof options !== "undefined") {
    ({
      initial = "",
      type = "text",
      hint = undefined,
      validate = undefined,
    } = options);
  }

  return (
    <PromptModal
      key={id}
      isOpen={shown}
      onClose={close}
      onSave={cb}
      title={title}
      question={question}
      initial={initial}
      type={type}
      hint={hint}
      validate={validate}
      autoClose={isLast ? undefined : false} // override default behavior only if it's not last rendered modal
    />
  );
};

const ConfirmationWrapper: FC<
  Extract<EventModalProps, { modalType: "confirmation" }> &
    FullBodyProps &
    IsLastProps
> = ({
  close,
  id,
  isLast,
  onConfirm,
  prompt,
  shown,
  confirmText,
  confirmType,
  dontAskAgain,
}) => {
  return (
    <ConfirmationModal
      key={id}
      isOpen={shown}
      prompt={prompt}
      confirmHandle={async (dontAskAgain) => {
        const r = await onConfirm(dontAskAgain);
        if (r) close();
        return true;
      }}
      closeHandle={close}
      confirmText={confirmText}
      confirmType={confirmType}
      dontAskAgain={dontAskAgain}
      autoClose={isLast ? undefined : false} // override default behavior only if it's not last rendered modal
    />
  );
};

export const DynamicModal: FC<DynamicModalProps> = ({
  closeTimeout = 300,
  ...props
}) => {
  const [modals, setModals] = React.useState<EventModalProps[]>([]);

  const addModal = React.useCallback(
    (modal: EventModalProps) =>
      setModals((curr) => [...curr, { id: nanoid(), shown: true, ...modal }]),
    []
  );

  const hideModal = React.useCallback((id: string) => {
    setModals((curr) =>
      curr.map((m) => (m.id === id ? { ...m, shown: false } : m))
    );
  }, []);

  const deleteModal = useEvent((id: string) => {
    setModals((curr) =>
      curr.filter((m) => {
        if (m.id === id && typeof m.onClosed === "function") m.onClosed();
        return m.id !== id;
      })
    );
  });

  const closeModal = useEvent((id: string, cb?: () => unknown) => {
    hideModal(id);
    setTimeout(() => deleteModal(id), closeTimeout);
    if (cb) cb();
  });

  React.useEffect(() => {
    const cb = (m: EventModalProps) => addModal(m);
    eventManager.on("showModal", cb);
    return () => {
      eventManager.off("showModal", cb);
    };
  }, [addModal]);

  return (
    <FloatingTreeWrapper
      withPortal={true}
      portalId={props.id}
      portalRoot={props.root}
    >
      {modals.length > 0
        ? modals.map((modal, idx) => {
            switch (modal.modalType) {
              case "dynamic":
                return (
                  <CustomWrapper
                    {...modal}
                    key={modal.id}
                    close={() => closeModal(modal.id, modal.onModalClose)}
                    isLast={idx === modals.length - 1}
                  />
                );

              case "notification":
                return (
                  <NotificationWrapper
                    {...modal}
                    key={modal.id}
                    close={() => closeModal(modal.id, modal.onModalClose)}
                    isLast={idx === modals.length - 1}
                  />
                );

              case "prompt":
                return (
                  <PromptWrapper
                    {...modal}
                    key={modal.id}
                    close={() => closeModal(modal.id, modal.onModalClose)}
                    isLast={idx === modals.length - 1}
                  />
                );

              case "confirmation":
                return (
                  <ConfirmationWrapper
                    {...modal}
                    key={modal.id}
                    close={() => closeModal(modal.id, modal.onModalClose)}
                    isLast={idx === modals.length - 1}
                  />
                );

              default:
                return assertUnreachable(modal);
            }
          })
        : null}
    </FloatingTreeWrapper>
  );
};

export { DynamicModal as ConfirmationListener };
