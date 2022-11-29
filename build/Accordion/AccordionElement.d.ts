import { FC, ReactNode } from "react";
export type AccordionElementProps = {
    children: ReactNode;
    defaultOpen?: boolean;
    toggles?: boolean;
    title: ReactNode;
};
export declare const AccordionElement: FC<AccordionElementProps>;
