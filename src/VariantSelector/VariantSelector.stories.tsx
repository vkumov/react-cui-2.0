import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { VariantSelector, VariantSelectorProps, Variant } from "./index";

export default {
  title: "Variant Selector",
  component: VariantSelector,
} as Meta;

export const Primary: Story<VariantSelectorProps & { content: string }> = (
  args
) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Variant Selector</h3>
      <VariantSelector
        {...args}
        variants={[
          {
            variant: "first",
            display: "First",
            component: (
              <div>
                <p>First one</p>
              </div>
            ),
          },
          {
            variant: "second",
            display: "Second",
            component: (
              <div>
                <p>Second one</p>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

Primary.args = {
  title: "Variant",
};
