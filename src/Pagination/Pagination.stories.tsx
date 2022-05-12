import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Pagination as LibPagination, PaginationProps } from "./index";

export default {
  title: "Components/Pagination",
  component: LibPagination,
} as Meta;

export const Pagination: Story<PaginationProps> = (args) => {
  return (
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Pagination</h3>
      <LibPagination {...args} />
    </div>
  );
};

Pagination.args = {
  total: 50,
  position: 6,
};
