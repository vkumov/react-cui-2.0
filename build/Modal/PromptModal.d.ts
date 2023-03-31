import { type ComponentProps, type PropsWithChildren, type ReactNode } from "react";
import { Modal } from "./Modal";
/**
 * Prompt Modal
 */
export interface PromptModalProps<T extends string | number> {
    title: ReactNode;
    question: ReactNode;
    onSave: (value: T) => void | Promise<void>;
    onClose?: () => void;
    initial?: T;
    type?: string;
    isOpen: boolean;
    hint?: ReactNode;
    validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
    autoClose?: ComponentProps<typeof Modal>["autoClose"];
}
export declare function PromptModal<T extends string | number>({ title, question, onSave: cb, onClose, initial, type, isOpen, hint, validate, autoClose, }: PropsWithChildren<PromptModalProps<T>>): JSX.Element;
