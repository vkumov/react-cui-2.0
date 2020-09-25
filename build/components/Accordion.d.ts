import { FC, ReactNode } from "react";
declare type AccordionElementProps = {
    children: ReactNode;
    defaultOpen?: boolean;
    toggles?: boolean;
    title: ReactNode;
};
export declare const AccordionElement: FC<AccordionElementProps>;
declare type AccordionProps = {
    children: ReactNode;
    toggles?: boolean;
    bordered?: boolean;
};
interface IAccordion {
    Element: FC;
}
export declare const Accordion: IAccordion & FC<AccordionProps>;
export {};
