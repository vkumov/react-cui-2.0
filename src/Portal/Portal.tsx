import React, { ReactPortal } from "react";
import { createPortal } from "react-dom";
import { usePortal } from "../hooks/usePortal";

export interface PortalProps {
  /** Portal children, for example, modal or popover */
  children: React.ReactNode;

  /** Root element z-index property */
  zIndex?: number;

  /** Root element position property */
  position?: string;

  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLElement | string;

  /** Root element className */
  className?: string;
}

const defaultProps: Partial<PortalProps> = {
  zIndex: 1,
  position: "relative",
};

export function Portal(props: PortalProps): ReactPortal {
  const { children, zIndex, target, className, position } = {
    ...defaultProps,
    ...props,
  };

  const portal = usePortal(target);

  if (!portal) {
    return null;
  }

  return createPortal(
    <div className={className} style={{ position: position as any, zIndex }}>
      {children}
    </div>,
    portal
  );
}
