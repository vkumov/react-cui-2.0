import React, {
  createContext,
  useContext,
  useMemo,
  type FC,
  type PropsWithChildren,
  type RefObject,
} from "react";

type FloatingContextProps = {
  rootRef: RefObject<HTMLElement>;
};

const FloatingContext = createContext<FloatingContextProps>(null);

type Options = {
  root?: HTMLElement;
  portalId?: any;
  fallbackPortalId?: any;
};

export const useFloatingContext = ({
  root,
  portalId,
  fallbackPortalId,
}: Options = {}) => {
  const ctx = useContext(FloatingContext);

  root ??= ctx?.rootRef?.current || undefined;
  portalId ??= fallbackPortalId ?? null;

  return useMemo(() => ({ root, id: portalId }), [root, portalId]);
};

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
