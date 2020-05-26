import React from 'react';

const InputHelpBlock = ({
  text
}) => React.createElement("div", {
  className: "form-group__help",
  role: "alert"
}, React.createElement("span", null, text));

export { InputHelpBlock };
