import React, { FC, ReactNode } from "react";

export type AccordionElementProps = {
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
