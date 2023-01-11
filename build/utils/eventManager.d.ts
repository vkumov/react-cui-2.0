import EventEmitter from 'eventemitter3';

type ModalProps = {
    modalType: "confirmation" | "notification" | "prompt" | "dynamic";
    onModalClose?: () => unknown;
    [prop: string]: any;
};
interface KnownEvents {
    showModal: (modal: ModalProps) => void;
}
declare const eventManager: EventEmitter<KnownEvents, any>;

export { eventManager };
