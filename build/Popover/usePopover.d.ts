import * as _floating_ui_react from '@floating-ui/react';
import { Placement, offset, FloatingFocusManager, FloatingOverlay, FloatingPortal } from '@floating-ui/react';
import React, { PropsWithChildren, ReactNode, ReactElement, MutableRefObject, ComponentProps, FC, ComponentType } from 'react';
import { TransitionStatus } from 'react-transition-group';

declare const FloatingTreeWrapper: FC<{
    children: ReactNode;
    withPortal?: boolean;
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    force?: boolean;
}>;

declare const GenericPopover$1: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement> & {
    wrapperClassName?: string;
    state: TransitionStatus;
    offset?: Parameters<typeof offset>[0];
}, "ref"> & React.RefAttributes<HTMLDivElement>>;

type SizeLimiting = boolean | {
    height?: boolean;
    width?: boolean;
};
type PopoverProps = PropsWithChildren<{
    onOpen?: () => unknown;
    onClose?: () => unknown;
    showClassName?: string;
    overlay?: ReactNode;
    showOverlay?: boolean;
    placement?: Placement;
    offset?: Parameters<typeof offset>[0];
    lockBody?: boolean;
    lockRootId?: string;
    element: ReactElement;
    closeRef?: MutableRefObject<(() => unknown) | undefined | null>;
    initialFocus?: ComponentProps<typeof FloatingFocusManager>["initialFocus"];
    guardsFocus?: ComponentProps<typeof FloatingFocusManager>["guards"];
    modalFocus?: ComponentProps<typeof FloatingFocusManager>["modal"];
    closeOnFocusOut?: ComponentProps<typeof FloatingFocusManager>["closeOnFocusOut"];
    portalRoot?: ComponentProps<typeof FloatingTreeWrapper>["portalRoot"];
    portalId?: ComponentProps<typeof FloatingTreeWrapper>["portalId"];
    explicitPortal?: boolean;
    autoDismiss?: boolean;
    overlayProps?: Omit<ComponentProps<typeof FloatingOverlay>, "id">;
    limitSize?: SizeLimiting;
} & Pick<ComponentProps<typeof GenericPopover$1>, "wrapperClassName" | "className">>;

declare const GenericPopover: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement> & {
    wrapperClassName?: string;
    state: TransitionStatus;
    offset?: Parameters<typeof offset>[0];
}, "ref"> & React.RefAttributes<HTMLDivElement>>;

type Options = {
    onOpen?: () => unknown;
    onClose?: () => unknown;
    popoverComponent?: ComponentType<ComponentProps<typeof GenericPopover>>;
} & Pick<PopoverProps, "initialFocus" | "guardsFocus" | "modalFocus" | "closeOnFocusOut" | "offset" | "portalRoot" | "placement" | "portalId">;
declare function usePopover({ onClose, onOpen, popoverComponent, placement, initialFocus, guardsFocus, modalFocus, closeOnFocusOut, offset: offsetOptions, portalRoot, portalId, }: Options): {
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    reference: (node: _floating_ui_react.ReferenceType) => void;
    render: (body: ReactNode) => JSX.Element;
    isShown: boolean;
    refs: _floating_ui_react.ExtendedRefs<_floating_ui_react.ReferenceType>;
    close: () => void;
    open: () => void;
};

export { usePopover };
