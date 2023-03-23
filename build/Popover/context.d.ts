import { FC, PropsWithChildren, ReactNode } from 'react';

type PopoverContextProps = {
    setOverlayState: (show: boolean) => void;
    setOverlay: (overlay: ReactNode) => void;
};
declare const PopoverProvider: FC<PropsWithChildren<PopoverContextProps>>;
declare const usePopoverContext: () => PopoverContextProps;

export { PopoverProvider, usePopoverContext };
