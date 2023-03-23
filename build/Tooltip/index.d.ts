import { FC, PropsWithChildren, ComponentProps, ReactNode, MutableRefObject } from 'react';
import { Placement, FloatingPortal, useFloating, useInteractions } from '@floating-ui/react';

type UseTooltipReturn = ReturnType<typeof useFloating> & {
    getFloatingProps: ReturnType<typeof useInteractions>["getFloatingProps"];
    show: boolean;
    getReferenceProps: ReturnType<typeof useInteractions>["getReferenceProps"];
    arrowRef: MutableRefObject<any>;
};
declare function useTooltip(placement?: Placement): UseTooltipReturn;
declare const TooltipWrapper: FC<PropsWithChildren<Omit<ReturnType<typeof useTooltip>, "getReferenceProps" | "reference">> & {
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
}>;
type WithTooltipProps = {
    children: JSX.Element;
    tooltip: ReactNode;
    placement?: Placement;
};
declare const WithTooltip: FC<WithTooltipProps>;

export { TooltipWrapper, WithTooltip, WithTooltipProps, useTooltip };
