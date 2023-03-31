import React from "react";
import { type offset } from "@floating-ui/react";
import type { TransitionStatus } from "react-transition-group";
export declare const GenericPopover: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement> & {
    wrapperClassName?: string;
    state: TransitionStatus;
    offset?: Parameters<typeof offset>[0];
}, "ref"> & React.RefAttributes<HTMLDivElement>>;
