import React, { useCallback, useState } from "react";
import ReactModal from "react-modal";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalSize,
  DynamicModal,
  notification,
  confirmation,
  prompt,
  dynamicModal,
  PropsWithCloseModal,
} from "./index";
import { Button } from "../Button";

export default {
  title: "Modal",
};

const CustomDynamic = ({ close }: PropsWithCloseModal): JSX.Element => {
  return (
    <>
      <ModalBody>
        Any content goes here! Function can be awaited - check console
      </ModalBody>
      <ModalFooter>
        <Button.Light onClick={close}>OK</Button.Light>
      </ModalFooter>
    </>
  );
};

export const Primary = (): JSX.Element => {
  React.useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [modalSize, setModalSize] = useState<ModalSize>("default");

  const openModal = useCallback((size: ModalSize) => {
    setModalSize(size);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

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
        <ModalBody>Modal body goes here</ModalBody>
        <ModalFooter>
          <Button.Light onClick={closeModal}>OK</Button.Light>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Calls = (): JSX.Element => {
  const [confResult, setConfResult] = useState(null);
  const [promptResult, setPromptResult] = useState(null);

  React.useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Dynamic modals</h3>
        <div className="row">
          <div className="col-3">
            <Button
              onClick={() => {
                notification("Notificaion", "Some text", "danger");
              }}
            >
              Notification
            </Button>
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                setConfResult(null);
                confirmation("Please confirm", () => {
                  setConfResult(true);
                  return true;
                });
              }}
            >
              Confirmation
            </Button>
            {confResult ? <div>Confirmed</div> : null}
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                setConfResult(null);
                confirmation(
                  "Please confirm",
                  (dontAskAgain) => {
                    console.log("Don't ask again: ", dontAskAgain);
                    setConfResult(true);
                    return true;
                  },
                  undefined,
                  undefined,
                  { show: true }
                );
              }}
            >
              Confirmation
            </Button>
            <div>with don't ask option</div>
            {confResult ? <div>Confirmed</div> : null}
          </div>
          <div className="col-3">
            <Button
              onClick={() => {
                setPromptResult(null);
                prompt("Prompt", "Enter value:", (v) => {
                  console.log(v);
                  setPromptResult(v);
                });
              }}
            >
              Prompt
            </Button>
            {promptResult ? <div>Got: {promptResult}</div> : null}
          </div>
        </div>
      </div>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">With custom body</h3>
        <div className="row">
          <div className="col-3">
            <Button
              onClick={async () => {
                console.log("Opening dynamic modal");
                await dynamicModal({
                  title: "Custom body",
                  modalProps: { closeIcon: true },
                  fullBody: (props) => <CustomDynamic {...props} />,
                });
                console.log("Dynamic modal closed, awaited");
              }}
            >
              Show modal
            </Button>
          </div>
        </div>
      </div>
      <DynamicModal />
    </>
  );
};
