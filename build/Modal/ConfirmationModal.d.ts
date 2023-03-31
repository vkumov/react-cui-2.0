import { type FC, type ReactNode } from "react";
import { type ButtonColor } from "../Button";
import type { DontAskAgain } from "./calls";
/**
 * Confirmation Modal
 */
export type ConfirmationModalProps = {
    isOpen?: boolean;
    confirmHandle: (dontAskAgain?: boolean) => boolean | Promise<boolean>;
    closeHandle: () => void;
    prompt: ReactNode;
    confirmType?: ButtonColor;
    confirmText?: string;
    autoClose?: boolean;
    dontAskAgain?: DontAskAgain;
};
export declare const ConfirmationModal: FC<ConfirmationModalProps>;
