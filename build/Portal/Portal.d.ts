import React, { ReactPortal } from "react";
export interface PortalProps {
    /** Portal children, for example, modal or popover */
    children: React.ReactNode;
    /** Root element z-index property */
    zIndex?: number;
    /** Root element position property */
    position?: string;
    /** Element where portal should be rendered, by default new div element is created and appended to document.body */
    target?: HTMLElement | string;
    /** Root element className */
    className?: string;
}
export declare function Portal(props: PortalProps): ReactPortal;
