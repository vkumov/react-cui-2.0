import { type ComponentProps, type MutableRefObject, type PropsWithChildren, type ReactElement, type ReactNode } from "react";
import { FloatingFocusManager, FloatingOverlay, offset, type Placement } from "@floating-ui/react";
import { FloatingTreeWrapper } from "../FloatingProvider";
import { GenericPopover } from "./GenericPopover";
import { usePopoverContext } from "./context";
export { usePopoverContext };
export type PopoverProps = PropsWithChildren<{
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
} & Pick<ComponentProps<typeof GenericPopover>, "wrapperClassName" | "className">>;
export interface PopoverHandlers {
    close: () => void;
    open: () => void;
    setAutoDismiss: (enabled: boolean) => void;
}
export declare const usePopoverHandlers: () => PopoverHandlers | undefined;
export declare const Popover: import("react").ForwardRefExoticComponent<{
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
} & Pick<Omit<import("react").HTMLProps<HTMLDivElement> & {
    wrapperClassName?: string;
    state: import("react-transition-group").TransitionStatus;
    offset?: import("@floating-ui/react").OffsetOptions;
}, "ref"> & import("react").RefAttributes<HTMLDivElement>, "className" | "wrapperClassName"> & {
    children?: ReactNode;
} & import("react").RefAttributes<PopoverHandlers>>;
