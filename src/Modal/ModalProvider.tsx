import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type ComponentProps,
  type FC,
  type MutableRefObject,
  type ReactNode,
} from "react";
import type { FloatingPortal } from "@floating-ui/react";

import { DynamicModal } from "./DynamicModal";

type ModalContextProps = {
  addRendered: (id: string) => void;
  removeRendered: (id: string) => void;
  lastRendered: () => string | null;
  rendered: MutableRefObject<string[]>;
};

const ModalContext = createContext<ModalContextProps | null>(null);

export type ModalProviderProps = {
  portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
  portalId?: ComponentProps<typeof FloatingPortal>["id"];
  closeTimeout?: number;
  children: ReactNode;
};

export const useModalProvider = () => useContext(ModalContext);

export const ModalProvider: FC<ModalProviderProps> = ({
  children,
  closeTimeout,
  portalId,
  portalRoot,
}) => {
  const rendered = useRef<string[]>([]);
  const addRendered = useCallback((id: string) => {
    rendered.current = [...rendered.current, id];
  }, []);
  const removeRendered = useCallback((id: string) => {
    rendered.current = rendered.current.filter((n) => n !== id);
  }, []);
  const lastRendered = useCallback(() => {
    if (rendered.current.length > 0)
      return rendered.current[rendered.current.length - 1];
    return null;
  }, []);

  return (
    <ModalContext.Provider
      value={useMemo(
        () => ({
          rendered,
          addRendered,
          removeRendered,
          lastRendered,
        }),
        [rendered, addRendered, removeRendered, lastRendered]
      )}
    >
      {children}
      <DynamicModal
        closeTimeout={closeTimeout}
        portalId={portalId}
        portalRoot={portalRoot}
      />
    </ModalContext.Provider>
  );
};
