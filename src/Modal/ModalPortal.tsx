import React, { ComponentProps, FC, ReactNode } from "react";
import { FloatingPortal } from "@floating-ui/react";

import { useFloatingContext } from "src/FloatingProvider";

export type ModalPortalProps = {
  children?: ReactNode;
} & ComponentProps<typeof FloatingPortal>;

export const ModalPortal: FC<ModalPortalProps> = ({
  root: rootProvided,
  id: portalId,
  children,
  ...props
}) => {
  const { root, id } = useFloatingContext({
    root: rootProvided,
    portalId,
    fallbackPortalId: "--cui-modal-portal",
  });

  return (
    <FloatingPortal root={root} id={id} {...props}>
      {children}
    </FloatingPortal>
  );
};
