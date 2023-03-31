import { type ComponentProps, type FC, type MutableRefObject, type PropsWithChildren, type ReactNode } from "react";
import { FloatingPortal, useFloating, useInteractions, type Placement } from "@floating-ui/react";
type UseTooltipReturn = ReturnType<typeof useFloating> & {
    getFloatingProps: ReturnType<typeof useInteractions>["getFloatingProps"];
    show: boolean;
    getReferenceProps: ReturnType<typeof useInteractions>["getReferenceProps"];
    arrowRef: MutableRefObject<any>;
};
export declare function useTooltip(placement?: Placement): UseTooltipReturn;
export declare const TooltipWrapper: FC<PropsWithChildren<Omit<ReturnType<typeof useTooltip>, "getReferenceProps" | "reference">> & {
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
}>;
export type WithTooltipProps = {
    children: JSX.Element;
    tooltip: ReactNode;
    placement?: Placement;
};
export declare const WithTooltip: FC<WithTooltipProps>;
export {};
