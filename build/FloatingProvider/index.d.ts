import { FC, PropsWithChildren, RefObject } from 'react';

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

export { FloatingProvider, useFloatingContext };
