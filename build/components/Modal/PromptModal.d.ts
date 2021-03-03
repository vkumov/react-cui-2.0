import React, { ReactNode, PropsWithChildren } from "react";
/**
 * Prompt Modal
 */
interface PromptModalProps<T extends React.ReactText> {
    title: ReactNode;
    question: ReactNode;
    onSave: (value: T) => void | Promise<void>;
    onClose?: (e?: any) => void;
    initial?: T;
    type?: string;
    isOpen: boolean;
    hint?: ReactNode;
    validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
}
export declare function PromptModal<T extends React.ReactText>({ title, question, onSave: cb, onClose, initial, type, isOpen, hint, validate, }: PropsWithChildren<PromptModalProps<T>>): JSX.Element;
export declare namespace PromptModal {
    var defaultProps: {
        onClose: any;
        initial: any;
        type: string;
        hint: any;
        validate: any;
    };
}
export {};
