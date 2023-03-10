import React, { type ComponentProps, type FC, type ReactNode } from "react";
import {
  FloatingPortal,
  FloatingTree,
  useFloatingTree,
} from "@floating-ui/react";

export const FloatingTreeWrapper: FC<{
  children: ReactNode;
  withPortal?: boolean;
  portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
  portalId?: ComponentProps<typeof FloatingPortal>["id"];
  force?: boolean;
}> = ({ children, withPortal, portalId, portalRoot, force }) => {
  const tree = useFloatingTree();

  if (!Boolean(tree) || force) {
    if (withPortal)
      return (
        <FloatingPortal id={portalId} root={portalRoot}>
          <FloatingTree>{children}</FloatingTree>
        </FloatingPortal>
      );
    return <FloatingTree>{children}</FloatingTree>;
  }

  return <>{children}</>;
};
