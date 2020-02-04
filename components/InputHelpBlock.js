import React from "react";

export const InputHelpBlock = ({ text }) => (
  <div className={`help-block text-danger`} role="alert">
    <span>{text}</span>
  </div>
);
