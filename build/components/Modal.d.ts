import React, { FC, ReactNode, PropsWithChildren } from "react";
import PropTypes from "prop-types";
import { ButtonColor } from "./Button";
import "../css/modal.css";
/**
 * Modal Header
 */
declare type ModalHeaderProps = {
    className?: string;
    children: ReactNode;
};
export declare const ModalHeader: FC<ModalHeaderProps>;
/**
 * Modal Body
 */
declare type ModalBodyProps = {
    className?: string;
    children: ReactNode;
};
export declare const ModalBody: FC<ModalBodyProps>;
/**
 * Modal Footer
 */
declare type ModalFooterProps = {
    className?: string;
    children: ReactNode;
};
export declare const ModalFooter: FC<ModalFooterProps>;
/**
 * Modal
 */
declare type ModalProps = {
    size?: "small" | "default" | "large" | "full" | "fluid";
    closeIcon?: boolean;
    closeHandle?: (e: any) => void;
    title?: ReactNode;
    isOpen: boolean;
    autoClose?: boolean;
    left?: boolean;
    animationDuration?: number | {
        entering: number;
        exiting: number;
    };
    children: ReactNode;
    transitionEvents?: Record<string, unknown>;
    dialogProps?: React.ComponentProps<"div">;
    contentProps?: React.ComponentProps<"div">;
    maximize?: boolean;
};
declare type ModalSizes = {
    Small: FC<ModalProps>;
    Large: FC<ModalProps>;
    Full: FC<ModalProps>;
    Fluid: FC<ModalProps>;
};
declare type ModalComponents = {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
};
export declare const Modal: ModalSizes & ModalComponents & FC<ModalProps>;
/**
 * Confirmation Modal
 */
declare type ConfirmationModalProps = {
    isOpen?: boolean;
    confirmHandle: (() => Promise<boolean>) | (() => boolean);
    closeHandle: (e: any) => void;
    prompt: ReactNode;
    confirmType?: ButtonColor;
    confirmText?: string;
    autoClose?: boolean;
};
export declare const ConfirmationModal: FC<ConfirmationModalProps>;
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
    var propTypes: {
        title: PropTypes.Validator<PropTypes.ReactNodeLike>;
        question: PropTypes.Validator<PropTypes.ReactNodeLike>;
        onSave: PropTypes.Validator<(...args: any[]) => any>;
        onClose: PropTypes.Requireable<(...args: any[]) => any>;
        initial: PropTypes.Requireable<React.ReactText>;
        type: PropTypes.Requireable<string>;
        isOpen: PropTypes.Validator<boolean>;
        hint: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        validate: PropTypes.Requireable<(...args: any[]) => any>;
    };
    var defaultProps: {
        onClose: any;
        initial: any;
        type: string;
        hint: any;
        validate: any;
    };
}
export declare const ConfirmationListener: FC;
export { ConfirmationListener as DynamicModal };
export declare const confirmation: (prompt: ReactNode, onConfirm: () => boolean | Promise<boolean>, confirmType?: ButtonColor, confirmText?: string) => void;
export declare const notificationModal: (title: ReactNode, body: ReactNode, buttonColor?: ButtonColor, button?: string) => void;
export { notificationModal as notification };
export declare const prompt: (title: React.ReactText, question: ReactNode, cb: (value: unknown) => void | Promise<void>, initial?: string, type?: string, hint?: any) => void;
