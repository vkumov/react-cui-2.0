import { type FC, type ReactNode } from "react";
type AccordionProps = {
    children: ReactNode;
    toggles?: boolean;
    bordered?: boolean;
};
export declare const Accordion: FC<AccordionProps>;
export {};
