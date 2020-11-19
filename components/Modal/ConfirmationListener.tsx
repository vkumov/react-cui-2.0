import React, { FC } from "react";

import { Button } from "../Button";

import { eventManager, EVENTS } from "../../utils";

import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
import { Modal } from "./Modal";
import { ConfirmationModal } from "./ConfirmationModal";
import { PromptModal } from "./PromptModal";

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
