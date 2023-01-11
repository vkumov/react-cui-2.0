import { FC, ReactNode } from 'react';

type AccordionProps = {
    children: ReactNode;
    toggles?: boolean;
    bordered?: boolean;
};
declare const Accordion: FC<AccordionProps>;

type AccordionElementProps = {
    children: ReactNode;
    defaultOpen?: boolean;
    toggles?: boolean;
    title: ReactNode;
};
declare const AccordionElement: FC<AccordionElementProps>;

export { Accordion, AccordionElement, AccordionElementProps };
