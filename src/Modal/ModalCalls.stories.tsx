import React, { useEffect, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import dedent from "ts-dedent";

import { Button } from "../Button";
import { Dropdown, MenuElement } from "../Dropdown";
import { Popover, PopoverTitle } from "../Popover";
import {
  ModalBody,
  ModalFooter,
  confirmation,
  dynamicModal,
  notification,
  prompt,
  type PropsWithCloseModal,
} from "./index";

export default {
  title: "Components/Modal/Dynamic Calls",
  parameters: {
    docs: {
      source: {
        language: "tsx",
      },
    },
  },
} as Meta;

const CustomDynamic = ({ close }: PropsWithCloseModal): JSX.Element => {
  return (
    <>
      <ModalBody>
        <div className="base-margin-bottom">
          Any content goes here! Function can be awaited - check console
        </div>
        <div className="base-margin-top base-margin-bottom">
          <Dropdown label={<a>Dropdown inside!</a>} alwaysClose>
            {Array(50)
              .fill(true)
              .map((_, idx) => (
                <MenuElement key={idx}>{idx}</MenuElement>
              ))}
          </Dropdown>
        </div>
        <div className="base-margin-top base-margin-bottom">
          <Popover element={<Button>And even popovers</Button>}>
            <PopoverTitle>Popover title!</PopoverTitle>
            <div>Popover body here</div>
            <Dropdown
              label={<a>Dropdown in popover!</a>}
              alwaysClose
              withSizeLimit
            >
              {Array(50)
                .fill(true)
                .map((_, idx) => (
                  <MenuElement key={idx}>{idx}</MenuElement>
                ))}
            </Dropdown>
          </Popover>
        </div>
        <Button.Primary
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
          And nested modals
        </Button.Primary>
      </ModalBody>
      <ModalFooter>
        <Button.Light onClick={close}>OK</Button.Light>
      </ModalFooter>
    </>
  );
};

export const Notificaion = () => {
  return (
    <Button
      onClick={() => {
        notification("Notificaion", "Notification can be awaited!", "danger");
      }}
    >
      Show notification
    </Button>
  );
};

export const Confirmation = () => {
  const [confResult, setConfResult] = useState<boolean | null>(null);

  return (
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
  );
};

export const Prompt = () => {
  const [promptResult, setPromptResult] = useState<string | number | null>(
    null
  );

  return (
    <>
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
    </>
  );
};

export const CustomBody: StoryFn = () => {
  const [ref, setRef] = useState(null);

  useEffect(() => {
    console.log("Ref:", ref);
  }, [ref]);

  return (
    <Button
      onClick={async () => {
        console.log("Opening dynamic modal");
        await dynamicModal({
          title: "Custom body",
          modalProps: {
            closeIcon: true,
            dialogProps: { ref: setRef as any },
          },
          fullBody: (props) => <CustomDynamic {...props} />,
        });
        console.log("Dynamic modal closed, awaited");
      }}
    >
      Show modal
    </Button>
  );
};

CustomBody.parameters = {
  docs: {
    source: {
      code: dedent`const CustomDynamic = ({ close }: PropsWithCloseModal): JSX.Element => {
        return (
          <>
            <ModalBody>
              <div className="base-margin-bottom">
                Any content goes here! Function can be awaited - check console
              </div>
              <div className="base-margin-top base-margin-bottom">
                <Dropdown label={<a>Dropdown inside!</a>} alwaysClose>
                  {Array(50)
                    .fill(true)
                    .map((_, idx) => (
                      <MenuElement key={idx}>{idx}</MenuElement>
                    ))}
                </Dropdown>
              </div>
              <div className="base-margin-top base-margin-bottom">
                <Popover element={<Button>And even popovers</Button>}>
                  <PopoverTitle>Popover title!</PopoverTitle>
                  <div>Popover body here</div>
                </Popover>
              </div>
              <Button.Primary
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
                And nested modals
              </Button.Primary>
            </ModalBody>
            <ModalFooter>
              <Button.Light onClick={close}>OK</Button.Light>
            </ModalFooter>
          </>
        );
      };
      
      const CustomBody: React.FC = () => {
        const [ref, setRef] = useState(null);
      
        useEffect(() => {
          console.log("Ref:", ref);
        }, [ref]);
      
        return (
          <Button
            onClick={async () => {
              console.log("Opening dynamic modal");
              await dynamicModal({
                title: "Custom body",
                modalProps: {
                  closeIcon: true,
                  dialogProps: { ref: setRef as any },
                },
                fullBody: (props) => <CustomDynamic {...props} />,
              });
              console.log("Dynamic modal closed, awaited");
            }}
          >
            Show modal
          </Button>
        );
      };`,
    },
  },
};
