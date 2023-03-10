import React, {
  type ChangeEvent,
  type ComponentProps,
  type KeyboardEvent,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import useEvent from "react-use-event-hook";

import { Button } from "src/Button";
import { DisplayIf as If } from "src/Conditional";
import { Input } from "src/Input";

import { ModalBody } from "./Body";
import { ModalFooter } from "./Footer";
import { Modal } from "./Modal";

/**
 * Prompt Modal
 */

export interface PromptModalProps<T extends string | number> {
  title: ReactNode;
  question: ReactNode;
  onSave: (value: T) => void | Promise<void>;
  onClose?: () => void;
  initial?: T;
  type?: string;
  isOpen: boolean;
  hint?: ReactNode;
  validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
  autoClose?: ComponentProps<typeof Modal>["autoClose"];
}

export function PromptModal<T extends string | number>({
  title,
  question,
  onSave: cb,
  onClose,
  initial,
  type,
  isOpen,
  hint,
  validate,
  autoClose,
}: PropsWithChildren<PromptModalProps<T>>): JSX.Element {
  const [val, setVal] = React.useState<T>(initial);
  const [doing, setDoing] = React.useState(false);
  const onSave = useEvent(async () => {
    if (typeof validate === "function" && !(await validate(val))) return;

    setDoing(true);
    await cb(val);
    setDoing(false);
    onClose();
  });

  React.useEffect(() => setVal(initial), [initial]);

  const inpRef = React.useRef<HTMLInputElement>(undefined);

  React.useEffect(() => {
    if (isOpen && inpRef.current) inpRef.current.focus();
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      closeIcon
      closeHandle={onClose}
      title={title}
      autoClose={autoClose}
    >
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
