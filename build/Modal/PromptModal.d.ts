import React, { ReactNode, PropsWithChildren } from "react";
/**
 * Prompt Modal
 */
export interface PromptModalProps<T extends React.ReactText> {
    title: ReactNode;
    question: ReactNode;
    onSave: (value: T) => void | Promise<void>;
    onClose?: () => void;
    initial?: T;
    type?: string;
    isOpen: boolean;
    hint?: ReactNode;
    validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
}
export declare function PromptModal<T extends React.ReactText>({ title, question, onSave: cb, onClose, initial, type, isOpen, hint, validate, }: PropsWithChildren<PromptModalProps<T>>): JSX.Element;
