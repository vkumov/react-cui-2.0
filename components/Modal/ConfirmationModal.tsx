import React, { FC, ReactNode } from "react";

import { Button, ButtonColor } from "../Button";

import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
import { Modal } from "./Modal";

/**
 * Confirmation Modal
 */

type ConfirmationModalProps = {
  isOpen?: boolean;
  confirmHandle: (() => Promise<boolean>) | (() => boolean);
  closeHandle: (e) => void;
  prompt: ReactNode;
  confirmType?: ButtonColor;
  confirmText?: string;
  autoClose?: boolean;
};

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen = false,
  confirmType = "primary",
  autoClose = true,
  confirmText = "Confirm",
  confirmHandle,
  closeHandle,
  prompt,
}) => {
  const [doing, setDoing] = React.useState(false);

  return (
    <Modal
      isOpen={isOpen}
      closeIcon
      closeHandle={closeHandle}
      autoClose={autoClose}
      title="Confirmation"
    >
      <ModalBody>{prompt}</ModalBody>
      <ModalFooter>
        <Button.Light onClick={closeHandle}>Close</Button.Light>
        <Button
          color={confirmType}
          disabled={doing}
          onClick={async () => {
            setDoing(true);
            if (await confirmHandle()) setDoing(false);
          }}
        >
          {confirmText}
          {doing ? (
            <span className="icon-animation spin qtr-margin-left" />
          ) : null}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
