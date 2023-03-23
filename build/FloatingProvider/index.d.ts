import { FC, PropsWithChildren, RefObject, ReactNode, ComponentProps } from 'react';
import { FloatingPortal } from '@floating-ui/react';

type FloatingContextProps = {
    rootRef: RefObject<HTMLElement>;
};
type Options = {
    root?: HTMLElement;
    portalId?: any;
    fallbackPortalId?: any;
};
declare const useFloatingContext: ({ root, portalId, fallbackPortalId, }?: Options) => {
    root: HTMLElement;
    id: any;
};
declare const FloatingProvider: FC<PropsWithChildren<FloatingContextProps>>;

declare const FloatingTreeWrapper: FC<{
    children: ReactNode;
    withPortal?: boolean;
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    force?: boolean;
}>;

export { FloatingProvider, FloatingTreeWrapper, useFloatingContext };
