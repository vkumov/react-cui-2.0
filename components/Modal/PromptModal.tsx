import React, { ReactNode, PropsWithChildren } from "react";
import PropTypes from "prop-types";

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
  const onSave = React.useCallback(async () => {
    if (typeof validate === "function" && !(await validate(val))) return;

    onClose();
    cb(val);
  }, [onClose, cb, val, validate]);

  React.useLayoutEffect(() => setVal(initial), [initial]);

  return (
    <Modal isOpen={isOpen} closeIcon closeHandle={onClose} title={title}>
      <ModalBody>
        <Input
          type={type}
          form={{ errors: {}, touched: {}, values: { promptInput: val } }}
          field={{
            onChange: (e) => setVal(e.target.value),
            name: "promptInput",
            value: val,
          }}
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
        <Button color="light" onClick={onClose}>
          Close
        </Button>
        <Button color="primary" onClick={onSave}>
          OK
        </Button>
      </ModalFooter>
    </Modal>
  );
}

PromptModal.propTypes = {
  title: PropTypes.node.isRequired,
  question: PropTypes.node.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  initial: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  hint: PropTypes.node,
  validate: PropTypes.func,
};

PromptModal.defaultProps = {
  onClose: null,
  initial: null,
  type: "text",
  hint: null,
  validate: null,
};
