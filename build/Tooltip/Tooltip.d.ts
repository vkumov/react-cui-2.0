import { type FC, type PropsWithChildren, MutableRefObject, ReactNode } from "react";
import { FloatingPortal, useFloating, useInteractions, type Placement } from "@floating-ui/react-dom-interactions";
export type UseTooltipReturn = ReturnType<typeof useFloating> & {
    getFloatingProps: ReturnType<typeof useInteractions>["getFloatingProps"];
    show: boolean;
    getReferenceProps: ReturnType<typeof useInteractions>["getReferenceProps"];
    arrowRef: MutableRefObject<any>;
};
export declare function useTooltip(placement?: Placement): UseTooltipReturn;
declare const TooltipWrapper: FC<PropsWithChildren<Omit<ReturnType<typeof useTooltip>, "getReferenceProps" | "reference">> & {
    root?: Parameters<typeof FloatingPortal>[0]["root"];
}>;
export { TooltipWrapper as Tooltip };
export type WithTooltipProps = {
    children: JSX.Element;
    tooltip: ReactNode;
    placement?: Placement;
};
export declare const WithTooltip: FC<WithTooltipProps>;
