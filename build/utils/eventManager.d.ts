import EventEmitter from 'eventemitter3';

type EventModalProps = {
    modalType: "confirmation" | "notification" | "prompt" | "dynamic";
    onModalClose?: () => unknown;
    [prop: string]: any;
};
interface KnownEvents {
    showModal: (modal: EventModalProps) => void;
}
declare const eventManager: EventEmitter<KnownEvents, any>;

export { EventModalProps, eventManager };
