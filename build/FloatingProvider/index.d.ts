import { FC, PropsWithChildren, RefObject } from 'react';

type FloatingContextProps = {
    rootRef: RefObject<HTMLElement>;
};
declare const useFloatingContext: () => FloatingContextProps;
declare const FloatingProvider: FC<PropsWithChildren<FloatingContextProps>>;

export { FloatingProvider, useFloatingContext };
