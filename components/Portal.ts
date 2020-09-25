import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import usePortal from "../hooks/usePortal";

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
const Portal: FC<PortalProps> = ({ id, children }) => {
  const target = usePortal(id);
  return createPortal(children, target);
};

export default Portal;
