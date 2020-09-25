import React, { FC } from "react";
import PropTypes from "prop-types";

type InputHelpBaloonProps = {
  baloon: string;
};

export const InputHelpBaloon: FC<InputHelpBaloonProps> = ({ baloon }) => (
  <span
    data-balloon={baloon}
    data-balloon-length="large"
    data-balloon-pos="up"
    className="qtr-margin-left"
  >
    <span className="icon-question-circle" style={{ cursor: "help" }} />
  </span>
);

InputHelpBaloon.propTypes = {
  baloon: PropTypes.string.isRequired,
};
