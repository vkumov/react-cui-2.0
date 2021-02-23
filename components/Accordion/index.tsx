import React, { FC, ReactNode } from "react";

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

type AccordionProps = {
  children: ReactNode;
  toggles?: boolean;
  bordered?: boolean;
};

export interface IAccordion {
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
