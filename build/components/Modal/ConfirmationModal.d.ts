import { FC, ReactNode } from "react";
import { ButtonColor } from "../Button";
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
export {};
