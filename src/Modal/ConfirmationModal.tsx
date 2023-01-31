import React, { ChangeEvent, FC, ReactNode } from "react";

import { Button, ButtonColor } from "src/Button";

import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
import { Modal } from "./Modal";
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

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen = false,
  confirmType = "primary",
  autoClose = true,
  confirmText = "Confirm",
  confirmHandle,
  closeHandle,
  prompt,
  dontAskAgain = { show: false },
}) => {
  const [doing, setDoing] = React.useState(false);
  const [dontAsk, setDontAsk] = React.useState(false);

  return (
    <Modal
      isOpen={isOpen}
      closeIcon
      closeHandle={closeHandle}
      autoClose={autoClose}
      title="Confirmation"
    >
      <ModalBody>
        {prompt}
        {dontAskAgain?.show ? (
          <div className="form-group">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={dontAsk}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setDontAsk(e.target.checked);
                }}
              />
              <span className="checkbox__input"></span>
              <span className="checkbox__label">
                {dontAskAgain.text || "Don't ask again"}
              </span>
            </label>
          </div>
        ) : null}
      </ModalBody>
      <ModalFooter>
        <Button.Light onClick={closeHandle}>Close</Button.Light>
        <Button
          color={confirmType}
          disabled={doing}
          onClick={async () => {
            setDoing(true);
            if (await confirmHandle(dontAsk)) setDoing(false);
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
