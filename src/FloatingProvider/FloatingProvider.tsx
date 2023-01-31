import React, {
  createContext,
  useContext,
  type FC,
  type PropsWithChildren,
  type RefObject,
} from "react";

type FloatingContextProps = {
  rootRef: RefObject<HTMLElement>;
};

const FloatingContext = createContext<FloatingContextProps>(null);

export const useFloatingContext = () => useContext(FloatingContext);

export const FloatingProvider: FC<PropsWithChildren<FloatingContextProps>> = ({
  rootRef,
  children,
}) => {
  return (
    <FloatingContext.Provider value={{ rootRef }}>
      {children}
    </FloatingContext.Provider>
  );
};
