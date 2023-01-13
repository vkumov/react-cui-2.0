import React, {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
  type ReactNode,
} from "react";

type PopoverContextProps = {
  setOverlayState: (show: boolean) => void;
  setOverlay: (overlay: ReactNode) => void;
};

const PopoverContext = createContext<PopoverContextProps>(null!);

export const PopoverProvider: FC<PropsWithChildren<PopoverContextProps>> = ({
  children,
  ...props
}) => (
  <PopoverContext.Provider value={props}>{children}</PopoverContext.Provider>
);

export const usePopoverContext = () => useContext(PopoverContext);
