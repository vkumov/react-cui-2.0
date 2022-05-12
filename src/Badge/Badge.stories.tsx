import React from "react";
import { BadgeColor, WithBadge } from "./index";

export default {
  title: "Components/Badge",
};

const colors: BadgeColor[] = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "info",
  "warning",
  "warning-alt",
  "danger",
  "dark",
  "light",
];

export const Badge = () => (
  <>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Color</h3>
      <div className="row">
        {colors.map((clr, idx) => (
          <div className="col-2 base-margin-bottom" key={clr}>
            <div className="subheader">{clr}</div>
            <WithBadge badge={idx} color={clr}>
              <span className="icon-alert icon-size-32" />
            </WithBadge>
          </div>
        ))}
      </div>
    </div>
    <div className="section base-margin-top dbl-margin-bottom">
      <h3 className="display-5">Size</h3>
      <div className="row">
        <div className="col-2">
          <WithBadge badge={3} color="danger" size="dot">
            <span className="icon-alert icon-size-32" />
          </WithBadge>
        </div>
        <div className="col-2">
          <WithBadge badge={3} size="tiny">
            <span className="icon-alert icon-size-32" />
          </WithBadge>
        </div>
        <div className="col-2">
          <WithBadge badge={3} size="small">
            <span className="icon-alert icon-size-32" />
          </WithBadge>
        </div>
        <div className="col-2">
          <WithBadge badge={3}>
            <span className="icon-alert icon-size-32" />
          </WithBadge>
        </div>
        <div className="col-2">
          <WithBadge badge={3} size="large">
            <span className="icon-alert icon-size-32" />
          </WithBadge>
        </div>
      </div>
    </div>
  </>
);
