import React, { FC, ReactNode } from "react";

type AccordionProps = {
  children: ReactNode;
  toggles?: boolean;
  bordered?: boolean;
};

export const Accordion: FC<AccordionProps> = ({
  children,
  toggles = false,
  bordered = false,
}): JSX.Element => {
  return (
    <ul className={`accordion${bordered ? " accordion--bordered" : ""}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              toggles,
            })
          : null
      )}
    </ul>
  );
};
