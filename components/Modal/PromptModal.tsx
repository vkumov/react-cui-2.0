import React, { ReactNode, PropsWithChildren, ChangeEvent } from "react";
import { Input } from "../Input";
import { DisplayIf as If } from "../Conditional";
import { Button } from "../Button";

import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
import { Modal } from "./Modal";

/**
 * Prompt Modal
 */

interface PromptModalProps<T extends React.ReactText> {
  title: ReactNode;
  question: ReactNode;
  onSave: (value: T) => void | Promise<void>;
  onClose?: (e?) => void;
  initial?: T;
  type?: string;
  isOpen: boolean;
  hint?: ReactNode;
  validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
}

export function PromptModal<T extends React.ReactText>({
  title,
  question,
  onSave: cb,
  onClose,
  initial,
  type,
  isOpen,
  hint,
  validate,
}: PropsWithChildren<PromptModalProps<T>>): JSX.Element {
  const [val, setVal] = React.useState<T>(initial);
  const [doing, setDoing] = React.useState(false);
  const onSave = React.useCallback(async () => {
    if (typeof validate === "function" && !(await validate(val))) return;

    setDoing(true);
    await cb(val);
    setDoing(false);
    onClose();
  }, [onClose, cb, val, validate]);

  React.useLayoutEffect(() => setVal(initial), [initial]);

  return (
    <Modal isOpen={isOpen} closeIcon closeHandle={onClose} title={title}>
      <ModalBody>
        <Input
          type={type}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setVal(e.target.value as T)
          }
          name="promptInput"
          value={val}
          label={
            <>
              {question}
              <If condition={!!hint && typeof hint === "string"}>
                <span
                  data-balloon={hint}
                  data-balloon-length="large"
                  data-balloon-pos="up"
                >
                  <span
                    className="icon-question-circle qtr-margin-left"
                    style={{ cursor: "help" }}
                  />
                </span>
              </If>
            </>
          }
        />
      </ModalBody>
      <ModalFooter>
        <Button color="light" onClick={onClose} disabled={doing}>
          Close
        </Button>
        <Button color="primary" onClick={onSave} disabled={doing}>
          OK
          {doing ? (
            <span className="icon-animation spin qtr-margin-left" />
          ) : null}
        </Button>
      </ModalFooter>
    </Modal>
  );
}

PromptModal.defaultProps = {
  onClose: null,
  initial: null,
  type: "text",
  hint: null,
  validate: null,
};
