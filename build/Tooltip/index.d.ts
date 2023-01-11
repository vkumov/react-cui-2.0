import { MutableRefObject, FC, PropsWithChildren, ReactNode } from 'react';
import { useFloating, useInteractions, Placement, FloatingPortal } from '@floating-ui/react';

type UseTooltipReturn = ReturnType<typeof useFloating> & {
    getFloatingProps: ReturnType<typeof useInteractions>["getFloatingProps"];
    show: boolean;
    getReferenceProps: ReturnType<typeof useInteractions>["getReferenceProps"];
    arrowRef: MutableRefObject<any>;
};
declare function useTooltip(placement?: Placement): UseTooltipReturn;
declare const TooltipWrapper: FC<PropsWithChildren<Omit<ReturnType<typeof useTooltip>, "getReferenceProps" | "reference">> & {
    root?: Parameters<typeof FloatingPortal>[0]["root"];
}>;

type WithTooltipProps = {
    children: JSX.Element;
    tooltip: ReactNode;
    placement?: Placement;
};
declare const WithTooltip: FC<WithTooltipProps>;

export { TooltipWrapper as Tooltip, UseTooltipReturn, WithTooltip, WithTooltipProps, useTooltip };
