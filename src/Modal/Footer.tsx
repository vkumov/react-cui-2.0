import React, { FC, HTMLProps, PropsWithChildren } from "react";

import { appendClass as ac } from "src/utils";

/**
 * Modal Footer
 */

type ModalFooterProps = PropsWithChildren<{
  className?: string;
}> &
  HTMLProps<HTMLDivElement>;

export const ModalFooter: FC<ModalFooterProps> = ({
  className = null,
  children,
  ...props
}) => (
  <div className={`modal__footer${ac(className)}`} {...props}>
    {children}
  </div>
);
