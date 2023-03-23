import React, { useRef } from "react";
import { Meta, StoryObj } from "@storybook/react";
import dedent from "ts-dedent";

import { Button } from "../Button";
import { Popover, PopoverHandlers, PopoverTitle, usePopover } from "./";

export default {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
      },
    },
  },
} as Meta<typeof Popover>;

export const Default: StoryObj<typeof Popover> = {
  render: function Render(args) {
    const { refs, open, render } = usePopover({
      offset: 8,
    });

    const impHandle = useRef<PopoverHandlers>(null);

    return (
      <div className="section base-margin-top dbl-margin-bottom">
        <h3 className="display-5">Popover (Using FloatingUI)</h3>
        <div className="row">
          <div className="col text-center">
            <Popover {...args} element={<Button>Click me!</Button>}>
              <PopoverTitle>Popover title!</PopoverTitle>
              <div>And body here!</div>
            </Popover>
          </div>
          <div className="col text-center">
            <Button
              onContextMenu={(e) => {
                e.preventDefault();
                refs.setReference(e.currentTarget);
                open();
              }}
            >
              Right click on me!
            </Button>
            {render(<>Hey!</>)}
          </div>
          <div className="col text-center">
            <Popover
              element={<Button>Using imperative handle</Button>}
              ref={impHandle}
            >
              <PopoverTitle>Imperative handle</PopoverTitle>
              <Button
                onClick={() => {
                  impHandle.current?.close();
                }}
              >
                Close
              </Button>
            </Popover>
          </div>
        </div>
      </div>
    );
  },
  args: {
    placement: "top",
  },
  parameters: {
    docs: {
      source: {
        code: dedent`function Render() {
          const { refs, open, render } = usePopover({
            offset: 8,
          });

          const impHandle = useRef<PopoverHandlers>(null);
      
          return (
            <div className="section base-margin-top dbl-margin-bottom">
              <h3 className="display-5">Popover (Using FloatingUI)</h3>
              <div className="row">
                <div className="col text-center">
                  <Popover {...args} element={<Button>Click me!</Button>}>
                    <PopoverTitle>Popover title!</PopoverTitle>
                    <div>And body here!</div>
                  </Popover>
                </div>
                <div className="col text-center">
                  <Button
                    onContextMenu={(e) => {
                      e.preventDefault();
                      refs.setReference(e.currentTarget);
                      open();
                    }}
                  >
                    Right click on me!
                  </Button>
                  {render(<>Hey!</>)}
                </div>
                <div className="col text-center">
                  <Popover
                    element={<Button>Using imperative handle</Button>}
                    ref={impHandle}
                  >
                    <PopoverTitle>Imperative handle</PopoverTitle>
                    <Button
                      onClick={() => {
                        impHandle.current?.close();
                      }}
                    >
                      Close
                    </Button>
                  </Popover>
                </div>
              </div>
            </div>
          );
        }`,
      },
    },
  },
};
