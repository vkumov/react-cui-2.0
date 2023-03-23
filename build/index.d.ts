declare module "@vkumov/react-cui-2.0" {
import React, { ReactNode, FC, ComponentProps, ReactElement, HTMLProps, FunctionComponent, ComponentType, PropsWithChildren, MutableRefObject, ReactPortal, Ref, RefObject } from 'react';
import * as _floating_ui_react from '@floating-ui/react';
import { Placement, Strategy, FloatingPortal, ReferenceType, FloatingOverlay, UseDismissProps, useFloating, useInteractions, offset, FloatingFocusManager } from '@floating-ui/react';
import { DropzoneProps as DropzoneProps$1 } from 'react-dropzone';
import { ToastOptions, ToastContainerProps, UpdateOptions } from 'react-toastify';
import { Transition, TransitionStatus } from 'react-transition-group';
import * as react_select_dist_declarations_src_useStateManager from 'react-select/dist/declarations/src/useStateManager';
import * as react_select_dist_declarations_src_Select from 'react-select/dist/declarations/src/Select';
import react_select_dist_declarations_src_Select__default from 'react-select/dist/declarations/src/Select';
import { GroupBase, Props as Props$1, OptionsOrGroups } from 'react-select';
import * as react_select_dist_declarations_src_useCreatable from 'react-select/dist/declarations/src/useCreatable';
import { CreatableProps } from 'react-select/creatable';
import { GroupBase as GroupBase$1 } from 'react-select/dist/declarations/src/types';
import { SliderProps as SliderProps$1 } from 'rc-slider';
import { SliderRef } from 'rc-slider/lib/Slider';

type AlertType = "warning" | "warning-alt" | "danger" | "error" | "success" | "dark" | "light" | "info";
type AlertProps = {
    type?: AlertType;
    children: ReactNode;
    title?: string;
    dismissable?: boolean;
    className?: string;
    onDismiss?: (e: any) => void;
    withIcon?: boolean;
    icon?: string;
};
type AlertTypes = "Warning" | "Danger" | "Error" | "Success" | "Info" | "Dark" | "Light" | "WarningAlt";
type IAlert = {
    [x in AlertTypes]: FC<Omit<AlertProps, "type">>;
};
const Alert: IAlert & FC<AlertProps>;

type MenuElementProps = {
    selected?: boolean;
    icon?: string | ReactElement;
    submenu?: boolean;
} & HTMLProps<HTMLAnchorElement>;
const MenuElement: React.ForwardRefExoticComponent<Omit<MenuElementProps, "ref"> & React.RefAttributes<any>>;
const Menu: React.ForwardRefExoticComponent<Omit<{
    nested?: boolean;
} & {
    label: ReactNode;
    placement?: Placement;
    noChevron?: boolean;
    strategy?: Strategy;
    alwaysClose?: boolean;
    onOpen?: () => unknown;
    onClose?: () => unknown;
    isOpen?: boolean;
    withSizeLimit?: boolean;
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
} & {
    children?: React.ReactNode;
} & Omit<React.HTMLProps<HTMLButtonElement>, "label">, "ref"> & React.RefAttributes<any>>;
const Dropdown: React.ForwardRefExoticComponent<{
    label: ReactNode;
    placement?: Placement;
    noChevron?: boolean;
    strategy?: Strategy;
    alwaysClose?: boolean;
    onOpen?: () => unknown;
    onClose?: () => unknown;
    isOpen?: boolean;
    withSizeLimit?: boolean;
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
} & {
    children?: React.ReactNode;
} & React.RefAttributes<any>>;
const MenuDivider: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
const MenuGroup: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement> & {
    header?: ReactNode;
}, "ref"> & React.RefAttributes<HTMLDivElement>>;

type DropzoneProps = {
    name: string;
    value?: any[];
    maxFiles?: number;
    inline?: boolean;
    showTotalSelected?: boolean;
    accept?: string;
    loose?: boolean;
    compressed?: boolean;
    label: string;
    multiple: boolean;
    error?: ReactNode;
    maxFileSize?: string | number;
    onChange?: (value: File[]) => void;
};
const Dropzone: FC<DropzoneProps & DropzoneProps$1>;

type DotsColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
type DotsProps = {
    color?: DotsColor;
};
const Dots: React.ForwardRefExoticComponent<DotsProps & React.RefAttributes<HTMLDivElement>>;

type SpinnerProps = {
    size?: "small" | "default" | "large";
    text?: React.ReactNode;
};
const Spinner: FC<SpinnerProps>;

type ProgressbarColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark";
interface ProgressbarProps {
    percentage: number;
    withLabel?: boolean;
    label?: React.ReactNode;
    size?: "small" | "default" | "large";
    color?: ProgressbarColor;
    className?: string;
}
const Progressbar: React.ForwardRefExoticComponent<ProgressbarProps & React.RefAttributes<HTMLDivElement>>;

type ButtonColor$2 = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";
type ButtonProps$1 = {
    size?: "small" | "default" | "large";
    color?: ButtonColor$2;
    wide?: boolean;
    justified?: boolean;
    circle?: boolean;
    asLink?: boolean;
    selected?: boolean;
    style?: React.CSSProperties;
    className?: string;
    icon?: boolean;
    type?: "submit" | "reset" | "button";
} & Omit<HTMLProps<HTMLButtonElement>, "size">;
interface ButtonType extends FunctionComponent<ButtonProps$1> {
    Primary: ComponentType<ButtonProps$1>;
    Secondary: ComponentType<ButtonProps$1>;
    Success: ComponentType<ButtonProps$1>;
    Dark: ComponentType<ButtonProps$1>;
    Ghost: ComponentType<ButtonProps$1 & {
        fullGhost?: boolean;
    }>;
    Link: ComponentType<ButtonProps$1>;
    Light: ComponentType<ButtonProps$1>;
    Danger: ComponentType<ButtonProps$1>;
}
let Button: ButtonType;

type ButtonGroupProps = {
    square?: boolean;
    withDivider?: boolean;
    className?: string;
};
const ButtonGroup: React.ForwardRefExoticComponent<Omit<ButtonGroupProps & React.HTMLProps<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

type LabelColor$4 = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";
type LabelProps = React.PropsWithChildren<{
    size?: "tiny" | "small" | "default" | "large";
    color?: LabelColor$4;
    bordered?: boolean;
    removable?: boolean;
    onRemove?: (e: any) => void;
    raised?: boolean;
    className?: string;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
type LabelTypes = "Primary" | "Secondary" | "Tertiary" | "Success" | "Info" | "WarningAlt" | "Warning" | "Danger" | "Dark" | "Light";
type ILabel = {
    [x in LabelTypes]: FC<LabelProps>;
};
const Label: ILabel & FC<LabelProps>;

type Borders = "top" | "right" | "left" | "bottom";
interface PanelProps {
    color?: "plain" | "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light" | "lightest";
    padding?: "none" | "compressed" | "default" | "loose";
    bordered?: boolean | Borders | Borders[];
    raised?: boolean;
    well?: boolean;
    className?: string;
}
const Panel: FC<PanelProps & HTMLProps<HTMLDivElement>>;

type ToastType = "success" | "error" | "warning" | "info" | "loading" | "none";
type ToastProps = {
    title: ReactNode;
    message: ReactNode;
    type: ToastType;
    copyError?: boolean;
    bordered?: boolean;
};
const Toast: FC<ToastProps>;
type ToastFunction = (title: ReactNode, message: ReactNode, copyError?: boolean, containerId?: string, args?: Record<string, unknown>) => React.ReactText;
interface IToast {
    (type: ToastType, title: ReactNode, message: ReactNode, copyError?: boolean, containerId?: string, args?: Partial<ToastOptions>): React.ReactText;
}
type Toasts = {
    [x in ToastType]: ToastFunction;
};
interface ToastMethods {
    update: (toastId: React.ReactText, updates: ToastProps, options?: UpdateOptions) => void;
    dismiss: (id?: string | number | undefined) => false | void;
}
const toast: IToast & Toasts & ToastMethods;

type ExtraProps = {
    bordered?: boolean;
    shadow?: "sm" | "md" | "lg";
};
const ToastContainer: ({ position, autoClose, draggable, hideProgressBar, containerId, transition, bordered, shadow, bodyClassName, toastClassName, ...props }: ToastContainerProps & ExtraProps) => JSX.Element;

const Footer: () => JSX.Element;

type HeaderProps = React.PropsWithChildren<{
    fluid?: boolean;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
const Header: FC<HeaderProps>;
type HeaderPanelProps = React.PropsWithChildren<{
    center?: boolean;
    right?: boolean;
    className?: string;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const HeaderPanel: FC<HeaderPanelProps>;
type HeaderTitleProps = {
    icon?: boolean | string;
    link?: string;
    title: string;
} & HeaderPanelProps;
const HeaderTitle: FC<HeaderTitleProps>;

type GenericTableProps = {
    outerWrap?: boolean;
    lined?: boolean;
    bordered?: boolean;
    striped?: boolean;
    selectable?: boolean;
    fixed?: boolean;
    wrapped?: boolean;
    compressed?: boolean;
    loose?: boolean;
} & Partial<HTMLProps<HTMLTableElement>>;
const GenericTable: FC<GenericTableProps>;

type DefaultTablePaginationProps = {
    total: number;
    position: number;
    onPageChange: (e: any, position: number) => void;
    onPerPageChange: (value: number) => void;
    perPageUp?: boolean;
    paginationProps?: {
        size?: "small" | "default" | "large";
        rounded?: boolean;
        icons?: boolean;
        next?: ReactNode;
        prev?: ReactNode;
        firstAndLast?: boolean;
    };
};
const DefaultTablePagination: FC<DefaultTablePaginationProps>;

type PaginationLocation = "top-left" | "bottom-left" | "bottom-right" | "top-right";
type TableProps = {
    pagination?: FC<any> | React.ComponentClass<any> | string;
    paginationLocation?: PaginationLocation;
    paginationProps?: {
        size?: "small" | "default" | "large";
        rounded?: boolean;
        icons?: boolean;
        next?: ReactNode;
        prev?: ReactNode;
        firstAndLast?: boolean;
    };
    data?: any[][];
    children?: ReactNode;
    start?: number;
} & GenericTableProps;
const Table: FC<TableProps>;

type CheckboxProps = {
    inline?: boolean;
    asFormGroup?: boolean;
    children?: ReactNode;
    spacing?: "compressed" | "default" | "loose";
};
const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxProps & React.HTMLProps<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;

const IndeterminateCheckbox: React.ForwardRefExoticComponent<Omit<{
    indeterminate?: boolean;
} & Omit<{
    inline?: boolean;
    asFormGroup?: boolean;
    children?: React.ReactNode;
    spacing?: "compressed" | "default" | "loose";
} & React.HTMLProps<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;

interface SwitchProps {
    left?: ReactNode;
    right?: ReactNode;
    disabled?: boolean;
    inline?: boolean;
    spacing?: "compressed" | "loose";
    asFormGroup?: boolean;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}
const Switch: FC<SwitchProps & HTMLProps<HTMLInputElement>>;

type InputProps = {
    label?: ReactNode;
    type?: string;
    inline?: "label" | "both" | "form";
    helpBlock?: boolean;
    iconClick?: (e: any) => void;
    icon?: string | ReactElement<any>;
    className?: string;
    plain?: boolean;
    error?: ReactNode;
    horizontal?: boolean;
    horizontalLabelClassName?: string;
    prefix?: string;
};
const Input: React.ForwardRefExoticComponent<Omit<InputProps & Omit<React.HTMLProps<HTMLInputElement>, "label">, "ref"> & React.RefAttributes<HTMLInputElement>>;

/**
 * Modal Header
 */
type ModalHeaderProps$1 = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
const ModalHeader$1: FC<ModalHeaderProps$1>;

/**
 * Modal Footer
 */
type ModalFooterProps$1 = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
const ModalFooter$1: FC<ModalFooterProps$1>;

/**
 * Modal Body
 */
type ModalBodyProps$1 = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
const ModalBody$1: FC<ModalBodyProps$1>;

/**
 * Modal
 */
type ModalSize$1 = "small" | "default" | "large" | "full" | "fluid";
interface ModalProps$1 {
    size?: ModalSize$1;
    closeIcon?: boolean;
    closeHandle?: () => void;
    children?: ReactNode;
    title?: ReactNode;
    isOpen: boolean;
    autoClose?: boolean;
    left?: boolean;
    animationDuration?: ComponentProps<typeof Transition>["timeout"];
    dialogProps?: ComponentProps<"div">;
    contentProps?: ComponentProps<"div">;
    maximize?: boolean;
    refElement?: ReferenceType;
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    lockScroll?: ComponentProps<typeof FloatingOverlay>["lockScroll"];
    ancestorScroll?: UseDismissProps["ancestorScroll"];
}
type ModalSizes$1 = {
    Small: FC<ModalProps$1>;
    Large: FC<ModalProps$1>;
    Full: FC<ModalProps$1>;
    Fluid: FC<ModalProps$1>;
};
type ModalComponents$1 = {
    Header: typeof ModalHeader$1;
    Body: typeof ModalBody$1;
    Footer: typeof ModalFooter$1;
};
const Modal$1: ModalSizes$1 & ModalComponents$1 & FC<ModalProps$1>;

type ButtonColor$1 = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";

type ButtonColor = "primary" | "secondary" | "success" | "dark" | "ghost" | "link" | "light" | "danger";
type ButtonProps = {
    size?: "small" | "default" | "large";
    color?: ButtonColor;
    wide?: boolean;
    justified?: boolean;
    circle?: boolean;
    asLink?: boolean;
    selected?: boolean;
    style?: React.CSSProperties;
    className?: string;
    icon?: boolean;
    type?: "submit" | "reset" | "button";
} & Omit<HTMLProps<HTMLButtonElement>, "size">;

/**
 * Modal Header
 */
type ModalHeaderProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
const ModalHeader: FC<ModalHeaderProps>;

/**
 * Modal Footer
 */
type ModalFooterProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
const ModalFooter: FC<ModalFooterProps>;

/**
 * Modal Body
 */
type ModalBodyProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
const ModalBody: FC<ModalBodyProps>;

/**
 * Modal
 */
type ModalSize = "small" | "default" | "large" | "full" | "fluid";
interface ModalProps {
    size?: ModalSize;
    closeIcon?: boolean;
    closeHandle?: () => void;
    children?: ReactNode;
    title?: ReactNode;
    isOpen: boolean;
    autoClose?: boolean;
    left?: boolean;
    animationDuration?: ComponentProps<typeof Transition>["timeout"];
    dialogProps?: ComponentProps<"div">;
    contentProps?: ComponentProps<"div">;
    maximize?: boolean;
    refElement?: ReferenceType;
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    lockScroll?: ComponentProps<typeof FloatingOverlay>["lockScroll"];
    ancestorScroll?: UseDismissProps["ancestorScroll"];
}
type ModalSizes = {
    Small: FC<ModalProps>;
    Large: FC<ModalProps>;
    Full: FC<ModalProps>;
    Fluid: FC<ModalProps>;
};
type ModalComponents = {
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
};
const Modal: ModalSizes & ModalComponents & FC<ModalProps>;

/**
 * Confirmation Modal
 */
type ConfirmationModalProps$1 = {
    isOpen?: boolean;
    confirmHandle: (dontAskAgain?: boolean) => boolean | Promise<boolean>;
    closeHandle: () => void;
    prompt: ReactNode;
    confirmType?: ButtonColor;
    confirmText?: string;
    autoClose?: boolean;
    dontAskAgain?: DontAskAgain;
};

/**
 * Prompt Modal
 */
interface PromptModalProps$1<T extends string | number> {
    title: ReactNode;
    question: ReactNode;
    onSave: (value: T) => void | Promise<void>;
    onClose?: () => void;
    initial?: T;
    type?: string;
    isOpen: boolean;
    hint?: ReactNode;
    validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
    autoClose?: ComponentProps<typeof Modal>["autoClose"];
}

type Callback = () => void;
type FullBodyProps = {
    close: Callback;
};
type FullBodyRenderer = (props: FullBodyProps) => React.ReactElement;
type CommonModalProps = {
    onModalClose?: () => unknown;
    title?: React.ReactNode;
    onClosed?: Callback;
};
type PromptOptions<T extends string | number = any> = {
    initial: PromptModalProps$1<T>["initial"];
    type: PromptModalProps$1<T>["type"];
    hint: PromptModalProps$1<T>["hint"];
    validate: PromptModalProps$1<T>["validate"];
};
type EventModalProps = ({
    modalType: "confirmation";
    prompt: ConfirmationModalProps$1["prompt"];
    onConfirm: ConfirmationModalProps$1["confirmHandle"];
    confirmText?: ConfirmationModalProps$1["confirmText"];
    confirmType?: ConfirmationModalProps$1["confirmType"];
    dontAskAgain?: ConfirmationModalProps$1["dontAskAgain"];
} | {
    modalType: "notification";
    body: React.ReactNode;
    buttonColor?: ButtonProps["color"];
    button: React.ReactNode;
} | ({
    modalType: "prompt";
    options?: Partial<PromptOptions>;
    question: React.ReactNode;
    cb: PromptModalProps$1<any>["onSave"];
} & Omit<Partial<PromptOptions>, "validate">) | {
    modalType: "dynamic";
    fullBody: React.ReactElement<FullBodyProps & Record<string, any>> | FullBodyRenderer;
    modalProps?: Partial<ModalProps>;
    body?: React.ReactNode;
    buttons?: {
        text?: React.ReactNode;
        color?: ButtonProps["color"];
        onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, close: Callback) => void;
    }[];
}) & CommonModalProps;

type DontAskAgain = {
    show: boolean;
    text?: ReactNode;
};
type TextOrNumber = string | number;
function confirmation(prompt: ReactNode, onConfirm: (dontAskAgain?: boolean) => boolean | Promise<boolean>, confirmType?: ButtonColor, confirmText?: string, dontAskAgain?: DontAskAgain): Promise<void>;
type NotificationModal = (title: ReactNode, body: ReactNode, buttonColor?: ButtonColor, button?: ReactNode) => Promise<void>;
const notificationModal: NotificationModal;

function prompt<T extends TextOrNumber>(title: string, question: ReactNode, cb: (value: T) => void | Promise<void>, initial?: string, type?: string, hint?: ReactNode): Promise<void>;
function prompt<T extends TextOrNumber>(title: string, question: ReactNode, cb: (value: T) => void | Promise<void>, options?: Pick<PromptModalProps$1<T>, "initial" | "type" | "hint" | "validate">): Promise<void>;
type CloseHandler = () => void;
interface ModalButton {
    color?: ButtonColor;
    text: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, close: CloseHandler) => void;
}
type PropsWithCloseModal<P = {}> = P & {
    close: () => void;
};
interface DynamicModalOptions {
    title: ReactNode;
    fullBody?: Extract<EventModalProps, {
        modalType: "dynamic";
    }>["fullBody"];
    body?: ReactNode;
    buttons?: ModalButton[];
    modalProps?: Partial<ModalProps>;
}
type DynamicModalHandler = (options: DynamicModalOptions) => Promise<void>;
const dynamicModal: DynamicModalHandler;

/**
 * Confirmation Modal
 */
type ConfirmationModalProps = {
    isOpen?: boolean;
    confirmHandle: (dontAskAgain?: boolean) => boolean | Promise<boolean>;
    closeHandle: () => void;
    prompt: ReactNode;
    confirmType?: ButtonColor$1;
    confirmText?: string;
    autoClose?: boolean;
    dontAskAgain?: DontAskAgain;
};
const ConfirmationModal: FC<ConfirmationModalProps>;

/**
 * Prompt Modal
 */
interface PromptModalProps<T extends string | number> {
    title: ReactNode;
    question: ReactNode;
    onSave: (value: T) => void | Promise<void>;
    onClose?: () => void;
    initial?: T;
    type?: string;
    isOpen: boolean;
    hint?: ReactNode;
    validate?: ((value: T) => Promise<boolean>) | ((value: T) => boolean);
    autoClose?: ComponentProps<typeof Modal$1>["autoClose"];
}
function PromptModal<T extends string | number>({ title, question, onSave: cb, onClose, initial, type, isOpen, hint, validate, autoClose, }: PropsWithChildren<PromptModalProps<T>>): JSX.Element;

type DynamicModalProps = {
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    closeTimeout?: number;
};
const DynamicModal: FC<DynamicModalProps>;

type ModalContextProps = {
    addRendered: (id: string) => void;
    removeRendered: (id: string) => void;
    lastRendered: () => string | null;
    rendered: MutableRefObject<string[]>;
};
type ModalProviderProps = {
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    closeTimeout?: number;
    children: ReactNode;
};
const useModalProvider: () => ModalContextProps;
const ModalProvider: FC<ModalProviderProps>;

type IconProps = {
    icon: string;
    size?: 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 48 | 64 | 96 | 128;
    className?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
const Icon: FC<IconProps>;

interface PortalProps {
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
function Portal(props: PortalProps): ReactPortal;

type AccordionProps = {
    children: ReactNode;
    toggles?: boolean;
    bordered?: boolean;
};
const Accordion: FC<AccordionProps>;

type AccordionElementProps = {
    children: ReactNode;
    defaultOpen?: boolean;
    toggles?: boolean;
    title: ReactNode;
};
const AccordionElement: FC<AccordionElementProps>;

type WrapperProps = {
    children: ReactNode;
    className?: string;
};
type BadgeColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
type BadgeProps = PropsWithChildren<{
    color?: BadgeColor;
    size?: "dot" | "tiny" | "small" | "default" | "large";
    className?: string;
}>;
interface BadgeSizes {
    Dot: FC<Omit<BadgeProps, "size">>;
    Tiny: FC<Omit<BadgeProps, "size">>;
    Small: FC<Omit<BadgeProps, "size">>;
    Default: FC<Omit<BadgeProps, "size">>;
    Large: FC<Omit<BadgeProps, "size">>;
    Wrapper: FC<WrapperProps>;
}
const Badge: BadgeSizes & FC<BadgeProps>;
type WithBadgeProps = {
    children: ReactNode;
    badge: ReactNode;
    wrapperClass?: string;
};
const WithBadge: FC<BadgeProps & WithBadgeProps>;

type TabId = number | string;
interface TabProps {
    id: TabId;
    active?: boolean;
    title: ReactNode;
    children: ReactNode;
    className?: string;
    activeClassName?: string;
    unmountInactive?: boolean;
}
const Tab: FC<TabProps>;
interface TabsHeaderProps {
    tabsClassName?: string;
    center?: boolean;
    right?: boolean;
    justified?: boolean;
    embossed?: boolean;
    bordered?: boolean;
    vertical?: boolean;
    sticky?: boolean;
    inline?: boolean;
    openTab?: TabId;
    onTabChange: (tab: TabId) => void;
    children: ReactNode;
}
const TabsHeader: React.ForwardRefExoticComponent<TabsHeaderProps & React.RefAttributes<HTMLUListElement>>;
interface ColumnSizes {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}
type ColumnSize = number | string | ColumnSizes;
type Column = {
    columnWidth?: ColumnSize;
} & React.HTMLProps<HTMLDivElement>;
interface TabsProps {
    children: ReactNode;
    defaultTab?: TabId;
    tabsClassName?: string;
    contentClassName?: string;
    center?: boolean;
    right?: boolean;
    justified?: boolean;
    embossed?: boolean;
    bordered?: boolean;
    vertical?: boolean;
    leftColumn?: Column;
    rightColumn?: Column;
    rowProps?: HTMLProps<HTMLDivElement>;
    sticky?: boolean;
    inline?: boolean;
    renderHeader?: (header: JSX.Element) => JSX.Element;
    renderBody?: (body: JSX.Element) => JSX.Element;
    onTabChange?: (tab: TabId) => void;
    beforeTabChange?: (oldTab: TabId, newTab: TabId) => boolean | Promise<boolean>;
    bodyRef?: MutableRefObject<HTMLDivElement>;
    headerRef?: MutableRefObject<HTMLUListElement>;
}
const Tabs: FC<TabsProps>;

const Section: React.ForwardRefExoticComponent<Omit<React.PropsWithChildren<React.HTMLProps<HTMLDivElement>>, "ref"> & React.RefAttributes<HTMLDivElement>>;

interface DisplayNoSizeProps {
    as?: React.FunctionComponent<any> | React.ComponentClass<any> | string;
    className?: string;
}
interface DisplaySizeProps {
    size: 0 | 1 | 2 | 3 | 4;
}
const Display: FC<PropsWithChildren<DisplayNoSizeProps & DisplaySizeProps>>;
const Display0: FC<PropsWithChildren<DisplayNoSizeProps>>;
const Display1: FC<PropsWithChildren<DisplayNoSizeProps>>;
const Display2: FC<PropsWithChildren<DisplayNoSizeProps>>;
const Display3: FC<PropsWithChildren<DisplayNoSizeProps>>;
const Display4: FC<PropsWithChildren<DisplayNoSizeProps>>;

type TimelineItemProps = {
    icon?: ReactNode;
    time?: string;
    children: ReactNode;
    className?: string;
    contentClassName?: string;
    simplified?: boolean;
    header?: ReactNode;
};
const TimelineItem: FC<TimelineItemProps>;
type TimelineProps = {
    center?: boolean;
    right?: boolean;
    className?: string;
    children: ReactNode;
    simplified?: boolean;
};
const Timeline: FC<TimelineProps>;

type PaginationProps = {
    size?: "small" | "default" | "large";
    rounded?: boolean;
    icons?: boolean;
    next?: ReactNode;
    prev?: ReactNode;
    position: number;
    perPage?: number;
    total: number;
    onPageChange: (e: any, position: number) => void;
    firstAndLast?: boolean;
    beginAt?: number;
    className?: string;
};
const Pagination: FC<PaginationProps>;

type ConditionalWrapperProps = {
    condition: boolean;
    wrapper: JSX.Element;
    children: React.ReactNode;
};
const ConditionalWrapper: FC<ConditionalWrapperProps>;
type IfProps = {
    condition: boolean;
    children: React.ReactNode;
};
const DisplayIf: FC<IfProps>;

type StepProps = {
    icon?: ReactNode;
    children: ReactNode;
    visited?: boolean;
    active?: boolean;
    className?: string;
    consequativeIdx?: number;
};
const Step: React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLDivElement>>;

type StepsProps = {
    size?: "dot" | "small" | "default" | "large";
    color?: "primary" | "secondary" | "success" | "dark";
    vertical?: boolean;
    className?: string;
    children: ReactNode;
};
const Steps: React.ForwardRefExoticComponent<StepsProps & React.RefAttributes<HTMLDivElement>>;

const VerticalCenter: FC<PropsWithChildren>;

interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    label?: ReactNode;
    textareaClass?: string;
    innerDivClass?: string;
    inputRef?: React.Ref<HTMLTextAreaElement>;
    className?: string;
    inline?: boolean;
    error?: ReactNode;
}
const Textarea: FC<TextareaProps & HTMLProps<HTMLTextAreaElement>>;

interface RadioProps extends Omit<HTMLProps<HTMLInputElement>, "label"> {
    spacing?: "compressed" | "regular" | "loose" | "nospacing";
    inline?: boolean;
    label?: ReactNode;
    className?: string;
    id?: string;
    divProps?: HTMLProps<HTMLDivElement>;
}
const Radio: React.ForwardRefExoticComponent<Omit<RadioProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
interface RadioValue {
    value: string;
    label: ReactNode;
}
interface RadiosProps {
    values: RadioValue[];
    value: string;
    onChange: (value: string) => void;
    name: string;
}
const Radios: FC<RadiosProps>;

type LabelColor$3 = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";

type InputChipsProps$1 = {
    label?: ReactNode;
    chipsColor?: LabelColor$3;
    addOnBlur?: boolean;
    allowRepeat?: boolean;
    allowRegex?: string;
    delimiters?: string | number[];
    valueValidator?: (value: any) => boolean;
    maxChips?: number;
    baloon?: string;
    className?: string;
    id?: string;
    error?: ReactNode;
    value?: string[];
    outerWrap?: boolean;
    onChange?: (newValue: string[]) => void;
    onChipRemove?: (idx: number) => void;
    chipsOutside?: boolean;
    noInput?: boolean;
    renderChip?: (params: {
        onDelete: () => unknown;
        value: string;
        idx: number;
    }) => JSX.Element;
};
type FullInputChipsProps$1 = InputChipsProps$1 & Omit<HTMLProps<HTMLInputElement>, "id" | "value" | "onChange" | "label">;
const InputChips: React.ForwardRefExoticComponent<Omit<FullInputChipsProps$1, "ref"> & React.RefAttributes<HTMLDivElement>>;

type LabelColor$2 = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";

type InputChipsProps = {
    label?: ReactNode;
    chipsColor?: LabelColor$2;
    addOnBlur?: boolean;
    allowRepeat?: boolean;
    allowRegex?: string;
    delimiters?: string | number[];
    valueValidator?: (value: any) => boolean;
    maxChips?: number;
    baloon?: string;
    className?: string;
    id?: string;
    error?: ReactNode;
    value?: string[];
    outerWrap?: boolean;
    onChange?: (newValue: string[]) => void;
    onChipRemove?: (idx: number) => void;
    chipsOutside?: boolean;
    noInput?: boolean;
    renderChip?: (params: {
        onDelete: () => unknown;
        value: string;
        idx: number;
    }) => JSX.Element;
};
type FullInputChipsProps = InputChipsProps & Omit<HTMLProps<HTMLInputElement>, "id" | "value" | "onChange" | "label">;

type Option$1 = {
    label: string;
    value: string;
};
type EditableSelectProps = {
    compressed?: boolean;
    label?: ReactNode;
    prompt?: string;
    inline?: boolean;
    editable?: boolean;
    type?: "number" | "text";
    error?: ReactNode;
    multi?: boolean;
    onChange?: (value: any) => void;
    value?: any;
    displayValues?: boolean;
    disabled?: boolean;
    divRef?: MutableRefObject<HTMLDivElement>;
    options?: Option$1[];
    onSelect?: (value: string) => void | (() => void);
    onDeselect?: (value: string) => void | (() => void);
};
type WantedChipsProps = Omit<FullInputChipsProps, "type" | "label" | "onSelect" | "onDeselect" | "value">;
type FullEditableSelectProps = PropsWithChildren<EditableSelectProps & Partial<WantedChipsProps>>;
const EditableSelect: FC<FullEditableSelectProps>;

type LabelColor$1 = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";

type CUISelectProps$1 = {
    label?: ReactNode;
    multiValueColor?: LabelColor$1;
    error?: ReactNode | boolean;
};
type ReactSelectProps<Option, IsMulti extends boolean, Group extends GroupBase<Option>> = CUISelectProps$1 & Props$1<Option, IsMulti, Group>;
function UnrefedSelect$1<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({ label, className, error, ...props }: ReactSelectProps<Option, IsMulti, Group>, ref: Ref<react_select_dist_declarations_src_Select__default<Option, IsMulti, Group>>): JSX.Element;
const ReactSelect: <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(props: CUISelectProps$1 & Omit<react_select_dist_declarations_src_Select.PublicBaseSelectProps<Option, IsMulti, Group>, "inputValue" | "menuIsOpen" | "onChange" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "value"> & Partial<react_select_dist_declarations_src_Select.PublicBaseSelectProps<Option, IsMulti, Group>> & react_select_dist_declarations_src_useStateManager.StateManagerAdditionalProps<Option> & {
    ref?: React.ForwardedRef<react_select_dist_declarations_src_Select__default<Option, IsMulti, Group>>;
}) => ReturnType<typeof UnrefedSelect$1>;

type LabelColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning-alt" | "warning" | "danger" | "dark" | "light";

type CUISelectProps = {
    label?: ReactNode;
    multiValueColor?: LabelColor;
    error?: ReactNode | boolean;
};
type CreatableReactSelectProps<Option = unknown, IsMulti extends boolean = boolean, Group extends GroupBase$1<Option> = GroupBase$1<Option>> = CreatableProps<Option, IsMulti, Group> & CUISelectProps;
function UnrefedSelect<Option = unknown, IsMulti extends boolean = false, Group extends GroupBase$1<Option> = GroupBase$1<Option>>({ label, className, error, ...props }: CreatableReactSelectProps<Option, IsMulti, Group>, ref: Ref<react_select_dist_declarations_src_Select__default<Option, IsMulti, Group>>): JSX.Element;
const CreatableReactSelect: <Option = unknown, IsMulti extends boolean = false, Group extends GroupBase$1<Option> = GroupBase$1<Option>>(props: Omit<react_select_dist_declarations_src_Select.PublicBaseSelectProps<Option, IsMulti, Group>, "inputValue" | "menuIsOpen" | "onChange" | "onInputChange" | "onMenuOpen" | "onMenuClose" | "value"> & Partial<react_select_dist_declarations_src_Select.PublicBaseSelectProps<Option, IsMulti, Group>> & react_select_dist_declarations_src_useStateManager.StateManagerAdditionalProps<Option> & react_select_dist_declarations_src_useCreatable.CreatableAdditionalProps<Option, Group> & CUISelectProps & {
    ref?: React.ForwardedRef<react_select_dist_declarations_src_Select__default<Option, IsMulti, Group>>;
}) => ReturnType<typeof UnrefedSelect>;

type Option<V = string> = {
    label?: ReactNode;
    value: V;
};
type OptionGroup<O> = GroupBase<O>;
function isGrouped<O extends {
    value: any;
}>(v: O | OptionGroup<O>): v is OptionGroup<O>;
function findOption<V, O extends {
    value: V;
} = Option<V>>(value: V, options: readonly (O | OptionGroup<O>)[]): O;
function findOptions<V, O extends {
    value: V;
} = Option<V>>(values: V[], options: OptionsOrGroups<O, GroupBase<O>>): O[];

type InputHelpBaloonProps = {
    baloon: string;
};
const InputHelpBaloon: FC<InputHelpBaloonProps>;

type InputHelpBlockProps = {
    text: React.ReactNode;
};
const InputHelpBlock: FC<InputHelpBlockProps>;

type VSeparatorProps = {
    size?: "small" | "large" | "huge" | "default";
    compressed?: boolean;
} & Omit<HTMLProps<HTMLDivElement>, "size">;
const VSeparator: FC<VSeparatorProps>;

type SliderProps = SliderProps$1 & {
    label?: ReactNode;
};
const Slider: React.ForwardRefExoticComponent<SliderProps$1<number | number[]> & {
    label?: ReactNode;
} & React.RefAttributes<SliderRef>>;

const base16Theme: {
    scheme: string;
    author: string;
    base00: string;
    base01: string;
    base02: string;
    base03: string;
    base04: string;
    base05: string;
    base06: string;
    base07: string;
    base08: string;
    base09: string;
    base0A: string;
    base0B: string;
    base0C: string;
    base0D: string;
    base0E: string;
    base0F: string;
};

const Kbd: FC<HTMLProps<HTMLSpanElement>>;

type BlockquoteProps = {
    cite?: string;
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "danger" | "dark" | "light" | "warning-alt";
    align?: "left" | "center" | "right";
    padding?: "compressed" | "default" | "loose";
} & HTMLProps<HTMLQuoteElement>;
const Blockquote: React.ForwardRefExoticComponent<Omit<BlockquoteProps, "ref"> & React.RefAttributes<HTMLQuoteElement>>;

type GaugeColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
type GaugeProps = {
    color?: GaugeColor;
    size?: "small" | "default" | "large";
    className?: string;
    label?: ReactNode;
    percentage: number;
};
const Gauge: React.ForwardRefExoticComponent<Omit<GaugeProps & Omit<React.HTMLProps<HTMLDivElement>, "size">, "ref"> & React.RefAttributes<HTMLDivElement>>;

type UseTooltipReturn = ReturnType<typeof useFloating> & {
    getFloatingProps: ReturnType<typeof useInteractions>["getFloatingProps"];
    show: boolean;
    getReferenceProps: ReturnType<typeof useInteractions>["getReferenceProps"];
    arrowRef: MutableRefObject<any>;
};
function useTooltip(placement?: Placement): UseTooltipReturn;
const TooltipWrapper: FC<PropsWithChildren<Omit<ReturnType<typeof useTooltip>, "getReferenceProps" | "reference">> & {
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
}>;
type WithTooltipProps = {
    children: JSX.Element;
    tooltip: ReactNode;
    placement?: Placement;
};
const WithTooltip: FC<WithTooltipProps>;

type FloatingContextProps = {
    rootRef: RefObject<HTMLElement>;
};
type Options$1 = {
    root?: HTMLElement;
    portalId?: any;
    fallbackPortalId?: any;
};
const useFloatingContext: ({ root, portalId, fallbackPortalId, }?: Options$1) => {
    root: HTMLElement;
    id: any;
};
const FloatingProvider: FC<PropsWithChildren<FloatingContextProps>>;

const FloatingTreeWrapper$1: FC<{
    children: ReactNode;
    withPortal?: boolean;
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    force?: boolean;
}>;

type SegmentedOption<V> = {
    label: ReactNode;
    value: V;
    disabled?: boolean;
};
type Props<V> = {
    options: SegmentedOption<V>[] | readonly SegmentedOption<V>[];
    value: V;
    label?: ReactNode;
    inline?: boolean;
    fullWidth?: boolean;
    small?: boolean;
} & HTMLProps<HTMLInputElement> & Required<Pick<HTMLProps<HTMLInputElement>, "name">>;
function UrefedSegmented<V extends string | number = string>({ options, value, label, inline, className, fullWidth, small, ...props }: Props<V>, ref: Ref<HTMLDivElement>): JSX.Element;
type SegmentedControlProps<V> = Props<V> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
};
const SegmentedControl: <V extends string | number = string>({ options, value, ...props }: SegmentedControlProps<V>) => ReturnType<typeof UrefedSegmented>;

const FloatingTreeWrapper: FC<{
    children: ReactNode;
    withPortal?: boolean;
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    force?: boolean;
}>;

type PopoverContextProps = {
    setOverlayState: (show: boolean) => void;
    setOverlay: (overlay: ReactNode) => void;
};
const usePopoverContext: () => PopoverContextProps;

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
}>;
interface PopoverHandlers {
    close: () => void;
    open: () => void;
}
const Popover: React.ForwardRefExoticComponent<{
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
} & {
    children?: React.ReactNode;
} & React.RefAttributes<PopoverHandlers>>;

type PopoverTitleProps = {
    children: ReactNode;
    noLine?: boolean;
} & HTMLProps<HTMLHeadingElement>;
const PopoverTitle: React.ForwardRefExoticComponent<Omit<PopoverTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>>;

const GenericPopover: React.ForwardRefExoticComponent<Omit<React.HTMLProps<HTMLDivElement> & {
    wrapperClassName?: string;
    state: TransitionStatus;
    offset?: Parameters<typeof offset>[0];
}, "ref"> & React.RefAttributes<HTMLDivElement>>;

type Options = {
    onOpen?: () => unknown;
    onClose?: () => unknown;
    popoverComponent?: ComponentType<ComponentProps<typeof GenericPopover>>;
} & Pick<PopoverProps, "initialFocus" | "guardsFocus" | "modalFocus" | "closeOnFocusOut" | "offset" | "portalRoot" | "placement" | "portalId">;
function usePopover({ onClose, onOpen, popoverComponent, placement, initialFocus, guardsFocus, modalFocus, closeOnFocusOut, offset: offsetOptions, portalRoot, portalId, }: Options): {
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    reference: (node: _floating_ui_react.ReferenceType) => void;
    render: (body: ReactNode) => JSX.Element;
    isShown: boolean;
    refs: _floating_ui_react.ExtendedRefs<_floating_ui_react.ReferenceType>;
    close: () => void;
    open: () => void;
};

interface ContextMenuProps {
    contextMenuRef: MutableRefObject<HTMLElement | null>;
    onContextMenu?: (e: globalThis.MouseEvent) => boolean | Promise<boolean>;
    children: ReactNode;
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
}
const ContextMenu: FC<ContextMenuProps>;

export { Accordion, AccordionElement, AccordionElementProps, Alert, AlertProps, AlertType, Badge, BadgeColor, Blockquote, Button, ButtonColor$2 as ButtonColor, ButtonGroup, ButtonGroupProps, ButtonProps$1 as ButtonProps, Checkbox, ConditionalWrapper, DynamicModal as ConfirmationListener, ConfirmationModal, ConfirmationModalProps, ContextMenu, CreatableReactSelect, CreatableReactSelectProps, DefaultTablePagination, Display, Display0, Display1, Display2, Display3, Display4, DisplayIf, DontAskAgain, Dots, DotsColor, Dropdown, Dropzone, DropzoneProps, DynamicModal, DynamicModalProps, EditableSelect, FloatingProvider, FloatingTreeWrapper$1 as FloatingTreeWrapper, Footer, FullInputChipsProps$1 as FullInputChipsProps, Gauge, GaugeColor, GenericPopover, GenericTable, GenericTableProps, Header, HeaderPanel, HeaderTitle, IToast, Icon, IndeterminateCheckbox, Input, InputChips, InputChipsProps$1 as InputChipsProps, InputHelpBaloon, InputHelpBlock, InputProps, Kbd, Label, LabelColor$4 as LabelColor, Menu, MenuDivider, MenuElement, MenuGroup, Modal$1 as Modal, ModalBody$1 as ModalBody, ModalFooter$1 as ModalFooter, ModalHeader$1 as ModalHeader, ModalProps$1 as ModalProps, ModalProvider, ModalProviderProps, ModalSize$1 as ModalSize, Option, OptionGroup, Pagination, PaginationProps, Panel, PanelProps, Popover, PopoverHandlers, PopoverProps, PopoverTitle, Portal, PortalProps, Progressbar, ProgressbarColor, PromptModal, PromptModalProps, PropsWithCloseModal, Radio, Radios, ReactSelect, ReactSelectProps, Section, SegmentedControl, SegmentedControlProps, SegmentedOption, Slider, SliderProps, Spinner, Step, Steps, Switch, Tab, Table, Tabs, TabsHeader, Textarea, Timeline, TimelineItem, TimelineItemProps, TimelineProps, Toast, ToastContainer, ToastProps, TooltipWrapper, VSeparator, VerticalCenter, WithBadge, WithTooltip, WithTooltipProps, base16Theme, confirmation, dynamicModal, findOption, findOptions, isGrouped, notificationModal as notification, notificationModal, prompt, toast, useFloatingContext, useModalProvider, usePopover, usePopoverContext, useTooltip };

}

declare module "@vkumov/react-cui-2.0/Accordion" {
  import { Accordion, AccordionElement } from "@vkumov/react-cui-2.0";
  export { Accordion, AccordionElement };
}

declare module "@vkumov/react-cui-2.0/Alert" {
  import { Alert } from "@vkumov/react-cui-2.0";
  export { Alert };
}

declare module "@vkumov/react-cui-2.0/Badge" {
  import { Badge, WithBadge } from "@vkumov/react-cui-2.0";
  export { Badge, WithBadge };
}

declare module "@vkumov/react-cui-2.0/Blockquote" {
  import { Blockquote } from "@vkumov/react-cui-2.0";
  export { Blockquote };
}

declare module "@vkumov/react-cui-2.0/Button" {
  import { Button, ButtonGroup } from "@vkumov/react-cui-2.0";
  export { Button, ButtonGroup };
}

declare module "@vkumov/react-cui-2.0/Checkbox" {
  import { Checkbox, IndeterminateCheckbox } from "@vkumov/react-cui-2.0";
  export { Checkbox, IndeterminateCheckbox };
}

declare module "@vkumov/react-cui-2.0/Conditional" {
  import { ConditionalWrapper, DisplayIf } from "@vkumov/react-cui-2.0";
  export { ConditionalWrapper, DisplayIf };
}

declare module "@vkumov/react-cui-2.0/ContextMenu" {
  import { ContextMenu } from "@vkumov/react-cui-2.0";
  export { ContextMenu };
}

declare module "@vkumov/react-cui-2.0/Dropdown" {
  import { Dropdown, Menu, MenuDivider, MenuElement, MenuGroup } from "@vkumov/react-cui-2.0";
  export { Dropdown, Menu, MenuDivider, MenuElement, MenuGroup };
}

declare module "@vkumov/react-cui-2.0/Dropzone" {
  import { Dropzone } from "@vkumov/react-cui-2.0";
  export { Dropzone };
}

declare module "@vkumov/react-cui-2.0/FloatingProvider" {
  import { FloatingProvider, FloatingTreeWrapper, useFloatingContext } from "@vkumov/react-cui-2.0";
  export { FloatingProvider, FloatingTreeWrapper, useFloatingContext };
}

declare module "@vkumov/react-cui-2.0/Gauge" {
  import { Gauge } from "@vkumov/react-cui-2.0";
  export { Gauge };
}

declare module "@vkumov/react-cui-2.0/Icon" {
  import { Icon } from "@vkumov/react-cui-2.0";
  export { Icon };
}

declare module "@vkumov/react-cui-2.0/Input" {
  import { Input } from "@vkumov/react-cui-2.0";
  export { Input };
}

declare module "@vkumov/react-cui-2.0/InputChips" {
  import { InputChips } from "@vkumov/react-cui-2.0";
  export { InputChips };
}

declare module "@vkumov/react-cui-2.0/InputHelp" {
  import { InputHelpBaloon, InputHelpBlock } from "@vkumov/react-cui-2.0";
  export { InputHelpBaloon, InputHelpBlock };
}

declare module "@vkumov/react-cui-2.0/Kbd" {
  import { Kbd } from "@vkumov/react-cui-2.0";
  export { Kbd };
}

declare module "@vkumov/react-cui-2.0/Label" {
  import { Label } from "@vkumov/react-cui-2.0";
  export { Label };
}

declare module "@vkumov/react-cui-2.0/Layout" {
  import { Footer, Header, HeaderPanel, HeaderTitle } from "@vkumov/react-cui-2.0";
  export { Footer, Header, HeaderPanel, HeaderTitle };
}

declare module "@vkumov/react-cui-2.0/Loader" {
  import { Dots, Spinner } from "@vkumov/react-cui-2.0";
  export { Dots, Spinner };
}

declare module "@vkumov/react-cui-2.0/Modal" {
  import { ConfirmationListener, ConfirmationModal, DynamicModal, Modal, ModalBody, ModalFooter, ModalHeader, ModalProvider, PromptModal, confirmation, dynamicModal, notification, notificationModal, prompt, useModalProvider } from "@vkumov/react-cui-2.0";
  export { ConfirmationListener, ConfirmationModal, DynamicModal, Modal, ModalBody, ModalFooter, ModalHeader, ModalProvider, PromptModal, confirmation, dynamicModal, notification, notificationModal, prompt, useModalProvider };
}

declare module "@vkumov/react-cui-2.0/Pagination" {
  import { Pagination } from "@vkumov/react-cui-2.0";
  export { Pagination };
}

declare module "@vkumov/react-cui-2.0/Panel" {
  import { Panel } from "@vkumov/react-cui-2.0";
  export { Panel };
}

declare module "@vkumov/react-cui-2.0/Popover" {
  import { GenericPopover, Popover, PopoverTitle, usePopover, usePopoverContext } from "@vkumov/react-cui-2.0";
  export { GenericPopover, Popover, PopoverTitle, usePopover, usePopoverContext };
}

declare module "@vkumov/react-cui-2.0/Portal" {
  import { Portal } from "@vkumov/react-cui-2.0";
  export { Portal };
}

declare module "@vkumov/react-cui-2.0/Progressbar" {
  import { Progressbar } from "@vkumov/react-cui-2.0";
  export { Progressbar };
}

declare module "@vkumov/react-cui-2.0/Radio" {
  import { Radio, Radios } from "@vkumov/react-cui-2.0";
  export { Radio, Radios };
}

declare module "@vkumov/react-cui-2.0/ReactSelect/creatable" {
  import { CreatableReactSelect } from "@vkumov/react-cui-2.0";
  export { CreatableReactSelect };
}

declare module "@vkumov/react-cui-2.0/ReactSelect/helpers" {
  import { findOption, findOptions, isGrouped } from "@vkumov/react-cui-2.0";
  export { findOption, findOptions, isGrouped };
}

declare module "@vkumov/react-cui-2.0/ReactSelect" {
  import { ReactSelect } from "@vkumov/react-cui-2.0";
  export { ReactSelect };
}

declare module "@vkumov/react-cui-2.0/Section" {
  import { Section } from "@vkumov/react-cui-2.0";
  export { Section };
}

declare module "@vkumov/react-cui-2.0/SegmentedControl" {
  import { SegmentedControl } from "@vkumov/react-cui-2.0";
  export { SegmentedControl };
}

declare module "@vkumov/react-cui-2.0/Select" {
  import { EditableSelect } from "@vkumov/react-cui-2.0";
  export { EditableSelect };
}

declare module "@vkumov/react-cui-2.0/Slider" {
  import { Slider } from "@vkumov/react-cui-2.0";
  export { Slider };
}

declare module "@vkumov/react-cui-2.0/Steps" {
  import { Step, Steps } from "@vkumov/react-cui-2.0";
  export { Step, Steps };
}

declare module "@vkumov/react-cui-2.0/Switch" {
  import { Switch } from "@vkumov/react-cui-2.0";
  export { Switch };
}

declare module "@vkumov/react-cui-2.0/Table" {
  import { DefaultTablePagination, GenericTable, Table } from "@vkumov/react-cui-2.0";
  export { DefaultTablePagination, GenericTable, Table };
}

declare module "@vkumov/react-cui-2.0/Tabs" {
  import { Tab, Tabs, TabsHeader } from "@vkumov/react-cui-2.0";
  export { Tab, Tabs, TabsHeader };
}

declare module "@vkumov/react-cui-2.0/Textarea" {
  import { Textarea } from "@vkumov/react-cui-2.0";
  export { Textarea };
}

declare module "@vkumov/react-cui-2.0/Timeline" {
  import { Timeline, TimelineItem } from "@vkumov/react-cui-2.0";
  export { Timeline, TimelineItem };
}

declare module "@vkumov/react-cui-2.0/Toast" {
  import { Toast, ToastContainer, toast } from "@vkumov/react-cui-2.0";
  export { Toast, ToastContainer, toast };
}

declare module "@vkumov/react-cui-2.0/Tooltip" {
  import { TooltipWrapper, WithTooltip, useTooltip } from "@vkumov/react-cui-2.0";
  export { TooltipWrapper, WithTooltip, useTooltip };
}

declare module "@vkumov/react-cui-2.0/Typo" {
  import { Display, Display0, Display1, Display2, Display3, Display4 } from "@vkumov/react-cui-2.0";
  export { Display, Display0, Display1, Display2, Display3, Display4 };
}

declare module "@vkumov/react-cui-2.0/VSeparator" {
  import { VSeparator } from "@vkumov/react-cui-2.0";
  export { VSeparator };
}

declare module "@vkumov/react-cui-2.0/VerticalCenter" {
  import { VerticalCenter } from "@vkumov/react-cui-2.0";
  export { VerticalCenter };
}

declare module "@vkumov/react-cui-2.0/utils/base16Theme" {
  import { base16Theme } from "@vkumov/react-cui-2.0";
  export { base16Theme };
}