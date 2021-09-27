import React, { FC, HTMLProps, PropsWithChildren } from "react";

import { appendClass as ac } from "../../utils";

/**
 * Modal Body
 */

type ModalBodyProps = PropsWithChildren<{
  className?: string;
}> &
  HTMLProps<HTMLDivElement>;

export const ModalBody: FC<ModalBodyProps> = ({
  className = null,
  children,
  ...props
}) => (
  <div className={`modal__body${ac(className)}`} {...props}>
    {children}
  </div>
);
