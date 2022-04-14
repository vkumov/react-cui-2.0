import EventEmitter from "eventemitter3";
declare type ModalProps = {
    modalType: "confirmation" | "notification" | "prompt" | "dynamic";
    onModalClose?: () => unknown;
    [prop: string]: any;
};
interface KnownEvents {
    showModal: (modal: ModalProps) => void;
}
export declare const eventManager: EventEmitter<KnownEvents, any>;
export {};
