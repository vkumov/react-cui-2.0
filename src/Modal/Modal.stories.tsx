import React, { useCallback, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import dedent from "ts-dedent";

import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import {
  Modal,
  ModalBody,
  ModalFooter,
  confirmation,
  dynamicModal,
} from "./index";

export default {
  title: "Components/Modal",
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
  component: Modal,
} as Meta<typeof Modal>;

const InnerModal: React.FC = () => {
  const onOpen = () => {
    dynamicModal({
      title: "I'm nested",
      fullBody: ({ close }) => (
        <>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            rerum saepe magnam, iusto, ab totam recusandae ipsum obcaecati
            officiis impedit accusantium hic unde deserunt ratione dolores,
            consequuntur et quo! Culpa?
          </ModalBody>
          <ModalFooter>
            <Button onClick={close}>OK</Button>
          </ModalFooter>
        </>
      ),
    });
  };

  return <Button.Light onClick={onOpen}>Open small nested modal</Button.Light>;
};

export const Default: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const [conf, setConf] = useState(false);

  const openModal = useCallback(() => {
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
      <Button onClick={openModal}>Open modal</Button>
      <Modal {...args} isOpen={isOpen}>
        <ModalBody>
          <div>Modal body goes here</div>
          <div className="base-margin-top base-margin-bottom">
            <InnerModal />
          </div>
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

Default.args = {
  size: "default",
  title: "This is modal",
};

Default.parameters = {
  docs: {
    source: {
      code: dedent`const InnerModal: React.FC = () => {
        const onOpen = () => {
          dynamicModal({
            title: "I'm nested",
            fullBody: ({ close }) => (
              <>
                <ModalBody>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                  rerum saepe magnam, iusto, ab totam recusandae ipsum obcaecati
                  officiis impedit accusantium hic unde deserunt ratione dolores,
                  consequuntur et quo! Culpa?
                </ModalBody>
                <ModalFooter>
                  <Button onClick={close}>OK</Button>
                </ModalFooter>
              </>
            ),
          });
        };
      
        return <Button.Light onClick={onOpen}>Open small nested modal</Button.Light>;
      };
      
      const ComponentWithModal: React.FC = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [conf, setConf] = useState(false);
      
        const openModal = useCallback(() => {
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
            <Button onClick={openModal}>Open modal</Button>
            <Modal isOpen={isOpen}>
              <ModalBody>
                <div>Modal body goes here</div>
                <div className="base-margin-top base-margin-bottom">
                  <InnerModal />
                </div>
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
      
      const App = () => {
        return <ModalProvider><ComponentWithModal /></ModalProvider>
      }`,
    },
  },
};
