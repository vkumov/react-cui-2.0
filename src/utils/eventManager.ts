import type React from "react";
import EventEmitter from "eventemitter3";

import type { ButtonProps } from "src/Button";
import type {
  ConfirmationModalProps,
  ModalProps,
  PromptModalProps,
} from "src/Modal";

type Callback = () => void;
export type FullBodyProps = { close: Callback };
type FullBodyRenderer = (props: FullBodyProps) => React.ReactElement;

type CommonModalProps = {
  onModalClose?: () => unknown;
  title?: React.ReactNode;
  onClosed?: Callback;
};

type PromptOptions<T extends string | number = any> = {
  initial: PromptModalProps<T>["initial"];
  type: PromptModalProps<T>["type"];
  hint: PromptModalProps<T>["hint"];
  validate: PromptModalProps<T>["validate"];
};

export type EventModalProps = (
  | {
      modalType: "confirmation";
      prompt: ConfirmationModalProps["prompt"];
      onConfirm: ConfirmationModalProps["confirmHandle"];
      confirmText?: ConfirmationModalProps["confirmText"];
      confirmType?: ConfirmationModalProps["confirmType"];
      dontAskAgain?: ConfirmationModalProps["dontAskAgain"];
    }
  | {
      modalType: "notification";
      body: React.ReactNode;
      buttonColor?: ButtonProps["color"];
      button: React.ReactNode;
    }
  | ({
      modalType: "prompt";
      options?: Partial<PromptOptions>;
      question: React.ReactNode;
      cb: PromptModalProps<any>["onSave"];
    } & Omit<Partial<PromptOptions>, "validate">)
  | {
      modalType: "dynamic";
      fullBody:
        | React.ReactElement<FullBodyProps & Record<string, any>>
        | FullBodyRenderer;
      modalProps?: Partial<ModalProps>;
      body?: React.ReactNode;
      buttons?: {
        text?: React.ReactNode;
        color?: ButtonProps["color"];
        onClick?: (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
          close: Callback
        ) => void;
      }[];
    }
) &
  CommonModalProps;

interface KnownEvents {
  showModal: (modal: EventModalProps) => void;
}

export const eventManager = new EventEmitter<KnownEvents>();
