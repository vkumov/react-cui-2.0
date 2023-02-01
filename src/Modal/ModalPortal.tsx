import React, { ComponentProps, FC, ReactNode } from "react";
import { FloatingPortal } from "@floating-ui/react";

import { useFloatingContext } from "src/FloatingProvider";

export type ModalPortalProps = {
  children?: ReactNode;
} & ComponentProps<typeof FloatingPortal>;

export const ModalPortal: FC<ModalPortalProps> = ({
  root: rootProvided,
  id,
  children,
  ...props
}) => {
  const modalContext = useFloatingContext();
  const root: HTMLElement | null | undefined =
    rootProvided ?? modalContext ? modalContext.rootRef.current : undefined;

  id ??= root ? undefined : "--cui-modal-portal";

  return (
    <FloatingPortal root={root} id={id} {...props}>
      {children}
    </FloatingPortal>
  );
};
