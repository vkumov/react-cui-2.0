import React, { FC, cloneElement } from "react";
import { nanoid } from "nanoid";

import { Button } from "src/Button";
import {
  eventManager,
  type EventModalProps as EMP,
} from "src/utils/eventManager";

import { ModalBody } from "./Body";
import { ConfirmationModal } from "./ConfirmationModal";
import { ModalFooter } from "./Footer";
import { Modal } from "./Modal";
import { ModalPortal, ModalPortalProps } from "./ModalPortal";
import { PromptModal } from "./PromptModal";

export type DynamicModalProps = Pick<
  ModalPortalProps,
  "root" | "id" | "preserveTabOrder"
>;

type EventModalProps = EMP & { id: string; shown: boolean };

export const DynamicModal: FC<DynamicModalProps> = (props) => {
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

  const deleteModal = React.useCallback((id: string) => {
    setModals((curr) =>
      curr.filter((m) => {
        if (m.id === id && typeof m.onClosed === "function") m.onClosed();
        return m.id !== id;
      })
    );
  }, []);

  const closeModal = React.useCallback(
    (id: string, cb?: () => unknown) => {
      hideModal(id);
      setTimeout(() => deleteModal(id), 500);
      if (cb) cb();
    },
    [hideModal, deleteModal]
  );

  React.useEffect(() => {
    const cb = (m: EventModalProps) => addModal(m);
    eventManager.on("showModal", cb);
    return () => {
      eventManager.off("showModal", cb);
    };
  }, [addModal]);

  return (
    <ModalPortal {...props}>
      {modals.length > 0
        ? modals.map((modal) => {
            if (modal.modalType === "dynamic")
              return (
                <Modal
                  {...modal.modalProps}
                  key={modal.id}
                  isOpen={modal.shown}
                  closeHandle={() => closeModal(modal.id, modal.onModalClose)}
                  title={modal.title}
                >
                  {modal.fullBody ? (
                    typeof modal.fullBody === "function" ? (
                      modal.fullBody({
                        close: () => closeModal(modal.id, modal.onModalClose),
                      })
                    ) : (
                      cloneElement(modal.fullBody, {
                        close: () => closeModal(modal.id, modal.onModalClose),
                      })
                    )
                  ) : (
                    <>
                      <ModalBody>{modal.body}</ModalBody>
                      <ModalFooter>
                        {modal.buttons.map((button, idx) => (
                          <Button
                            key={idx}
                            color={button.color || "light"}
                            onClick={(e) => {
                              if (typeof button.onClick === "function")
                                button.onClick(e, () =>
                                  closeModal(modal.id, modal.onModalClose)
                                );
                              else closeModal(modal.id, modal.onModalClose);
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

            if (modal.modalType === "notification")
              return (
                <Modal
                  key={modal.id}
                  isOpen={modal.shown}
                  closeIcon
                  closeHandle={() => closeModal(modal.id, modal.onModalClose)}
                  title={modal.title}
                >
                  <ModalBody>{modal.body}</ModalBody>
                  <ModalFooter>
                    <Button
                      color={modal.buttonColor || "light"}
                      onClick={() => closeModal(modal.id, modal.onModalClose)}
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
                    onClose={() => closeModal(modal.id, modal.onModalClose)}
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
                  onClose={() => closeModal(modal.id, modal.onModalClose)}
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
                  confirmHandle={async (dontAskAgain) => {
                    const r = await modal.onConfirm(dontAskAgain);
                    if (r) closeModal(modal.id, modal.onModalClose);
                    return true;
                  }}
                  closeHandle={() => closeModal(modal.id, modal.onModalClose)}
                  confirmText={modal.confirmText}
                  confirmType={modal.confirmType}
                  dontAskAgain={modal.dontAskAgain}
                />
              );

            return null;
          })
        : null}
    </ModalPortal>
  );
};

export { DynamicModal as ConfirmationListener };
