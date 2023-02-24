import EventEmitter from "eventemitter3";

export type EventModalProps = {
  modalType: "confirmation" | "notification" | "prompt" | "dynamic";
  onModalClose?: () => unknown;
  [prop: string]: any;
};

interface KnownEvents {
  showModal: (modal: EventModalProps) => void;
}

export const eventManager = new EventEmitter<KnownEvents>();
