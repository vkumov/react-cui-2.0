import React, {
  ReactNode,
  PropsWithChildren,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { Input } from "src/Input";
import { DisplayIf as If } from "src/Conditional";
import { Button } from "src/Button";

import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
import { Modal } from "./Modal";

/**
 * Prompt Modal
 */

export interface PromptModalProps<T extends React.ReactText> {
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

  React.useEffect(() => setVal(initial), [initial]);

  const inpRef = React.useRef<HTMLInputElement>(undefined);

  React.useEffect(() => {
    if (isOpen && inpRef.current) inpRef.current.focus();
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} closeIcon closeHandle={onClose} title={title}>
      <ModalBody>
        <Input
          type={type}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setVal(e.target.value as T)
          }
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onSave();
            }
          }}
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
          ref={inpRef}
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
