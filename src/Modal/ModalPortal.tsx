import React, { ComponentProps, FC, ReactNode } from "react";
import { FloatingPortal } from "@floating-ui/react";

import { useFloatingContext } from "src/FloatingProvider";

export type ModalPortalProps = {
  children?: ReactNode;
} & ComponentProps<typeof FloatingPortal>;

export const ModalPortal: FC<ModalPortalProps> = ({
  root: rootProvided,
  id = "--cui-modal-portal",
  children,
  ...props
}) => {
  const modalContext = useFloatingContext();
  const root: HTMLElement | null | undefined =
    rootProvided ?? modalContext ? modalContext.rootRef.current : undefined;

  return (
    <FloatingPortal root={root} id={id} {...props}>
      {children}
    </FloatingPortal>
  );
};
