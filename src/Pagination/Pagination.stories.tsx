import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Pagination, PaginationProps } from "./index";

export default {
  title: "Pagination",
  component: Pagination,
} as Meta;

export const Primary: Story<PaginationProps> = (args) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Pagination</h3>
      <Pagination {...args} />
    </div>
  );
};

Primary.args = {
  total: 50,
  position: 6,
};
