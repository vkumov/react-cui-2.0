import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { usePortal } from "src/hooks/usePortal";

type PortalProps = {
  id: string;
  children: ReactNode;
};

/**
 * @example
 * <Portal>
 *   <p>Thinking with portals</p>
 * </Portal>
 */
export const Portal: FC<PortalProps> = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};
