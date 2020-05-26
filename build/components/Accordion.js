import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/anchor-is-valid */
const AccordionElement = ({
  children,
  defaultOpen,
  toggles,
  title
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  return React.createElement("li", {
    className: isOpen ? "active" : ""
  }, React.createElement("a", {
    className: "accordion__title",
    onClick: () => setIsOpen(prev => !prev)
  }, React.createElement("span", null, title), toggles ? React.createElement("span", {
    className: "accordion__toggle icon-chevron-down"
  }) : null), React.createElement("div", {
    className: "accordion__content"
  }, children));
};
AccordionElement.propTypes = {
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
  toggles: PropTypes.bool,
  title: PropTypes.node.isRequired
};
AccordionElement.defaultProps = {
  defaultOpen: false,
  toggles: false
};
const Accordion = ({
  children,
  toggles,
  bordered
}) => {
  return React.createElement("ul", {
    className: `accordion${bordered ? " accordion--bordered" : ""}`
  }, React.Children.map(children, (child, idx) => React.cloneElement(child, {
    toggles,
    key: child.props.key || idx
  })));
};
Accordion.Element = AccordionElement;
Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  toggles: PropTypes.bool,
  bordered: PropTypes.bool
};
Accordion.defaultProps = {
  toggles: false,
  bordered: false
};

export { Accordion, AccordionElement };
