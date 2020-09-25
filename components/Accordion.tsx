import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";

type AccordionElementProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  toggles?: boolean;
  title: ReactNode;
};

export const AccordionElement: FC<AccordionElementProps> = ({
  children,
  defaultOpen = false,
  toggles = false,
  title,
}): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <li className={isOpen ? "active" : ""}>
      <a
        className="accordion__title"
        onClick={() => setIsOpen((prev) => !prev)}
      >
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
  title: PropTypes.node.isRequired,
};

type AccordionProps = {
  children: ReactNode;
  toggles?: boolean;
  bordered?: boolean;
};

interface IAccordion {
  Element: FC;
}

export const Accordion: IAccordion & FC<AccordionProps> = ({
  children,
  toggles = false,
  bordered = false,
}): JSX.Element => {
  return (
    <ul className={`accordion${bordered ? " accordion--bordered" : ""}`}>
      {React.Children.map(children, (child, idx) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              toggles,
              key: child.props.key || idx,
            })
          : null
      )}
    </ul>
  );
};

Accordion.Element = AccordionElement;

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  toggles: PropTypes.bool,
  bordered: PropTypes.bool,
};
