import React, { useState } from "react";
import {
  ModalBody,
  ModalFooter,
  notification,
  confirmation,
  prompt,
  dynamicModal,
  PropsWithCloseModal,
} from "./index";
import { Button } from "../Button";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Modal/Dynamic Calls",
} as Meta;

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

export const Notificaion: Story = () => {
  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Notification dynamic modal</h3>
        <Button
          onClick={() => {
            notification(
              "Notificaion",
              "Notification can be awaited!",
              "danger"
            );
          }}
        >
          Show notification
        </Button>
      </div>
    </>
  );
};

export const Confirmation: Story = () => {
  const [confResult, setConfResult] = useState(null);

  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Confirmation dynamic modals</h3>
      <div className="row">
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
      </div>
    </div>
  );
};

export const Prompt: Story = () => {
  const [promptResult, setPromptResult] = useState(null);

  return (
    <>
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Prompt dynamic modals</h3>
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
    </>
  );
};

export const CustomBody: Story = () => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Dynamic modal with custom body</h3>
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
  );
};
