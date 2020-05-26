import React from 'react';
import PropTypes from 'prop-types';

const InputHelpBaloon = ({
  baloon
}) => React.createElement("span", {
  "data-balloon": baloon,
  "data-balloon-length": "large",
  "data-balloon-pos": "up",
  className: "qtr-margin-left"
}, React.createElement("span", {
  className: "icon-question-circle",
  style: {
    cursor: "help"
  }
}));
InputHelpBaloon.propTypes = {
  baloon: PropTypes.string.isRequired
};

export { InputHelpBaloon };
