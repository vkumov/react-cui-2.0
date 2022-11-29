import { FC, ReactNode } from "react";
import { ButtonColor } from "../Button";
import type { DontAskAgain } from "./calls";
/**
 * Confirmation Modal
 */
type ConfirmationModalProps = {
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
export {};
