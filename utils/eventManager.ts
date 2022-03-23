import EventEmitter from "eventemitter3";

type ModalProps = {
  modalType: "confirmation" | "notification" | "prompt" | "dynamic";
  onModalClose?: () => unknown;
  [prop: string]: any;
};

interface KnownEvents {
  showModal: (modal: ModalProps) => void;
}

export const eventManager = new EventEmitter<KnownEvents>();
