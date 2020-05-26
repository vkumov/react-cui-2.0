import React from 'react';
import PropTypes from 'prop-types';

const VerticalCenter = ({
  children
}) => React.createElement("div", {
  className: "content-fluid",
  style: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  }
}, React.createElement("main", {
  style: {
    display: "flex",
    flexDirection: "column",
    flex: 1
  }
}, children));

VerticalCenter.propTypes = {
  children: PropTypes.node.isRequired
};

export default VerticalCenter;
