/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";

const AccordionElement = ({ children, defaultOpen, toggles, title }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <li className={isOpen ? "active" : ""}>
      <a className="accordion__title" onClick={() => setIsOpen(prev => !prev)}>
        <span>{title}</span>
        {toggles ? (
          <span className="accordion__toggle icon-chevron-down" />
        ) : null}
      </a>
      <div className="accordion__content">{children}</div>
    </li>
  );
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

const Accordion = ({ children, toggles, bordered }) => {
  return (
    <ul className={`accordion${bordered ? " accordion--bordered" : ""}`}>
      {React.Children.map(children, (child, idx) =>
        React.cloneElement(child, {
          toggles,
          key: child.props.key || idx
        })
      )}
    </ul>
  );
};

Accordion.Element = AccordionElement;

Accordion.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(Accordion.Element),
    PropTypes.arrayOf(AccordionElement),
    Accordion.Element,
    AccordionElement
  ]).isRequired,
  toggles: PropTypes.bool,
  bordered: PropTypes.bool
};

Accordion.defaultProps = {
  toggles: false,
  bordered: false
};

export default Accordion;
