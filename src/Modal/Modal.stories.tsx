import React, { useCallback, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalSize,
  confirmation,
} from "./index";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Modal",
} as Meta;

export const Modals: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalSize, setModalSize] = useState<ModalSize>("default");
  const [conf, setConf] = useState(false);

  const openModal = useCallback((size: ModalSize) => {
    setModalSize(size);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    if (conf)
      confirmation(
        "Please confirm",
        () => {
          setIsOpen(false);
          return true;
        },
        "primary",
        "Confirm!"
      );
    else setIsOpen(false);
  }, [conf]);

  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Size</h3>
        <div className="row">
          <div className="col">
            <Button
              onClick={() => {
                openModal("small");
              }}
            >
              Small
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => {
                openModal("default");
              }}
            >
              Default
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => {
                openModal("large");
              }}
            >
              Large
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => {
                openModal("full");
              }}
            >
              Full
            </Button>
          </div>
          <div className="col">
            <Button
              onClick={() => {
                openModal("fluid");
              }}
            >
              Fluid
            </Button>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <Modal
        size={modalSize}
        isOpen={isOpen}
        closeHandle={closeModal}
        closeIcon
        title={`This is ${modalSize} modal`}
      >
        <ModalBody>
          <div>Modal body goes here</div>
          <Checkbox checked={conf} onChange={() => setConf((c) => !c)}>
            Confirm on close
          </Checkbox>
        </ModalBody>
        <ModalFooter>
          <Button.Light onClick={closeModal}>OK</Button.Light>
        </ModalFooter>
      </Modal>
    </>
  );
};
