import { FC, ReactNode } from "react";
declare type AccordionProps = {
    children: ReactNode;
    toggles?: boolean;
    bordered?: boolean;
};
export declare const Accordion: FC<AccordionProps>;
export {};
