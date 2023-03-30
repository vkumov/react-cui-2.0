import * as _floating_ui_react from '@floating-ui/react';
import { FloatingPortal, offset, Placement, FloatingFocusManager } from '@floating-ui/react';
import * as react_transition_group from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group';
import * as React from 'react';
import React__default, { FC, ReactNode, ComponentProps, PropsWithChildren, ReactElement, MutableRefObject, HTMLProps, ComponentType } from 'react';

declare const FloatingTreeWrapper: FC<{
    children: ReactNode;
    withPortal?: boolean;
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    force?: boolean;
}>;

declare const GenericPopover: React__default.ForwardRefExoticComponent<Omit<React__default.HTMLProps<HTMLDivElement> & {
    wrapperClassName?: string;
    state: TransitionStatus;
    offset?: Parameters<typeof offset>[0];
}, "ref"> & React__default.RefAttributes<HTMLDivElement>>;

type PopoverContextProps = {
    setOverlayState: (show: boolean) => void;
    setOverlay: (overlay: ReactNode) => void;
};
declare const usePopoverContext: () => PopoverContextProps;

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
} & Pick<ComponentProps<typeof GenericPopover>, "wrapperClassName" | "className">>;
interface PopoverHandlers {
    close: () => void;
    open: () => void;
    setAutoDismiss: (enabled: boolean) => void;
}
declare const usePopoverHandlers: () => PopoverHandlers | undefined;
declare const Popover: React.ForwardRefExoticComponent<{
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
} & Pick<Omit<React.HTMLProps<HTMLDivElement> & {
    wrapperClassName?: string;
    state: react_transition_group.TransitionStatus;
    offset?: _floating_ui_react.OffsetOptions;
}, "ref"> & React.RefAttributes<HTMLDivElement>, "className" | "wrapperClassName"> & {
    children?: ReactNode;
} & React.RefAttributes<PopoverHandlers>>;

type PopoverTitleProps = {
    children: ReactNode;
    noLine?: boolean;
} & HTMLProps<HTMLHeadingElement>;
declare const PopoverTitle: React__default.ForwardRefExoticComponent<Omit<PopoverTitleProps, "ref"> & React__default.RefAttributes<HTMLHeadingElement>>;

type Options = {
    onOpen?: () => unknown;
    onClose?: () => unknown;
    popoverComponent?: ComponentType<ComponentProps<typeof GenericPopover>>;
} & Pick<PopoverProps, "initialFocus" | "guardsFocus" | "modalFocus" | "closeOnFocusOut" | "offset" | "portalRoot" | "placement" | "portalId">;
declare function usePopover({ onClose, onOpen, popoverComponent, placement, initialFocus, guardsFocus, modalFocus, closeOnFocusOut, offset: offsetOptions, portalRoot, portalId, }: Options): {
    getReferenceProps: (userProps?: React__default.HTMLProps<Element>) => Record<string, unknown>;
    reference: (node: _floating_ui_react.ReferenceType) => void;
    render: (body: ReactNode) => JSX.Element;
    isShown: boolean;
    refs: _floating_ui_react.ExtendedRefs<_floating_ui_react.ReferenceType>;
    close: () => void;
    open: () => void;
};

export { GenericPopover, Popover, PopoverHandlers, PopoverProps, PopoverTitle, usePopover, usePopoverContext, usePopoverHandlers };
